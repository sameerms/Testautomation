import { RequestType } from 'dataprotocol-client';
import * as data from 'data';
/**
 * Contains necessary information for serializing and saving results
 * @param {string} saveFormat the format / type that the results will be saved in
 * @param {string} savePath path the results will be saved to
 * @param {string} results either a subset or all of the results we wish to save to savePath
 * @param {boolean} appendToFile Whether we should append or overwrite the file in savePath
*/
export declare class SaveResultsInfo {
    saveFormat: string;
    savePath: string;
    results: string;
    appendToFile: boolean;
    constructor(saveFormat: string, savePath: string, results: string, appendToFile: boolean);
}
export declare namespace SaveAsRequest {
    const type: RequestType<SaveResultsInfo, data.SaveResultRequestResult, void>;
}
export declare namespace ReadCredentialRequest {
    const type: RequestType<Credential, Credential, void>;
}
/**
 * Parameters to initialize a connection to a database
 */
export declare class Credential {
    /**
     * Unique ID identifying the credential
     */
    credentialId: string;
    /**
     * password
     */
    password: string;
}
export declare namespace SaveCredentialRequest {
    const type: RequestType<Credential, boolean, void>;
}
export declare namespace DeleteCredentialRequest {
    const type: RequestType<Credential, boolean, void>;
}
export declare namespace CreateFirewallRuleRequest {
    const type: RequestType<CreateFirewallRuleParams, CreateFirewallRuleResponse, void>;
}
export declare namespace HandleFirewallRuleRequest {
    const type: RequestType<HandleFirewallRuleParams, HandleFirewallRuleResponse, void>;
}
export interface CreateFirewallRuleParams {
    account: data.Account;
    serverName: string;
    startIpAddress: string;
    endIpAddress: string;
    securityTokenMappings: {};
}
export interface CreateFirewallRuleResponse {
    result: boolean;
    errorMessage: string;
}
export interface HandleFirewallRuleParams {
    errorCode: number;
    errorMessage: string;
    connectionTypeId: string;
}
export interface HandleFirewallRuleResponse {
    result: boolean;
    ipAddress: string;
}
