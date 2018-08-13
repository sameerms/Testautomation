"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
const platform_1 = require("extensions-modules/lib/models/platform");
// constants
class Constants {
    constructor() {
        this.languageId = 'sql';
        this.extensionName = 'mssql';
        this.extensionConfigSectionName = 'mssql';
        this.connectionApplicationName = 'vscode-mssql';
        this.outputChannelName = 'MSSQL';
        this.connectionConfigFilename = 'settings.json';
        this.connectionsArrayName = 'mssql.connections';
        this.cmdRunQuery = 'extension.runQuery';
        this.cmdCancelQuery = 'extension.cancelQuery';
        this.cmdConnect = 'extension.connect';
        this.cmdDisconnect = 'extension.disconnect';
        this.cmdChooseDatabase = 'extension.chooseDatabase';
        this.cmdShowReleaseNotes = 'extension.showReleaseNotes';
        this.cmdShowGettingStarted = 'extension.showGettingStarted';
        this.cmdNewQuery = 'extension.newQuery';
        this.cmdManageConnectionProfiles = 'extension.manageProfiles';
        this.sqlDbPrefix = '.database.windows.net';
        this.defaultConnectionTimeout = 15;
        this.azureSqlDbConnectionTimeout = 30;
        this.azureDatabase = 'Azure';
        this.defaultPortNumber = 1433;
        this.sqlAuthentication = 'SqlLogin';
        this.defaultDatabase = 'master';
        this.errorPasswordExpired = 18487;
        this.errorPasswordNeedsReset = 18488;
        this.maxDisplayedStatusTextLength = 50;
        this.outputContentTypeRoot = 'root';
        this.outputContentTypeMessages = 'messages';
        this.outputContentTypeResultsetMeta = 'resultsetsMeta';
        this.outputContentTypeColumns = 'columns';
        this.outputContentTypeRows = 'rows';
        this.outputContentTypeConfig = 'config';
        this.outputContentTypeSaveResults = 'saveResults';
        this.outputContentTypeOpenLink = 'openLink';
        this.outputContentTypeCopy = 'copyResults';
        this.outputContentTypeEditorSelection = 'setEditorSelection';
        this.outputContentTypeShowError = 'showError';
        this.outputContentTypeShowWarning = 'showWarning';
        this.outputServiceLocalhost = 'http://localhost:';
        this.msgContentProviderSqlOutputHtml = 'dist/html/sqlOutput.ejs';
        this.contentProviderMinFile = 'dist/js/app.min.js';
        this.configLogDebugInfo = 'logDebugInfo';
        this.providerId = 'MSSQL';
        this.installFolderName = 'sqltoolsservice';
        this.telemetryExtensionName = 'carbon-mssql';
        // localizable strings
        this.configMyConnectionsNoServerName = 'Missing server name in user preferences connection: ';
        this.msgLocalWebserviceStaticContent = 'LocalWebService: added static html content path: ';
        this.msgLocalWebserviceStarted = 'LocalWebService listening on port ';
        this.msgRunQueryAllBatchesExecuted = 'runQuery: all batches executed';
        this.msgStartedExecute = 'Started query execution for document "{0}"';
        this.msgFinishedExecute = 'Finished query execution for document "{0}"';
        this.msgRunQueryError = 'runQuery: error: ';
        this.msgRunQueryExecutingBatch = 'runQuery: executeBatch called with SQL: ';
        this.msgRunQueryAddBatchResultsets = 'runQuery: adding resultsets for batch: ';
        this.msgRunQueryAddBatchError = 'runQuery: adding error message for batch: ';
        this.msgRunQueryConnectionActive = 'runQuery: active connection is connected, using it to run query';
        this.msgRunQueryConnectionDisconnected = 'runQuery: active connection is disconnected, reconnecting';
        this.msgRunQueryNoConnection = 'runQuery: no active connection - prompting for user';
        this.msgRunQueryInProgress = 'A query is already running for this editor session. Please cancel this query or wait for its completion.';
        this.runQueryBatchStartMessage = 'Started executing query at ';
        this.runQueryBatchStartLine = 'Line {0}';
        this.msgCancelQueryFailed = 'Canceling the query failed: {0}';
        this.msgCancelQueryNotRunning = 'Cannot cancel query as no query is running.';
        this.msgCancelQuerySuccess = 'Successfully canceled the query.';
        this.msgContentProviderOnContentUpdated = 'Content provider: onContentUpdated called';
        this.msgContentProviderAssociationFailure = 'Content provider: Unable to associate status view for current file';
        this.msgContentProviderOnRootEndpoint = 'LocalWebService: Root end-point called';
        this.msgContentProviderOnResultsEndpoint = 'LocalWebService: ResultsetsMeta endpoint called';
        this.msgContentProviderOnMessagesEndpoint = 'LocalWebService: Messages end-point called';
        this.msgContentProviderOnColumnsEndpoint = 'LocalWebService:  Columns end-point called for index = ';
        this.msgContentProviderOnRowsEndpoint = 'LocalWebService: Rows end-point called for index = ';
        this.msgContentProviderOnClear = 'Content provider: clear called';
        this.msgContentProviderOnUpdateContent = 'Content provider: updateContent called';
        this.msgContentProviderProvideContent = 'Content provider: provideTextDocumentContent called: ';
        this.msgChooseDatabaseNotConnected = 'No connection was found. Please connect to a server first.';
        this.msgChooseDatabasePlaceholder = 'Choose a database from the list below';
        this.msgConnectionError = 'Error {0}: {1}';
        this.msgConnectionError2 = 'Failed to connect: {0}';
        this.msgConnectionErrorPasswordExpired = 'Error {0}: {1} Please login as a different user and change the password using ALTER LOGIN.';
        this.connectionErrorChannelName = 'Connection Errors';
        this.msgPromptCancelConnect = 'Server connection in progress. Do you want to cancel?';
        this.msgPromptClearRecentConnections = 'Confirm to clear recent connections list';
        this.msgOpenSqlFile = 'To use this command, Open a .sql file -or- ' +
            'Change editor language to "SQL" -or- ' +
            'Select T-SQL text in the active SQL editor.';
        this.recentConnectionsPlaceholder = 'Choose a connection profile from the list below';
        this.msgNoConnectionsInSettings = 'To use this command, add connection profile to User Settings.';
        this.labelOpenGlobalSettings = 'Open Global Settings';
        this.labelOpenWorkspaceSettings = 'Open Workspace Settings';
        this.CreateProfileFromConnectionsListLabel = 'Create Connection Profile';
        this.CreateProfileLabel = 'Create';
        this.ClearRecentlyUsedLabel = 'Clear Recent Connections List';
        this.EditProfilesLabel = 'Edit';
        this.RemoveProfileLabel = 'Remove';
        this.ManageProfilesPrompt = 'Manage Connection Profiles';
        this.SampleServerName = '{{put-server-name-here}}';
        this.serverPrompt = 'Server name';
        this.serverPlaceholder = 'hostname\\instance or <server>.database.windows.net';
        this.databasePrompt = 'Database name';
        this.databasePlaceholder = '[Optional] Database to connect (press Enter to connect to <default> database)';
        this.databaseDefaultValue = 'master';
        this.authTypePrompt = 'Authentication Type';
        this.authTypeIntegrated = 'Integrated';
        this.authTypeSql = 'SQL Login';
        this.authTypeAdUniversal = 'Active Directory Universal';
        this.usernamePrompt = 'User name';
        this.usernamePlaceholder = 'User name (SQL Login)';
        this.passwordPrompt = 'Password';
        this.passwordPlaceholder = 'Password (SQL Login)';
        this.msgSavePassword = 'Save Password? If \'No\', password will be required each time you connect';
        this.profileNamePrompt = 'Profile Name';
        this.profileNamePlaceholder = '[Optional] Enter a name for this profile';
        this.filepathPrompt = 'File path';
        this.filepathPlaceholder = 'File name';
        this.filepathMessage = 'File name';
        this.overwritePrompt = 'A file with this name already exists. Do you want to replace the existing file?';
        this.overwritePlaceholder = 'A file with this name already exists';
        this.msgSaveResultInProgress = 'A save request is already executing. Please wait for its completion.';
        this.msgCannotOpenContent = 'Error occurred opening content in editor.';
        this.msgSaveStarted = 'Started saving results to ';
        this.msgSaveFailed = 'Failed to save results. ';
        this.msgSaveSucceeded = 'Successfully saved results to ';
        this.msgSelectProfile = 'Select connection profile';
        this.msgSelectProfileToRemove = 'Select profile to remove';
        this.confirmRemoveProfilePrompt = 'Confirm to remove this profile.';
        this.msgNoProfilesSaved = 'No connection profile to remove.';
        this.msgProfileRemoved = 'Profile removed successfully';
        this.msgProfileCreated = 'Profile created successfully';
        this.msgProfileCreatedAndConnected = 'Profile created and connected';
        this.msgClearedRecentConnections = 'Recent connections list cleared';
        this.msgSelectionIsRequired = 'Selection is required.';
        this.msgIsRequired = ' is required.';
        this.msgRetry = 'Retry';
        this.msgError = 'Error: ';
        this.msgYes = 'Yes';
        this.msgNo = 'No';
        this.defaultDatabaseLabel = '<default>';
        this.notConnectedLabel = 'Disconnected';
        this.notConnectedTooltip = 'Click to connect to a database';
        this.connectingLabel = 'Connecting';
        this.connectingTooltip = 'Connecting to: ';
        this.connectedLabel = 'Connected.';
        this.connectErrorLabel = 'Connection error';
        this.connectErrorTooltip = 'Error connecting to: ';
        this.connectErrorCode = 'Errorcode: ';
        this.connectErrorMessage = 'ErrorMessage: ';
        this.executeQueryLabel = 'Executing query ';
        this.cancelingQueryLabel = 'Canceling query ';
        this.updatingIntelliSenseLabel = 'Updating IntelliSense...';
        this.unfoundResult = 'Data was disposed when text editor was closed; to view data please reexecute query.';
        this.serviceCompatibleVersion = '1.0.0';
        this.serviceNotCompatibleError = 'Client is not compatible with the service layer';
        this.serviceInstallingTo = 'Installing SQL tools service to';
        this.serviceInitializing = 'Initializing SQL tools service for the mssql extension.';
        this.commandsNotAvailableWhileInstallingTheService = 'Note: mssql commands will be available after installing the service.';
        this.serviceInstalled = 'Sql Tools Service installed';
        this.serviceInstallationFailed = 'Failed to install Sql Tools Service';
        this.serviceLoadingFailed = 'Failed to load Sql Tools Service';
        this.invalidServiceFilePath = 'Invalid file path for Sql Tools Service';
        this.extensionNotInitializedError = 'Unable to execute the command while the extension is initializing. Please try again later.';
        this.untitledScheme = 'untitled';
        this.untitledSaveTimeThreshold = 10.0;
        this.renamedOpenTimeThreshold = 10.0;
        this.msgChangeLanguageMode = 'To use this command, you must set the language to \"SQL\". Confirm to change language mode.';
        this.timeToWaitForLanguageModeChange = 10000.0;
        this.msgChangedDatabaseContext = 'Changed database context to \"{0}\" for document \"{1}\"';
        this.msgPromptRetryCreateProfile = 'Error: Unable to connect using the connection information provided. Retry profile creation?';
        this.retryLabel = 'Retry';
        this.msgConnecting = 'Connecting to server \"{0}\" on document \"{1}\".';
        this.msgConnectedServerInfo = 'Connected to server \"{0}\" on document \"{1}\". Server information: {2}';
        this.msgConnectionFailed = 'Error connecting to server \"{0}\". Details: {1}';
        this.msgChangingDatabase = 'Changing database context to \"{0}\" on server \"{1}\" on document \"{2}\".';
        this.msgChangedDatabase = 'Changed database context to \"{0}\" on server \"{1}\" on document \"{2}\".';
        this.msgDisconnected = 'Disconnected on document \"{0}\"';
        this.msgErrorReadingConfigFile = 'Error: Unable to load connection profiles from [{0}]. Check if the file is formatted correctly.';
        this.msgErrorOpeningConfigFile = 'Error: Unable to open connection profile settings file.';
        this.extConfigResultKeys = ['shortcuts', 'messagesDefaultOpen'];
        this.extConfigResultFontFamily = 'resultsFontFamily';
        this.extConfigResultFontSize = 'resultsFontSize';
        this.titleResultsPane = 'Results: {0}';
        this.macOpenSslErrorMessage = `OpenSSL version >=1.0.1 is required to connect.`;
        this.macOpenSslHelpButton = 'Help';
        this.macOpenSslHelpLink = 'https://github.com/Microsoft/vscode-mssql/wiki/OpenSSL-Configuration';
        this.serviceName = 'SQLToolsService';
        this.serviceInitializingOutputChannelName = 'SqlToolsService Initialization';
        this.gettingStartedGuideLink = 'https://aka.ms/mssql-getting-started';
        this.serviceCrashMessage = 'SQL Tools Service component exited unexpectedly. Please restart SQL Operations Studio.';
        this.serviceCrashLink = 'https://github.com/Microsoft/vscode-mssql/wiki/SqlToolsService-Known-Issues';
        this.gettingDefinitionMessage = 'Getting definition ...';
        this.definitionRequestedStatus = 'DefinitionRequested';
        this.definitionRequestCompletedStatus = 'DefinitionRequestCompleted';
        this.updatingIntelliSenseStatus = 'updatingIntelliSense';
        this.intelliSenseUpdatedStatus = 'intelliSenseUpdated';
    }
    /**
     * Returns a supported .NET Core Runtime ID (RID) for the current platform. The list of Runtime IDs
     * is available at https://github.com/dotnet/corefx/tree/master/pkg/Microsoft.NETCore.Platforms.
     */
    getRuntimeId(platform, architecture, distribution) {
        switch (platform) {
            case 'win32':
                switch (architecture) {
                    case 'x86': return platform_1.Runtime.Windows_86;
                    case 'x86_64': return platform_1.Runtime.Windows_64;
                    default:
                }
                throw new Error(`Unsupported Windows architecture: ${architecture}`);
            case 'darwin':
                if (architecture === 'x86_64') {
                    // Note: We return the El Capitan RID for Sierra
                    return platform_1.Runtime.OSX;
                }
                throw new Error(`Unsupported macOS architecture: ${architecture}`);
            case 'linux':
                if (architecture === 'x86_64') {
                    // First try the distribution name
                    let runtimeId = Constants.getRuntimeIdHelper(distribution.name, distribution.version);
                    // If the distribution isn't one that we understand, but the 'ID_LIKE' field has something that we understand, use that
                    //
                    // NOTE: 'ID_LIKE' doesn't specify the version of the 'like' OS. So we will use the 'VERSION_ID' value. This will restrict
                    // how useful ID_LIKE will be since it requires the version numbers to match up, but it is the best we can do.
                    if (runtimeId === platform_1.Runtime.UnknownRuntime && distribution.idLike && distribution.idLike.length > 0) {
                        for (let id of distribution.idLike) {
                            runtimeId = Constants.getRuntimeIdHelper(id, distribution.version);
                            if (runtimeId !== platform_1.Runtime.UnknownRuntime) {
                                break;
                            }
                        }
                    }
                    if (runtimeId !== platform_1.Runtime.UnknownRuntime && runtimeId !== platform_1.Runtime.UnknownVersion) {
                        return runtimeId;
                    }
                }
                // If we got here, this is not a Linux distro or architecture that we currently support.
                throw new Error(`Unsupported Linux distro: ${distribution.name}, ${distribution.version}, ${architecture}`);
            default:
                // If we got here, we've ended up with a platform we don't support  like 'freebsd' or 'sunos'.
                // Chances are, VS Code doesn't support these platforms either.
                throw Error('Unsupported platform ' + platform);
        }
    }
    static getRuntimeIdHelper(distributionName, distributionVersion) {
        switch (distributionName) {
            case 'ubuntu':
                if (distributionVersion.startsWith('14')) {
                    // This also works for Linux Mint
                    return platform_1.Runtime.Ubuntu_14;
                }
                else if (distributionVersion.startsWith('16')) {
                    return platform_1.Runtime.Ubuntu_16;
                }
                break;
            case 'elementary':
            case 'elementary OS':
                if (distributionVersion.startsWith('0.3')) {
                    // Elementary OS 0.3 Freya is binary compatible with Ubuntu 14.04
                    return platform_1.Runtime.Ubuntu_14;
                }
                else if (distributionVersion.startsWith('0.4')) {
                    // Elementary OS 0.4 Loki is binary compatible with Ubuntu 16.04
                    return platform_1.Runtime.Ubuntu_16;
                }
                break;
            case 'linuxmint':
                if (distributionVersion.startsWith('18')) {
                    // Linux Mint 18 is binary compatible with Ubuntu 16.04
                    return platform_1.Runtime.Ubuntu_16;
                }
                break;
            case 'centos':
            case 'ol':
                // Oracle Linux is binary compatible with CentOS
                return platform_1.Runtime.CentOS_7;
            case 'fedora':
                return platform_1.Runtime.Fedora_23;
            case 'opensuse':
                return platform_1.Runtime.OpenSUSE_13_2;
            case 'sles':
                return platform_1.Runtime.SLES_12_2;
            case 'rhel':
                return platform_1.Runtime.RHEL_7;
            case 'debian':
                return platform_1.Runtime.Debian_8;
            case 'galliumos':
                if (distributionVersion.startsWith('2.0')) {
                    return platform_1.Runtime.Ubuntu_16;
                }
                break;
            default:
                return platform_1.Runtime.UnknownRuntime;
        }
        return platform_1.Runtime.UnknownVersion;
    }
}
exports.Constants = Constants;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/8a3011756318a2ded1e6e84332230a2b2bf9c544/extensions\mssql\client\out/models\constants.js.map
