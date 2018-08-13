import vscode = require('vscode');
import MainController from './controllers/mainController';
export declare function activate(context: vscode.ExtensionContext): void;
export declare function deactivate(): void;
/**
 * Exposed for testing purposes
 */
export declare function getController(): MainController;
