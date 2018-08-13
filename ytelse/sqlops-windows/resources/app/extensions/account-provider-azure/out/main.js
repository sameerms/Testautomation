/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const extensions_modules_1 = require("extensions-modules");
const constants = require("./constants");
const azureAccountProviderService_1 = require("./account-provider/azureAccountProviderService");
// EXTENSION ACTIVATION ////////////////////////////////////////////////////
function activate(context) {
    // Create the folder for storing the token caches
    let storagePath = path.join(extensions_modules_1.Utils.getDefaultLogLocation(), constants.extensionName);
    try {
        if (!fs.existsSync(storagePath)) {
            fs.mkdirSync(storagePath);
            console.log('Initialized Azure account extension storage.');
        }
    }
    catch (e) {
        console.error(`Initialization of Azure account extension storage failed: ${e}`);
        console.error('Azure accounts will not be available');
        return;
    }
    // Create the provider service and activate
    const accountProviderService = new azureAccountProviderService_1.AzureAccountProviderService(context, storagePath);
    context.subscriptions.push(accountProviderService);
    accountProviderService.activate();
}
exports.activate = activate;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/8a3011756318a2ded1e6e84332230a2b2bf9c544/extensions\account-provider-azure\out/main.js.map
