import * as Contracts from '../models/contracts';
import { ICredentialStore } from './icredentialstore';
import { SqlToolsServiceClient } from 'extensions-modules';
import { LanguageClient } from 'dataprotocol-client';
/**
 * Implements a credential storage for Windows, Mac (darwin), or Linux.
 *
 * Allows a single credential to be stored per service (that is, one username per service);
 */
export declare class CredentialStore implements ICredentialStore {
    private _client;
    languageClient: LanguageClient;
    constructor(_client?: SqlToolsServiceClient);
    /**
     * Gets a credential saved in the credential store
     *
     * @param {string} credentialId the ID uniquely identifying this credential
     * @returns {Promise<Credential>} Promise that resolved to the credential, or undefined if not found
     */
    readCredential(credentialId: string): Promise<Contracts.Credential>;
    saveCredential(credentialId: string, password: any): Promise<boolean>;
    deleteCredential(credentialId: string): Promise<boolean>;
}
