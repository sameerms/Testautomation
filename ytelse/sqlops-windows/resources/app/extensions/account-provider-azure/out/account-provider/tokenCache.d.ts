import * as adal from 'adal-node';
import * as data from 'data';
export default class TokenCache implements adal.TokenCache {
    private _credentialProvider;
    private _credentialServiceKey;
    private _cacheSerializationPath;
    private static CipherAlgorithm;
    private static CipherAlgorithmIvLength;
    private static CipherKeyLength;
    private static FsOptions;
    private _activeOperation;
    constructor(_credentialProvider: data.CredentialProvider, _credentialServiceKey: string, _cacheSerializationPath: string);
    add(entries: adal.TokenCacheEntry[], callback: (error?: Error) => void): void;
    clear(): Thenable<void>;
    find(query: adal.TokenCacheQuery, callback: (error: Error, results: adal.TokenCacheEntry[]) => void): void;
    remove(entries: adal.TokenCacheEntry[], callback: (error?: Error) => void): void;
    private static findByKeyHelper(entry1, entry2);
    private static findByPartial(entry, query);
    private doOperation<T>(op);
    private addToCache(cache, entries);
    private getOrCreateEncryptionParams();
    private readCache();
    private removeFromCache(cache, entries);
    private writeCache(cache);
}
