import { SqlToolsServiceClient } from 'extensions-modules';
import { LanguageClient } from 'dataprotocol-client';
import * as data from 'data';
/**
 * Implements a credential storage for Windows, Mac (darwin), or Linux.
 *
 * Allows a single credential to be stored per service (that is, one username per service);
 */
export declare class AzureResourceProvider implements data.ResourceProvider {
    private _client;
    languageClient: LanguageClient;
    constructor(_client?: SqlToolsServiceClient, langClient?: LanguageClient);
    createFirewallRule(account: data.Account, firewallruleInfo: data.FirewallRuleInfo): Thenable<data.CreateFirewallRuleResponse>;
    handleFirewallRule(errorCode: number, errorMessage: string, connectionTypeId: string): Thenable<data.HandleFirewallRuleResponse>;
    private asCreateFirewallRuleParams(account, params);
}
