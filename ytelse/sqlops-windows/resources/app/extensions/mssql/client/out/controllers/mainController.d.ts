import vscode = require('vscode');
import { VscodeWrapper } from 'extensions-modules';
/**
 * The main controller class that initializes the extension
 */
export default class MainController implements vscode.Disposable {
    private _context;
    private _vscodeWrapper;
    private _initialized;
    private _serialization;
    private _credentialStore;
    private static _extensionConstants;
    private _client;
    /**
     * The main controller constructor
     * @constructor
     */
    constructor(context: vscode.ExtensionContext, vscodeWrapper?: VscodeWrapper);
    /**
     * Disposes the controller
     */
    dispose(): void;
    /**
     * Deactivates the extension
     */
    deactivate(): void;
    /**
     * Initializes the extension
     */
    activate(): Promise<boolean>;
    /**
     * Returns a flag indicating if the extension is initialized
     */
    isInitialized(): boolean;
    private createClient(executableFiles);
    private createCredentialClient();
    private createSerializationClient();
    private createResourceProviderClient();
    /**
     * Initializes the extension
     */
    initialize(): Promise<boolean>;
}
