/*---------------------------------------------------------------------------------------------
*  Copyright (c) Microsoft Corporation. All rights reserved.
*  Licensed under the Source EULA. See License.txt in the project root for license information.
*--------------------------------------------------------------------------------------------*/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
// DEV-NOTE: Still finalizing what we'll need as part of this interface
/**
 * Contains necessary information for serializing and saving results
 * @param {string} saveFormat the format / type that the results will be saved in
 * @param {string} savePath path the results will be saved to
 * @param {string} results either a subset or all of the results we wish to save to savePath
 * @param {boolean} appendToFile Whether we should append or overwrite the file in savePath
*/
class SaveResultsInfo {
    constructor(saveFormat, savePath, results, appendToFile) {
        this.saveFormat = saveFormat;
        this.savePath = savePath;
        this.results = results;
        this.appendToFile = appendToFile;
    }
}
exports.SaveResultsInfo = SaveResultsInfo;
var SaveAsRequest;
(function (SaveAsRequest) {
    SaveAsRequest.type = { get method() { return 'query/saveAs'; } };
})(SaveAsRequest = exports.SaveAsRequest || (exports.SaveAsRequest = {}));
// --------------------------------- < Read Credential Request > -------------------------------------------------
// Read Credential request message callback declaration
var ReadCredentialRequest;
(function (ReadCredentialRequest) {
    ReadCredentialRequest.type = { get method() { return 'credential/read'; } };
})(ReadCredentialRequest = exports.ReadCredentialRequest || (exports.ReadCredentialRequest = {}));
/**
 * Parameters to initialize a connection to a database
 */
class Credential {
}
exports.Credential = Credential;
// --------------------------------- </ Read Credential Request > -------------------------------------------------
// --------------------------------- < Save Credential Request > -------------------------------------------------
// Save Credential request message callback declaration
var SaveCredentialRequest;
(function (SaveCredentialRequest) {
    SaveCredentialRequest.type = { get method() { return 'credential/save'; } };
})(SaveCredentialRequest = exports.SaveCredentialRequest || (exports.SaveCredentialRequest = {}));
// --------------------------------- </ Save Credential Request > -------------------------------------------------
// --------------------------------- < Delete Credential Request > -------------------------------------------------
// Delete Credential request message callback declaration
var DeleteCredentialRequest;
(function (DeleteCredentialRequest) {
    DeleteCredentialRequest.type = { get method() { return 'credential/delete'; } };
})(DeleteCredentialRequest = exports.DeleteCredentialRequest || (exports.DeleteCredentialRequest = {}));
// --------------------------------- </ Delete Credential Request > -------------------------------------------------
// ------------------------------- < Resource Events > ------------------------------------
var CreateFirewallRuleRequest;
(function (CreateFirewallRuleRequest) {
    CreateFirewallRuleRequest.type = { get method() { return 'resource/createFirewallRule'; } };
})(CreateFirewallRuleRequest = exports.CreateFirewallRuleRequest || (exports.CreateFirewallRuleRequest = {}));
var HandleFirewallRuleRequest;
(function (HandleFirewallRuleRequest) {
    HandleFirewallRuleRequest.type = { get method() { return 'resource/handleFirewallRule'; } };
})(HandleFirewallRuleRequest = exports.HandleFirewallRuleRequest || (exports.HandleFirewallRuleRequest = {}));
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/8a3011756318a2ded1e6e84332230a2b2bf9c544/extensions\mssql\client\out/models\contracts.js.map
