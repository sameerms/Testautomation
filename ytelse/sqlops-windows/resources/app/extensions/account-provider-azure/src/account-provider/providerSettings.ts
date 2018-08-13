/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

import * as data from 'data';
import * as nls from 'vscode-nls';
import { Settings } from './interfaces';

const localize = nls.loadMessageBundle();

const publicAzureSettings = {
	configKey: 'accounts.azure.enablePublicCloud',
	metadata: <data.AccountProviderMetadata> {
		displayName: localize('publicCloudDisplayName', 'Azure'),
		id: 'azurePublicCloud',
		settings: <Settings>{
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
	metadata: <data.AccountProviderMetadata> {
		displayName: localize('usGovCloudDisplayName', 'Azure (US Government)'),
		id: 'usGovAzureCloud',
		settings: <Settings> {
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
	metadata: <data.AccountProviderMetadata> {
		displayName: localize('chinaCloudDisplayName', 'Azure (China)'),
		id: 'chinaAzureCloud',
		settings: <Settings> {
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
	metadata: <data.AccountProviderMetadata> {
		displayName: localize('germanyCloud', 'Azure (Germany)'),
		id: 'germanyAzureCloud',
		settings: <Settings> {
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

export default [publicAzureSettings/*, chinaAzureSettings, germanyAzureSettings, usGovAzureSettings*/];
