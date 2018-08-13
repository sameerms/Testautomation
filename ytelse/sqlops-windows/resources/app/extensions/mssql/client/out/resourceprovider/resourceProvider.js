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
class AzureResourceProvider {
    constructor(_client, langClient) {
        this._client = _client;
        if (!this._client) {
            this._client = extensions_modules_1.SqlToolsServiceClient.instance;
        }
        this.languageClient = langClient;
    }
    createFirewallRule(account, firewallruleInfo) {
        let self = this;
        return new Promise((resolve, reject) => {
            self._client.
                sendRequest(Contracts.CreateFirewallRuleRequest.type, self.asCreateFirewallRuleParams(account, firewallruleInfo), self.languageClient)
                .then(response => {
                resolve(response);
            }, err => reject(err));
        });
    }
    handleFirewallRule(errorCode, errorMessage, connectionTypeId) {
        let self = this;
        return new Promise((resolve, reject) => {
            let params = { errorCode: errorCode, errorMessage: errorMessage, connectionTypeId: connectionTypeId };
            self._client.
                sendRequest(Contracts.HandleFirewallRuleRequest.type, params, self.languageClient)
                .then(response => {
                resolve(response);
            }, err => reject(err));
        });
    }
    asCreateFirewallRuleParams(account, params) {
        return {
            account: account,
            serverName: params.serverName,
            startIpAddress: params.startIpAddress,
            endIpAddress: params.endIpAddress,
            securityTokenMappings: params.securityTokenMappings
        };
    }
}
exports.AzureResourceProvider = AzureResourceProvider;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/8a3011756318a2ded1e6e84332230a2b2bf9c544/extensions\mssql\client\out/resourceProvider\resourceProvider.js.map
