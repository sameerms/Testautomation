/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const adal = require("adal-node");
const data = require("data");
const request = require("request");
const nls = require("vscode-nls");
const localize = nls.loadMessageBundle(__filename);
class AzureAccountProvider {
    constructor(metadata, tokenCache) {
        this.metadata = metadata;
        this._args = {
            host: metadata.settings.host,
            clientId: metadata.settings.clientId
        };
        this._isInitialized = false;
        this._tokenCache = tokenCache;
    }
    // PUBLIC METHODS //////////////////////////////////////////////////////
    clear(accountKey) {
        throw new Error('Not implemented');
    }
    clearTokenCache() {
        return this._tokenCache.clear();
    }
    getSecurityToken(account) {
        let self = this;
        return this.doIfInitialized(() => self.getAccessTokens(account));
    }
    initialize(restoredAccounts) {
        let self = this;
        return new Promise(resolve => {
            // Rehydrate the accounts
            restoredAccounts.forEach((account) => {
                // Set the icon for the account
                account.displayInfo.contextualLogo = account.properties.isMsAccount
                    ? AzureAccountProvider.MicrosoftAccountLogo
                    : AzureAccountProvider.WorkSchoolAccountLogo;
                // TODO: Set stale status based on whether we can authenticate or not
            });
            self._isInitialized = true;
            resolve(restoredAccounts);
        });
    }
    prompt() {
        let self = this;
        return this.doIfInitialized(() => self.signIn());
    }
    refresh(account) {
        let self = this;
        return this.doIfInitialized(() => self.signIn(account.properties.isMsAccount, account.key.accountId));
    }
    // PRIVATE METHODS /////////////////////////////////////////////////////
    static loadIcon(iconName) {
        let filePath = path.join(__dirname, 'media', iconName);
        try {
            return 'image/svg+xml,' + fs.readFileSync(filePath);
        }
        catch (e) {
            return '';
        }
    }
    authenticate(tenantId, msa, userId, silent) {
        let authorityUrl = `${this.metadata.settings.host}/${tenantId}`;
        // TODO: Rewrite using urijs
        let authorizeUrl = `${authorityUrl}/oauth2/authorize`
            + `?client_id=${this.metadata.settings.clientId}` // Specify the client ID
            + `&response_type=code` // Request the authorization code grant flow
            + (userId ? (msa ? '&domain_hint=live.com' : '&msafed=0') : '') // Optimize prompt given existing MSA or org ID
            + ((!userId && !silent) ? '&prompt=login' : '') // Require login if not silent
            + (userId ? `&login_hint=${encodeURIComponent(userId)}` : '') // Show login hint if we have an existing user ID
            + (this.metadata.settings.siteId ? `&site_id=${this.metadata.settings.siteId}` : '') // Site ID to use as brand on the prompt
            + '&display=popup' // Causes a popup version of the UI to be shown
            + `&resource=${encodeURIComponent(this.metadata.settings.signInResourceId)}` // Specify the resource for which an access token should be retrieved
            + `&redirect_uri=${encodeURIComponent(this.metadata.settings.redirectUri)}`; // TODO: add locale parameter like in VSAccountProvider.TryAppendLocalParameter
        // Get the authorization code. If this is the initial authentication (the user is unknown),
        // do not silently prompt. If this is a subsequent authentication for an additional tenant,
        // the browser cookie cache will be used to authenticate without prompting, so run the
        // browser silently.
        return data.accounts.performOAuthAuthorization(authorizeUrl, silent)
            .then((code) => {
            return new Promise((resolve, reject) => {
                let context = new adal.AuthenticationContext(authorityUrl, null, this._tokenCache);
                context.acquireTokenWithAuthorizationCode(code, this.metadata.settings.redirectUri, this.metadata.settings.signInResourceId, this.metadata.settings.clientId, null, (error, response) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(response);
                    }
                });
            });
        });
    }
    doIfInitialized(op) {
        return this._isInitialized
            ? op()
            : Promise.reject(localize(0, null));
    }
    getAccessTokens(account) {
        let self = this;
        // TODO: Could we add some better typing here?
        let accessTokenPromises = [];
        let tokenCollection = {};
        for (let tenant of account.properties.tenants) {
            let promise = new Promise((resolve, reject) => {
                // TODO: use urijs to generate this URI
                let authorityUrl = `${self.metadata.settings.host}/${tenant.id}`;
                let context = new adal.AuthenticationContext(authorityUrl, null, self._tokenCache);
                // TODO: This is where we should mark the account as stale
                context.acquireToken(self.metadata.settings.armResource.id, tenant.userId, self.metadata.settings.clientId, (error, response) => {
                    // Handle errors first
                    if (error) {
                        reject(error);
                        return;
                    }
                    // Generate a token object and add it to the collection
                    tokenCollection[tenant.id] = {
                        expiresOn: response.expiresOn,
                        resource: response.resource,
                        token: response.accessToken,
                        tokenType: response.tokenType
                    };
                    resolve();
                });
            });
            accessTokenPromises.push(promise);
        }
        // Wait until all the tokens have been acquired then return the collection
        return Promise.all(accessTokenPromises)
            .then(() => tokenCollection);
    }
    getTenantDisplayName(msa, tenantId, userId) {
        let self = this;
        if (msa) {
            return Promise.resolve(localize(1, null));
        }
        return new Promise((resolve, reject) => {
            // Get an access token to the AAD graph resource
            // TODO: Use urijs to generate this URI
            let authorityUrl = `${self.metadata.settings.host}/${tenantId}`;
            let context = new adal.AuthenticationContext(authorityUrl, null, self._tokenCache);
            context.acquireToken(self.metadata.settings.graphResource.id, userId, self.metadata.settings.clientId, (error, response) => {
                if (error) {
                    reject(error);
                    return;
                }
                request.get(`${self.metadata.settings.graphResource.endpoint}/${tenantId}/tenantDetails?api-version=2013-04-05`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${response.accessToken}`
                    },
                    json: true
                }, (graphError, graphResponse, body) => {
                    if (graphError || body['odata.error']) {
                        reject(graphError || body['odata.error']);
                    }
                    else if (body.value.length && body.value[0].displayName) {
                        resolve(body.value[0].displayName);
                    }
                    else {
                        resolve(localize(2, null));
                    }
                });
            });
        });
    }
    getTenants(msa, userId, tenantIds, homeTenant) {
        let self = this;
        // Lookup each tenant ID that was provided
        let getTenantPromises = [];
        for (let tenantId of tenantIds) {
            let promise = this.authenticate(tenantId, msa, userId, false)
                .then((response) => self.getTenantDisplayName(msa, response.tenantId, response.userId))
                .then((displayName) => {
                return {
                    displayName: displayName,
                    id: tenantId,
                    userId: userId
                };
            });
            getTenantPromises.push(promise);
        }
        return Promise.all(getTenantPromises)
            .then((tenants) => {
            // Resort the tenants to make sure that the 'home' tenant is the first in the list
            let homeTenantIndex = tenants.findIndex((tenant) => tenant.id === homeTenant);
            if (homeTenantIndex >= 0) {
                let homeTenant = tenants.splice(homeTenantIndex, 1);
                tenants.unshift(homeTenant[0]);
            }
            return tenants;
        });
    }
    getTenantIds(userId) {
        return new Promise((resolve, reject) => {
            // Get an access token to the ARM resource
            // TODO: Build this URL with urijs
            let authorityUrl = `${this.metadata.settings.host}/common`;
            let context = new adal.AuthenticationContext(authorityUrl, null, this._tokenCache);
            context.acquireToken(this.metadata.settings.armResource.id, userId, this.metadata.settings.clientId, (error, response) => {
                if (error) {
                    reject(error);
                    return;
                }
                if (!!this.metadata.settings.adTenants && this.metadata.settings.adTenants.length > 0) {
                    resolve(this.metadata.settings.adTenants);
                }
                else {
                    request.get(`${this.metadata.settings.armResource.endpoint}/tenants?api-version=2015-01-01`, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${response.accessToken}`
                        },
                        json: true
                    }, (armError, armResponse, body) => {
                        if (armError || body.error) {
                            reject(armError || body.error);
                        }
                        else {
                            resolve(body.value.map(item => item.tenantId));
                        }
                    });
                }
            });
        });
    }
    signIn(msa, userId) {
        let self = this;
        // Initial authentication is via the common/discovery tenant
        return this.authenticate('common', msa, userId, false)
            .then((response) => {
            let identityProvider = response.identityProvider;
            if (identityProvider) {
                identityProvider = identityProvider.toLowerCase();
            }
            // Determine if this is a microsoft account
            msa = identityProvider && (identityProvider.indexOf('live.com') !== -1 ||
                identityProvider.indexOf('live-int.com') !== -1 ||
                identityProvider.indexOf('f8cdef31-a31e-4b4a-93e4-5f571e91255a') !== -1 ||
                identityProvider.indexOf('ea8a4392-515e-481f-879e-6571ff2a8a36') !== -1);
            // Get the user information
            userId = response.userId;
            let displayName = (response.givenName && response.familyName)
                ? `${response.givenName} ${response.familyName}`
                : userId;
            // Get all the additional tenants
            return this.getTenantIds(userId)
                .then(tenantIds => self.getTenants(msa, userId, tenantIds, response.tenantId))
                .then(tenants => {
                return {
                    key: {
                        providerId: self.metadata.id,
                        accountId: userId
                    },
                    name: userId,
                    displayInfo: {
                        contextualLogo: msa
                            ? AzureAccountProvider.MicrosoftAccountLogo
                            : AzureAccountProvider.WorkSchoolAccountLogo,
                        contextualDisplayName: tenants[0].displayName,
                        displayName: displayName
                    },
                    properties: {
                        isMsAccount: msa,
                        tenants: tenants
                    },
                    isStale: false
                };
            });
        });
    }
}
AzureAccountProvider.WorkSchoolAccountLogo = {
    light: AzureAccountProvider.loadIcon('work_school_account.svg'),
    dark: AzureAccountProvider.loadIcon('work_school_account_inverse.svg')
};
AzureAccountProvider.MicrosoftAccountLogo = {
    light: AzureAccountProvider.loadIcon('microsoft_account.svg'),
    dark: AzureAccountProvider.loadIcon('microsoft_account.svg')
};
exports.AzureAccountProvider = AzureAccountProvider;
// ADAL MONKEY PATCH ///////////////////////////////////////////////////////
// Monkey patch the ADAL TokenRequest class to fix the fact that when you request a token from an
// authorization code, it doesn't update the cache
const TokenRequest = require("adal-node/lib/token-request");
let getTokenWithAuthorizationCodeOriginal = TokenRequest.prototype.getTokenWithAuthorizationCode;
TokenRequest.prototype.getTokenWithAuthorizationCode = function (authorizationCode, clientSecret, callback) {
    this._cacheDriver = this._createCacheDriver();
    getTokenWithAuthorizationCodeOriginal.call(this, authorizationCode, clientSecret, (error, response) => {
        if (error) {
            callback(error, response);
        }
        else {
            this._userId = response.userId;
            this._cacheDriver.add(response, () => callback(null, response));
        }
    });
};
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/8a3011756318a2ded1e6e84332230a2b2bf9c544/extensions\account-provider-azure\out/account-provider\azureAccountProvider.js.map
