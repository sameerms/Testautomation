import { Credential } from '../models/contracts';
/**
 * A credential store that securely stores sensitive information in a platform-specific manner
 *
 * @export
 * @interface ICredentialStore
 */
export interface ICredentialStore {
    readCredential(credentialId: string): Promise<Credential>;
    saveCredential(credentialId: string, password: any): Promise<boolean>;
    deleteCredential(credentialId: string): Promise<boolean>;
}
