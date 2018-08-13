/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = require("crypto");
const fs = require("fs");
class TokenCache {
    constructor(_credentialProvider, _credentialServiceKey, _cacheSerializationPath) {
        this._credentialProvider = _credentialProvider;
        this._credentialServiceKey = _credentialServiceKey;
        this._cacheSerializationPath = _cacheSerializationPath;
    }
    // PUBLIC METHODS //////////////////////////////////////////////////////
    add(entries, callback) {
        let self = this;
        this.doOperation(() => {
            return self.readCache()
                .then(cache => self.addToCache(cache, entries))
                .then(updatedCache => self.writeCache(updatedCache))
                .then(() => callback(null), (err) => callback(err));
        });
    }
    clear() {
        let self = this;
        // 1) Delete encrypted serialization file
        //    If we got an 'ENOENT' response, the file doesn't exist, which is fine
        // 3) Delete the encryption key
        return new Promise((resolve, reject) => {
            fs.unlink(self._cacheSerializationPath, err => {
                if (err && err.code !== 'ENOENT') {
                    reject(err);
                }
                else {
                    resolve();
                }
            });
        })
            .then(() => { return self._credentialProvider.deleteCredential(self._credentialServiceKey); })
            .then(() => { });
    }
    find(query, callback) {
        let self = this;
        this.doOperation(() => {
            return self.readCache()
                .then(cache => {
                return cache.filter(entry => TokenCache.findByPartial(entry, query));
            })
                .then(results => callback(null, results), (err) => callback(err, null));
        });
    }
    remove(entries, callback) {
        let self = this;
        this.doOperation(() => {
            return this.readCache()
                .then(cache => self.removeFromCache(cache, entries))
                .then(updatedCache => self.writeCache(updatedCache))
                .then(() => callback(null), (err) => callback(err));
        });
    }
    // PRIVATE METHODS /////////////////////////////////////////////////////
    static findByKeyHelper(entry1, entry2) {
        return entry1._authority === entry2._authority
            && entry1._clientId === entry2._clientId
            && entry1.userId === entry2.userId
            && entry1.resource === entry2.resource;
    }
    static findByPartial(entry, query) {
        for (let key in query) {
            if (entry[key] === undefined || entry[key] !== query[key]) {
                return false;
            }
        }
        return true;
    }
    doOperation(op) {
        // Initialize the active operation to an empty promise if necessary
        let activeOperation = this._activeOperation || Promise.resolve(null);
        // Chain the operation to perform to the end of the existing promise
        activeOperation = activeOperation.then(op);
        // Add a catch at the end to make sure we can continue after any errors
        activeOperation = activeOperation.then(null, err => {
            console.error(`Failed to perform token cache operation: ${err}`);
        });
        // Point the current active operation to this one
        this._activeOperation = activeOperation;
    }
    addToCache(cache, entries) {
        // First remove entries from the db that are being updated
        cache = this.removeFromCache(cache, entries);
        // Then add the new entries to the cache
        entries.forEach((entry) => {
            cache.push(entry);
        });
        return cache;
    }
    getOrCreateEncryptionParams() {
        let self = this;
        return this._credentialProvider.readCredential(this._credentialServiceKey)
            .then(credential => {
            if (credential.password) {
                // We already have encryption params, deserialize them
                let splitValues = credential.password.split('|');
                if (splitValues.length === 2 && splitValues[0] && splitValues[1]) {
                    try {
                        return {
                            key: new Buffer(splitValues[0], 'hex'),
                            initializationVector: new Buffer(splitValues[1], 'hex')
                        };
                    }
                    catch (e) {
                        // Swallow the error and fall through to generate new params
                        console.warn('Failed to deserialize encryption params, new ones will be generated.');
                    }
                }
            }
            // We haven't stored encryption values, so generate them
            let encryptKey = crypto.randomBytes(TokenCache.CipherKeyLength);
            let initializationVector = crypto.randomBytes(TokenCache.CipherAlgorithmIvLength);
            // Serialize the values
            let serializedValues = `${encryptKey.toString('hex')}|${initializationVector.toString('hex')}`;
            return self._credentialProvider.saveCredential(self._credentialServiceKey, serializedValues)
                .then(() => {
                return {
                    key: encryptKey,
                    initializationVector: initializationVector
                };
            });
        });
    }
    readCache() {
        let self = this;
        // NOTE: File system operations are performed synchronously to avoid annoying nested callbacks
        // 1) Get the encryption key
        // 2) Read the encrypted token cache file
        // 3) Decrypt the file contents
        // 4) Deserialize and return
        return this.getOrCreateEncryptionParams()
            .then(encryptionParams => {
            try {
                let cacheCipher = fs.readFileSync(self._cacheSerializationPath, TokenCache.FsOptions);
                let decipher = crypto.createDecipheriv(TokenCache.CipherAlgorithm, encryptionParams.key, encryptionParams.initializationVector);
                let cacheJson = decipher.update(cacheCipher, 'hex', 'binary');
                cacheJson += decipher.final('binary');
                return JSON.parse(cacheJson);
            }
            catch (e) {
                throw e;
            }
        })
            .then(null, err => {
            // If reading the token cache fails, we'll just assume the tokens are garbage
            console.warn(`Failed to read token cache: ${err}`);
            return [];
        });
    }
    removeFromCache(cache, entries) {
        entries.forEach((entry) => {
            // Check to see if the entry exists
            let match = cache.findIndex(entry2 => TokenCache.findByKeyHelper(entry, entry2));
            if (match >= 0) {
                // Entry exists, remove it from cache
                cache.splice(match, 1);
            }
        });
        return cache;
    }
    writeCache(cache) {
        let self = this;
        // NOTE: File system operations are being done synchronously to avoid annoying callback nesting
        // 1) Get (or generate) the encryption key
        // 2) Stringify the token cache entries
        // 4) Encrypt the JSON
        // 3) Write to the file
        return this.getOrCreateEncryptionParams()
            .then(encryptionParams => {
            try {
                let cacheJson = JSON.stringify(cache);
                let cipher = crypto.createCipheriv(TokenCache.CipherAlgorithm, encryptionParams.key, encryptionParams.initializationVector);
                let cacheCipher = cipher.update(cacheJson, 'binary', 'hex');
                cacheCipher += cipher.final('hex');
                fs.writeFileSync(self._cacheSerializationPath, cacheCipher, TokenCache.FsOptions);
            }
            catch (e) {
                throw e;
            }
        });
    }
}
TokenCache.CipherAlgorithm = 'aes256';
TokenCache.CipherAlgorithmIvLength = 16;
TokenCache.CipherKeyLength = 32;
TokenCache.FsOptions = { encoding: 'ascii' };
exports.default = TokenCache;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/8a3011756318a2ded1e6e84332230a2b2bf9c544/extensions\account-provider-azure\out/account-provider\tokenCache.js.map
