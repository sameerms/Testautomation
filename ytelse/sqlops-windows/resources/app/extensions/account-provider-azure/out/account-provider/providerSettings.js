/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const nls = require("vscode-nls");
const localize = nls.loadMessageBundle(__filename);
const publicAzureSettings = {
    configKey: 'accounts.azure.enablePublicCloud',
    metadata: {
        displayName: localize(0, null),
        id: 'azurePublicCloud',
        settings: {
            host: 'https://login.microsoftonline.com',
            clientId: 'TBD',
            signInResourceId: 'https://management.core.windows.net/',
            graphResource: {
                id: 'https://graph.windows.net/',
                endpoint: 'https://graph.windows.net'
            },
            armResource: {
                id: 'https://management.core.windows.net/',
                endpoint: 'https://management.azure.com'
            },
            redirectUri: 'http://localhost/redirect'
        }
    }
};
const usGovAzureSettings = {
    configKey: 'accounts.azure.enableUsGovCloud',
    metadata: {
        displayName: localize(1, null),
        id: 'usGovAzureCloud',
        settings: {
            host: 'https://login.microsoftonline.com/',
            clientId: 'TBD',
            signInResourceId: 'https://management.core.usgovcloudapi.net/',
            graphResource: {
                id: 'https://graph.usgovcloudapi.net/',
                endpoint: 'https://graph.usgovcloudapi.net'
            },
            armResource: {
                id: 'https://management.core.usgovcloudapi.net/',
                endpoint: 'https://management.usgovcloudapi.net'
            },
            redirectUri: 'http://localhost/redirect'
        }
    }
};
const chinaAzureSettings = {
    configKey: 'accounts.azure.enableChinaCloud',
    metadata: {
        displayName: localize(2, null),
        id: 'chinaAzureCloud',
        settings: {
            host: 'https://login.chinacloudapi.cn/',
            clientId: 'TBD',
            signInResourceId: 'https://management.core.chinacloudapi.cn/',
            graphResource: {
                id: 'https://graph.chinacloudapi.cn/',
                endpoint: 'https://graph.chinacloudapi.cn'
            },
            armResource: {
                id: 'https://management.core.chinacloudapi.cn/',
                endpoint: 'https://managemement.chinacloudapi.net'
            },
            redirectUri: 'http://localhost/redirect'
        }
    }
};
const germanyAzureSettings = {
    configKey: 'accounts.azure.enableGermanyCloud',
    metadata: {
        displayName: localize(3, null),
        id: 'germanyAzureCloud',
        settings: {
            host: 'https://login.microsoftazure.de/',
            clientId: 'TBD',
            signInResourceId: 'https://management.core.cloudapi.de/',
            graphResource: {
                id: 'https://graph.cloudapi.de/',
                endpoint: 'https://graph.cloudapi.de'
            },
            armResource: {
                id: 'https://management.core.cloudapi.de/',
                endpoint: 'https://management.microsoftazure.de'
            },
            redirectUri: 'http://localhost/redirect'
        }
    }
};
exports.default = [publicAzureSettings /*, chinaAzureSettings, germanyAzureSettings, usGovAzureSettings*/];
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/8a3011756318a2ded1e6e84332230a2b2bf9c544/extensions\account-provider-azure\out/account-provider\providerSettings.js.map
