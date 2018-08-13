/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const data = require("data");
const constants_1 = require("../models/constants");
const serialization_1 = require("../serialize/serialization");
const credentialstore_1 = require("../credentialstore/credentialstore");
const extensions_modules_1 = require("extensions-modules");
/**
 * The main controller class that initializes the extension
 */
class MainController {
    /**
     * The main controller constructor
     * @constructor
     */
    constructor(context, vscodeWrapper) {
        this._initialized = false;
        this._context = context;
        this._vscodeWrapper = vscodeWrapper || new extensions_modules_1.VscodeWrapper(MainController._extensionConstants);
        extensions_modules_1.SqlToolsServiceClient.constants = MainController._extensionConstants;
        this._client = extensions_modules_1.SqlToolsServiceClient.instance;
        this._credentialStore = new credentialstore_1.CredentialStore(this._client);
        this._serialization = new serialization_1.Serialization(this._client);
    }
    /**
     * Disposes the controller
     */
    dispose() {
        this.deactivate();
    }
    /**
     * Deactivates the extension
     */
    deactivate() {
        extensions_modules_1.Utils.logDebug(extensions_modules_1.SharedConstants.extensionDeactivated, MainController._extensionConstants.extensionConfigSectionName);
    }
    /**
     * Initializes the extension
     */
    activate() {
        return this.initialize();
    }
    /**
     * Returns a flag indicating if the extension is initialized
     */
    isInitialized() {
        return this._initialized;
    }
    createClient(executableFiles) {
        return extensions_modules_1.PlatformInformation.getCurrent(extensions_modules_1.SqlToolsServiceClient.constants.getRuntimeId, extensions_modules_1.SqlToolsServiceClient.constants.extensionName).then(platformInfo => {
            return extensions_modules_1.SqlToolsServiceClient.instance.createClient(this._context, platformInfo.runtimeId, undefined, executableFiles);
        });
    }
    createCredentialClient() {
        return this.createClient(['MicrosoftSqlToolsCredentials.exe', 'MicrosoftSqlToolsCredentials']);
    }
    createSerializationClient() {
        return this.createClient(['MicrosoftSqlToolsSerialization.exe', 'MicrosoftSqlToolsSerialization']);
    }
    createResourceProviderClient() {
        return this.createClient(['SqlToolsResourceProviderService.exe', 'SqlToolsResourceProviderService']);
    }
    /**
     * Initializes the extension
     */
    initialize() {
        const self = this;
        // initialize language service client
        return new Promise((resolve, reject) => {
            const self = this;
            extensions_modules_1.SqlToolsServiceClient.instance.initialize(self._context).then(serverResult => {
                // Initialize telemetry
                extensions_modules_1.Telemetry.initialize(self._context, new constants_1.Constants());
                // telemetry for activation
                extensions_modules_1.Telemetry.sendTelemetryEvent('ExtensionActivated', {}, { serviceInstalled: serverResult.installedBeforeInitializing ? 1 : 0 });
                /*
                self.createSerializationClient().then(serializationClient => {
                    let serialization = new Serialization(self._client, serializationClient);
                    // Serialization
                    let serializationProvider: data.SerializationProvider = {
                        handle: 0,
                        saveAs(saveFormat: string, savePath: string, results: string, appendToFile: boolean): Thenable<data.SaveResultRequestResult> {
                            return self._serialization.saveAs(saveFormat, savePath, results, appendToFile);
                        }
                    };
                    data.serialization.registerProvider(serializationProvider);
                }, error => {
                    Utils.logDebug('Cannot find Serialization executables. error: ' + error , MainController._extensionConstants.extensionConfigSectionName);
                });

                self.createResourceProviderClient().then(rpClient => {
                    let resourceProvider = new AzureResourceProvider(self._client, rpClient);
                    data.resources.registerResourceProvider({
                        displayName: 'Azure SQL Resource Provider', // TODO Localize
                        id: 'Microsoft.Azure.SQL.ResourceProvider',
                        settings: {

                        }
                    }, resourceProvider);
                    Utils.logDebug('resourceProvider registered', MainController._extensionConstants.extensionConfigSectionName);
                }, error => {
                    Utils.logDebug('Cannot find ResourceProvider executables. error: ' + error , MainController._extensionConstants.extensionConfigSectionName);
                });
                */
                self.createCredentialClient().then(credentialClient => {
                    self._credentialStore.languageClient = credentialClient;
                    let credentialProvider = {
                        handle: 0,
                        saveCredential(credentialId, password) {
                            return self._credentialStore.saveCredential(credentialId, password);
                        },
                        readCredential(credentialId) {
                            return self._credentialStore.readCredential(credentialId);
                        },
                        deleteCredential(credentialId) {
                            return self._credentialStore.deleteCredential(credentialId);
                        }
                    };
                    data.credentials.registerProvider(credentialProvider);
                    extensions_modules_1.Utils.logDebug('credentialProvider registered', MainController._extensionConstants.extensionConfigSectionName);
                }, error => {
                    extensions_modules_1.Utils.logDebug('Cannot find credentials executables. error: ' + error, MainController._extensionConstants.extensionConfigSectionName);
                });
                extensions_modules_1.Utils.logDebug(extensions_modules_1.SharedConstants.extensionActivated, MainController._extensionConstants.extensionConfigSectionName);
                self._initialized = true;
                resolve(true);
            }).catch(err => {
                extensions_modules_1.Telemetry.sendTelemetryEventForException(err, 'initialize', MainController._extensionConstants.extensionConfigSectionName);
                reject(err);
            });
        });
    }
}
MainController._extensionConstants = new constants_1.Constants();
exports.default = MainController;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/8a3011756318a2ded1e6e84332230a2b2bf9c544/extensions\mssql\client\out/controllers\mainController.js.map
