/*---------------------------------------------------------------------------------------------
*  Copyright (c) Microsoft Corporation. All rights reserved.
*  Licensed under the Source EULA. See License.txt in the project root for license information.
*--------------------------------------------------------------------------------------------*/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Contracts = require("../models/contracts");
const extensions_modules_1 = require("extensions-modules");
/**
 * Implements serializer for query results
 */
class Serialization {
    constructor(_client, _languageClient) {
        this._client = _client;
        this._languageClient = _languageClient;
        if (!this._client) {
            this._client = extensions_modules_1.SqlToolsServiceClient.instance;
        }
    }
    /**
     * Saves results as a specified path
     *
     * @param {string} credentialId the ID uniquely identifying this credential
     * @returns {Promise<ISaveResultsInfo>} Promise that resolved to the credential, or undefined if not found
     */
    saveAs(saveFormat, savePath, results, appendToFile) {
        let self = this;
        let resultsInfo = new Contracts.SaveResultsInfo(saveFormat, savePath, results, appendToFile);
        return new Promise((resolve, reject) => {
            self._client
                .sendRequest(Contracts.SaveAsRequest.type, resultsInfo, this._languageClient)
                .then(result => {
                resolve(result);
            }, err => reject(err));
        });
    }
}
exports.Serialization = Serialization;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/8a3011756318a2ded1e6e84332230a2b2bf9c544/extensions\mssql\client\out/serialize\serialization.js.map
