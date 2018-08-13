/*---------------------------------------------------------------------------------------------
*  Copyright (c) Microsoft Corporation. All rights reserved.
*  Licensed under the Source EULA. See License.txt in the project root for license information.
*--------------------------------------------------------------------------------------------*/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Contracts = require("../models/contracts");
const extensions_modules_1 = require("extensions-modules");
/**
 * Implements a credential storage for Windows, Mac (darwin), or Linux.
 *
 * Allows a single credential to be stored per service (that is, one username per service);
 */
class CredentialStore {
    constructor(_client) {
        this._client = _client;
        if (!this._client) {
            this._client = extensions_modules_1.SqlToolsServiceClient.instance;
        }
    }
    /**
     * Gets a credential saved in the credential store
     *
     * @param {string} credentialId the ID uniquely identifying this credential
     * @returns {Promise<Credential>} Promise that resolved to the credential, or undefined if not found
     */
    readCredential(credentialId) {
        extensions_modules_1.Utils.logDebug(this.languageClient, 'MainController._extensionConstants');
        let self = this;
        let cred = new Contracts.Credential();
        cred.credentialId = credentialId;
        return new Promise((resolve, reject) => {
            self._client
                .sendRequest(Contracts.ReadCredentialRequest.type, cred, this.languageClient)
                .then(returnedCred => {
                resolve(returnedCred);
            }, err => reject(err));
        });
    }
    saveCredential(credentialId, password) {
        let self = this;
        let cred = new Contracts.Credential();
        cred.credentialId = credentialId;
        cred.password = password;
        return new Promise((resolve, reject) => {
            self._client
                .sendRequest(Contracts.SaveCredentialRequest.type, cred, this.languageClient)
                .then(status => {
                resolve(status);
            }, err => reject(err));
        });
    }
    deleteCredential(credentialId) {
        let self = this;
        let cred = new Contracts.Credential();
        cred.credentialId = credentialId;
        return new Promise((resolve, reject) => {
            self._client
                .sendRequest(Contracts.DeleteCredentialRequest.type, cred, this.languageClient)
                .then(status => {
                resolve(status);
            }, err => reject(err));
        });
    }
}
exports.CredentialStore = CredentialStore;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/8a3011756318a2ded1e6e84332230a2b2bf9c544/extensions\mssql\client\out/credentialstore\credentialstore.js.map
