import * as adal from 'adal-node';
import * as data from 'data';
import { AzureAccount, AzureAccountProviderMetadata, AzureAccountSecurityTokenCollection } from './interfaces';
export declare class AzureAccountProvider implements data.AccountProvider {
    private static WorkSchoolAccountLogo;
    private static MicrosoftAccountLogo;
    private _args;
    private _isInitialized;
    private _tokenCache;
    metadata: AzureAccountProviderMetadata;
    constructor(metadata: AzureAccountProviderMetadata, tokenCache: adal.TokenCache);
    clear(accountKey: data.AccountKey): Thenable<void>;
    clearTokenCache(): Thenable<void>;
    getSecurityToken(account: AzureAccount): Thenable<AzureAccountSecurityTokenCollection>;
    initialize(restoredAccounts: data.Account[]): Thenable<data.Account[]>;
    prompt(): Thenable<AzureAccount>;
    refresh(account: AzureAccount): Thenable<AzureAccount>;
    private static loadIcon(iconName);
    private authenticate(tenantId, msa, userId, silent);
    private doIfInitialized<T>(op);
    private getAccessTokens(account);
    private getTenantDisplayName(msa, tenantId, userId);
    private getTenants(msa, userId, tenantIds, homeTenant);
    private getTenantIds(userId);
    private signIn(msa?, userId?);
}
