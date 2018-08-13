import * as vscode from 'vscode';
export declare class AzureAccountProviderService implements vscode.Disposable {
    private _context;
    private _userStoragePath;
    private static CommandClearTokenCache;
    private static CredentialNamespace;
    private _accountProviders;
    private _event;
    constructor(_context: vscode.ExtensionContext, _userStoragePath: string);
    activate(): Thenable<boolean>;
    dispose(): void;
    private onClearTokenCache();
}
