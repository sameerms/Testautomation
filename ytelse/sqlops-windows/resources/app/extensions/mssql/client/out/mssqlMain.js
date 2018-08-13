/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const mainController_1 = require("./controllers/mainController");
let controller = undefined;
function activate(context) {
    controller = new mainController_1.default(context);
    context.subscriptions.push(controller);
    controller.activate();
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() {
    if (controller) {
        controller.deactivate();
    }
}
exports.deactivate = deactivate;
/**
 * Exposed for testing purposes
 */
function getController() {
    return controller;
}
exports.getController = getController;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/8a3011756318a2ded1e6e84332230a2b2bf9c544/extensions\mssql\client\out/mssqlMain.js.map
