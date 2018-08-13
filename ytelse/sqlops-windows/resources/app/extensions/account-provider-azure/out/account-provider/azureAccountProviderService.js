/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const constants = require("../constants");
const data = require("data");
const events = require("events");
const nls = require("vscode-nls");
const path = require("path");
const vscode = require("vscode");
const tokenCache_1 = require("./tokenCache");
const providerSettings_1 = require("./providerSettings");
const azureAccountProvider_1 = require("./azureAccountProvider");
let localize = nls.loadMessageBundle(__filename);
class AzureAccountProviderService {
    constructor(_context, _userStoragePath) {
        this._context = _context;
        this._userStoragePath = _userStoragePath;
        this._accountProviders = {};
        this._event = new events.EventEmitter();
    }
    // PUBLIC METHODS //////////////////////////////////////////////////////
    activate() {
        let self = this;
        // Register commands
        this._context.subscriptions.push(vscode.commands.registerCommand(AzureAccountProviderService.CommandClearTokenCache, () => { self._event.emit(AzureAccountProviderService.CommandClearTokenCache); }));
        this._event.on(AzureAccountProviderService.CommandClearTokenCache, () => { self.onClearTokenCache(); });
        // Create the token caches
        // 1) Get a credential provider
        // 2) Iterate over the enabled providers
        // 2a) Create a token cache for provider
        // 2b) Create the provider from the provider's settings
        // 2c) Register the provider with the account service
        return data.credentials.getProvider(AzureAccountProviderService.CredentialNamespace)
            .then(credProvider => {
            providerSettings_1.default.forEach(provider => {
                let tokenCacheKey = `azureTokenCache-${provider.metadata.id}`;
                let tokenCachePath = path.join(self._userStoragePath, tokenCacheKey);
                let tokenCache = new tokenCache_1.default(credProvider, tokenCacheKey, tokenCachePath);
                let accountProvider = new azureAccountProvider_1.AzureAccountProvider(provider.metadata, tokenCache);
                self._accountProviders[provider.metadata.id] = accountProvider;
                data.accounts.registerAccountProvider(provider.metadata, accountProvider);
            });
        })
            .then(() => { return true; });
    }
    dispose() { }
    // PRIVATE HELPERS /////////////////////////////////////////////////////
    onClearTokenCache() {
        let self = this;
        let promises = providerSettings_1.default.map(provider => {
            return self._accountProviders[provider.metadata.id].clearTokenCache();
        });
        return Promise.all(promises)
            .then(() => {
            let message = localize(0, null);
            vscode.window.showInformationMessage(`${constants.extensionName}: ${message}`);
        }, err => {
            let message = localize(1, null);
            vscode.window.showErrorMessage(`${constants.extensionName}: ${message}: ${err}`);
        });
    }
}
// CONSTANTS ///////////////////////////////////////////////////////////////
AzureAccountProviderService.CommandClearTokenCache = 'extension.clearTokenCache';
AzureAccountProviderService.CredentialNamespace = 'azureAccountProviderCredentials';
exports.AzureAccountProviderService = AzureAccountProviderService;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/8a3011756318a2ded1e6e84332230a2b2bf9c544/extensions\account-provider-azure\out/account-provider\azureAccountProviderService.js.map
