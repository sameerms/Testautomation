/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
/*---------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/workbench/workbench.main.nls", {
	"sql/base/browser/ui/editableDropdown/actions": [
		"Toggle dropdown"
	],
	"sql/base/browser/ui/editableDropdown/dropdown": [
		"Must be an option from the list"
	],
	"sql/base/browser/ui/modal/optionsDialog": [
		"OK",
		"Cancel"
	],
	"sql/base/browser/ui/modal/optionsDialogHelper": [
		" is required.",
		"Invalid input.  Numeric value expected."
	],
	"sql/base/browser/ui/selectBox/selectBox": [
		"Error: {0}",
		"Warning: {0}",
		"Info: {0}"
	],
	"sql/base/browser/ui/table/plugins/checkboxSelectColumn.plugin": [
		"Select/Deselect All"
	],
	"sql/common/theme/colors": [
		"Table header background color",
		"Table header foreground color",
		"Disabled Input box background.",
		"Disabled Input box foreground."
	],
	"sql/parts/accountManagement/accountDialog/accountDialog": [
		"Linked Accounts",
		"Close"
	],
	"sql/parts/accountManagement/accountDialog/accountDialogController": [
		"Error adding account"
	],
	"sql/parts/accountManagement/accountListStatusbar/accountListStatusbarItem": [
		"Manage Linked Accounts"
	],
	"sql/parts/accountManagement/common/accountActions": [
		"Add an account",
		"Remove account",
		"Are you sure you want to remove '{0}'?",
		"Yes",
		"No",
		"Failed to remove account",
		"Apply Filters",
		"Reenter your credentials"
	],
	"sql/parts/accountManagement/common/accountListRenderer": [
		"You need to refresh the credentials for this account."
	],
	"sql/parts/accountManagement/firewallRuleDialog/firewallRuleDialog": [
		"Create new firewall rule",
		"OK",
		"Cancel",
		"Your client IP address does not have access to the server. Sign in to an Azure account and create a new firewall rule to enable access.",
		"Learn more about firewall settings",
		"Azure account",
		"From",
		"To",
		"Firewall rule",
		"Add my client IP ",
		"Add my subnet IP range"
	],
	"sql/parts/accountManagement/firewallRuleDialog/firewallRuleDialogController": [
		"Error adding account",
		"Firewall rule error"
	],
	"sql/parts/admin/common/adminService": [
		"Connection is required in order to interact with adminservice",
		"No Handler Registered"
	],
	"sql/parts/admin/database/create/createDatabase.component": [
		"Database files:",
		"No records found"
	],
	"sql/parts/connection/common/connection.contribution": [
		"The maximum number of recently used connections to store in the connection list.",
		"Default SQL Engine to use. This drives default language provider in .sql files and the default to use when creating a new connection."
	],
	"sql/parts/connection/common/connectionActions": [
		"Clear Recent Connections List",
		"Recent connections list cleared",
		"Yes",
		"No",
		"Clear Recent Connections List"
	],
	"sql/parts/connection/common/connectionConfig": [
		"A server group with the same name already exists.",
		"A server group with the same name already exists."
	],
	"sql/parts/connection/common/connectionManagementService": [
		"Connection Not Accepted",
		"Connection Not Accepted",
		"Yes",
		"No",
		"Are you sure you want to cancel this connection?"
	],
	"sql/parts/connection/common/localizedConstants": [
		"Connected to",
		"Disconnected",
		"Unsaved Connections"
	],
	"sql/parts/connection/connectionDialog/advancedPropertiesController": [
		"Advanced properties",
		"Discard"
	],
	"sql/parts/connection/connectionDialog/connectionDialogService": [
		"Connection Error"
	],
	"sql/parts/connection/connectionDialog/connectionDialogWidget": [
		"Connection",
		"Microsoft SQL Server",
		"Connect",
		"Cancel",
		"Recent history"
	],
	"sql/parts/connection/connectionDialog/connectionWidget": [
		"<Default>",
		"Add new group...",
		"<None>",
		" is required.",
		"Remember password",
		"Server group",
		"Advanced..."
	],
	"sql/parts/dashboard/common/actions": [
		"Refresh"
	],
	"sql/parts/dashboard/common/dashboardPage.component": [
		"No connection information could be found for this dashboard",
		"Widget filters based on edition, but the provider does not have an edition"
	],
	"sql/parts/dashboard/pages/databaseDashboardPage.component": [
		"DATABASE DASHBOARD"
	],
	"sql/parts/dashboard/pages/databaseDashboardPage.contribution": [
		"Enable or disable the properties widget",
		"Property values to show",
		"Display name of the property",
		"Value in the Database Info Object",
		"Specify specific values to ignore",
		"Recovery Model",
		"Last Database Backup",
		"Last Log Backup",
		"Compatibility Level",
		"Owner",
		"Customizes the database dashboard page"
	],
	"sql/parts/dashboard/pages/serverDashboardPage.component": [
		"SERVER DASHBOARD"
	],
	"sql/parts/dashboard/pages/serverDashboardPage.contribution": [
		"Enable or disable the properties widget",
		"Property values to show",
		"Display name of the property",
		"Value in the Server Info Object",
		"Version",
		"Edition",
		"Computer Name",
		"OS Version",
		"Customizes the server dashboard page"
	],
	"sql/parts/dashboard/services/breadcrumb.service": [
		"Home"
	],
	"sql/parts/dashboard/services/dashboardServiceInterface.service": [
		"Failed to change database",
		"Failed to change database"
	],
	"sql/parts/dashboard/widgets/explorer/explorerWidget.component": [
		"Search by name of type (a:, t:, v:, f:, or sp:)",
		"Search databases",
		"Unable to load objects",
		"Unable to load databases"
	],
	"sql/parts/dashboard/widgets/insights/actions": [
		"Run Query"
	],
	"sql/parts/dashboard/widgets/insights/insightsWidget.component": [
		"No results to show"
	],
	"sql/parts/dashboard/widgets/insights/insightsWidgetSchemas": [
		"Adds a widget that can query a server or database and display the results in multiple ways - as a chart, summarized count, and more",
		"Unique Identifier used for cacheing the results of the insight.",
		"SQL query to run. This should return exactly 1 resultset.",
		"[Optional] path to a file that contains a query. Use if \"query\" is not set",
		"Target database for the action; can use the format \"${columnName} to use a data driven column name.",
		"Target server for the action; can use the format \"${columnName} to use a data driven column name.",
		"Target user for the action; can use the format \"${columnName} to use a data driven column name.",
		"Identifier of the insight",
		"Contributes insights to the dashboard palette."
	],
	"sql/parts/dashboard/widgets/insights/views/charts/chartInsight.contribution": [
		"Displays results of a query as a chart on the dashboard",
		"Maps \"column name\" -> color. for example add \"column1\": red to ensure this column uses a red color ",
		"Indicates preferred position and visibility of the chart legend. These are the column names from your query, and map to the label of each chart entry",
		"If dataDirection is horizontal, setting this to true uses the first columns value for the legend.",
		"If dataDirection is vertical, setting this to true will use the columns names for the legend.",
		"Defines whether the data is read from a column (vertical) or a row (horizontal). For time series this is ignored as direction must be vertical."
	],
	"sql/parts/dashboard/widgets/insights/views/charts/types/lineChart.contribution": [
		"Indicates data property of a data set for a chart."
	],
	"sql/parts/dashboard/widgets/insights/views/countInsight.contribution": [
		"For each column in a resultset, displays the value in row 0 as a count followed by the column name. Supports \"1 Healthy\", \"3 Unhealthy\" for example, where \"Healthy\" is the column name and 1 is the value in row 1 cell 1"
	],
	"sql/parts/dashboard/widgets/insights/views/imageInsight.contribution": [
		"Displays an image, for example one returned by an R query using ggplot2",
		"What format is expected - is this a JPEG, PNG or other format?",
		"Is this encoded as hex, base64 or some other format?"
	],
	"sql/parts/dashboard/widgets/properties/propertiesJson": [
		"Edition",
		"Type",
		"Recovery Model",
		"Last Database Backup",
		"Last Log Backup",
		"Compatibility Level",
		"Owner",
		"Version",
		"Edition",
		"Computer Name",
		"OS Version",
		"Pricing Tier",
		"Compatibility Level",
		"Owner",
		"Version"
	],
	"sql/parts/dashboard/widgets/properties/propertiesWidget.component": [
		"Unable to load dashboard properties"
	],
	"sql/parts/dashboard/widgets/tasks/tasksWidget.component": [
		"Could not find task {0}; are you missing an extension?"
	],
	"sql/parts/disasterRecovery/backup/backup.component": [
		"Backup name",
		"Recovery model",
		"Backup type",
		"Backup files",
		"Algorithm",
		"Certificate or Asymmetric key",
		"Media",
		"Backup to the existing media set",
		"Backup to a new media set",
		"Append to the existing backup set",
		"Overwrite all existing backup sets",
		"New media set name",
		"New media set description",
		"Perform checksum before writing to media",
		"Verify backup when finished",
		"Continue on error",
		"Expiration",
		"Set backup retain days",
		"Copy-only backup",
		"Advanced Configuration",
		"Compression",
		"Set backup compression",
		"Encryption",
		"Transaction log",
		"Reliability",
		"Media name is required",
		"No certificate or asymmetric key is available",
		"Invalid input. Value must be greater than or equal 0.",
		"Script",
		"Backup",
		"Cancel",
		"Only backup to file is supported",
		"Backup file path is required"
	],
	"sql/parts/disasterRecovery/backup/constants": [
		"Backup Files",
		"All Files"
	],
	"sql/parts/disasterRecovery/restore/restoreDialog": [
		"Restore database",
		"Restore database",
		"Database",
		"Backup file",
		"Restore",
		"Cancel",
		"Script",
		"Source",
		"Restore from",
		"Backup file path is required.",
		"Please enter one or more file paths separated by commas",
		"Backup file path",
		"Database",
		"Destination",
		"Target database",
		"Restore to",
		"Restore plan",
		"Backup sets to restore",
		"Restore database files as",
		"Restore database file details",
		"Logical file Name",
		"File type",
		"Original File Name",
		"Restore as",
		"Restore options",
		"Tail-Log backup",
		"Server connections",
		"General",
		"Files",
		"Options"
	],
	"sql/parts/editData/common/editDataInput": [
		"Edit Data Session Failed To Connect"
	],
	"sql/parts/editData/editor/editDataEditor": [
		"Max Rows:"
	],
	"sql/parts/editData/execution/editDataActions": [
		"Refresh",
		"Dispose Edit Failed With Error: ",
		"Stop"
	],
	"sql/parts/fileBrowser/common/fileBrowserService": [
		"An error occured while loading the file browser.",
		"File Browser Error"
	],
	"sql/parts/fileBrowser/fileBrowserDialog": [
		"Selected path",
		"Files of type",
		"OK",
		"Discard"
	],
	"sql/parts/fileBrowser/fileBrowserDialogController": [
		"Select a file"
	],
	"sql/parts/fileBrowser/fileBrowserTreeView": [
		"File browser tree"
	],
	"sql/parts/fileBrowser/fileBrowserViewModel": [
		"All files"
	],
	"sql/parts/grid/views/editData/editDataGridActions": [
		"Delete Row",
		"Revert Row"
	],
	"sql/parts/grid/views/gridActions": [
		"Save As CSV",
		"Save As JSON",
		"Save As Excel",
		"Copy",
		"Copy With Headers",
		"Select All",
		"Select All",
		"Copy"
	],
	"sql/parts/grid/views/query/chartViewer.component": [
		"Chart Type",
		"Data Direction",
		"Vertical",
		"Horizontal",
		"Data Type",
		"Number",
		"Point",
		"Use First Column as row label?",
		"Use Column names as labels?",
		"Legend Position",
		"Could not find chart to save",
		"Saved Chart to path: {0}",
		"Choose Results File",
		"Cannot create insight as the active editor is not a SQL Editor",
		"Cannot create insight, backing data model not found",
		"My-Widget"
	],
	"sql/parts/grid/views/query/chartViewerActions": [
		"Chart View context is required to run this action",
		"Create Insight",
		"Copy as image",
		"Save as image"
	],
	"sql/parts/insights/browser/insightsDialogView": [
		"Item",
		"Value",
		"Property",
		"Value",
		"Insights",
		"Items",
		"Item Details"
	],
	"sql/parts/insights/common/insightDialogActions": [
		"Copy Cell"
	],
	"sql/parts/insights/node/insightsDialogController": [
		"No Connection Profile was passed to insights flyout",
		"Insights Error",
		"Insights Error",
		"Insights Error",
		"There was an error reading the query file: ",
		"There was an error parsing the insight config; could not find query array/string or queryfile",
		"Insights Error",
		"Insights Error"
	],
	"sql/parts/profiler/contrib/profiler.contribution": [
		"Specifies session templates"
	],
	"sql/parts/profiler/contrib/profilerActions": [
		"Connect",
		"Disconnected",
		"Connect",
		"Start",
		"Pause",
		"Stop",
		"Clear Data",
		"Toggle Auto Scroll",
		"Toggle Collapsed Panel",
		"Edit Columns",
		"Find Next String",
		"Find Previous String",
		"New Profiler"
	],
	"sql/parts/profiler/contrib/profilerActions.contribution": [
		"Profiler",
		"Open up a new profiler window"
	],
	"sql/parts/profiler/contrib/profilerWorkbenchActions": [
		"New Profiler"
	],
	"sql/parts/profiler/dialog/profilerColumnEditorDialog": [
		"Sort by event",
		"Sort by column",
		"Profiler",
		"OK",
		"Cancel"
	],
	"sql/parts/profiler/editor/controller/profilerFindWidget": [
		"Find",
		"Find",
		"Previous match",
		"Next match",
		"Close",
		"Only the first 999 results are highlighted, but all find operations work on the entire text.",
		"{0} of {1}",
		"No Results"
	],
	"sql/parts/profiler/editor/profilerEditor": [
		"Text",
		"Label",
		"Value",
		"Details"
	],
	"sql/parts/profiler/editor/profilerInput": [
		"Profiler"
	],
	"sql/parts/profiler/editor/profilerResourceEditor": [
		"Profiler editor for event text. Readonly"
	],
	"sql/parts/query/common/localizedConstants": [
		"Started executing query at ",
		"Line {0}",
		"Canceling the query failed: {0}",
		"File path",
		"File name",
		"File name",
		"A file with this name already exists. Do you want to replace the existing file?",
		"A file with this name already exists",
		"A save request is already executing. Please wait for its completion.",
		"Error occurred opening content in editor.",
		"Started saving results to ",
		"Failed to save results. ",
		"Successfully saved results to ",
		"Executing query...",
		"Maximize",
		"Restore",
		"Save as CSV",
		"Save as JSON",
		"Save as Excel",
		"View as Chart",
		"Results",
		"Select all",
		"Copy",
		"Executing query ",
		"Messages",
		"Total execution time: {0}",
		"Save results command cannot be used with multiple selections."
	],
	"sql/parts/query/common/query.contribution": [
		"True for the messages pane to be open by default; false for closed",
		"[Optional] When true, column headers are included when saving results as CSV",
		"[Optional] Configuration options for copying results from the Results View",
		"[Optional] Configuration options for copying multi-line results from the Results View",
		"[Optional] Should execution time be shown for individual batches",
		"Should IntelliSense be enabled",
		"Should IntelliSense error checking be enabled",
		"Should IntelliSense suggestions be enabled",
		"Should IntelliSense quick info be enabled",
		"Should IntelliSense suggestions be lowercase"
	],
	"sql/parts/query/common/queryResultsInput": [
		"Extension"
	],
	"sql/parts/query/common/resultSerializer": [
		"Choose Results File"
	],
	"sql/parts/query/execution/keyboardQueryActions": [
		"Run Query",
		"Run Current Query",
		"Cancel Query",
		"Refresh IntelliSense Cache"
	],
	"sql/parts/query/execution/queryActions": [
		"Run",
		"Cancel",
		"Explain",
		"Disconnect",
		"Change Connection",
		"Connect",
		"Connect",
		"Disconnect",
		"Select Database",
		"Failed to change database",
		"Failed to change database {0}"
	],
	"sql/parts/query/execution/queryModelService": [
		"Commit row failed: ",
		"Update cell failed: ",
		"Commit row failed: "
	],
	"sql/parts/query/execution/queryRunner": [
		"Execution failed: {0}",
		"Something went wrong getting more rows: {0}",
		"Init Edit Execution failed: ",
		"Something went wrong getting more rows:",
		"Batch execution time: {0}"
	],
	"sql/parts/query/services/queryEditorService": [
		"Change Language Mode is not supported for unsaved queries",
		"Please save or discard changes before switching to/from the SQL Language Mode"
	],
	"sql/parts/query/views/queryOutput.component": [
		"Results",
		"Query Plan",
		"Top Operations",
		"Chart Viewer"
	],
	"sql/parts/queryPlan/topOperations.component": [
		"Operation",
		"Object",
		"Est Cost",
		"Est Subtree Cost",
		"Actual Rows",
		"Est Rows",
		"Actual Executions",
		"Est CPU Cost",
		"Est IO Cost",
		"Parallel",
		"Actual Rebinds",
		"Est Rebinds",
		"Actual Rewinds",
		"Est Rewinds",
		"Partitioned"
	],
	"sql/parts/registeredServer/common/objectExplorerService": [
		"Failed to create Object Explorer session"
	],
	"sql/parts/registeredServer/common/registeredServer.contribution": [
		"View",
		"Database Connections",
		"data source connections",
		"data source groups",
		"Startup Configuration",
		"True for the Servers view to be shown on launch of SQL Operations Studio default; false if the last opened view should be shown"
	],
	"sql/parts/registeredServer/serverGroupDialog/serverGroupDialog": [
		"Server Groups",
		"OK",
		"Cancel",
		"Server group name",
		"Group name is required.",
		"Group description",
		"Group color"
	],
	"sql/parts/registeredServer/serverGroupDialog/serverGroupViewModel": [
		"Add server group",
		"Edit server group"
	],
	"sql/parts/registeredServer/viewlet/connectionTreeAction": [
		"Refresh",
		"Disconnect",
		"New Connection",
		"New Server Group",
		"Edit Server Group",
		"Show Active Connections",
		"Clear All",
		"Recent Connections",
		"New Query",
		"Delete Connection",
		"Delete Group",
		"Clear Search"
	],
	"sql/parts/registeredServer/viewlet/objectExplorerActions": [
		"Manage",
		"Disconnect"
	],
	"sql/parts/registeredServer/viewlet/treeCreationUtils": [
		"Recent Connections",
		"Servers"
	],
	"sql/parts/taskHistory/common/taskHistory.contribution": [
		"{0} in progress tasks",
		"Show Task History",
		"View",
		"Task History",
		"Operation Task Status"
	],
	"sql/parts/taskHistory/common/taskService": [
		"1 or more tasks are in progress. Are you sure you want to quit?",
		"Yes",
		"No"
	],
	"sql/parts/taskHistory/viewlet/taskAction": [
		"Cancel",
		"The task is failed to cancel.",
		"Script"
	],
	"sql/parts/taskHistory/viewlet/taskHistoryRenderer": [
		"succeeded",
		"failed",
		"in progress",
		"not started",
		"canceled",
		"canceling"
	],
	"sql/parts/taskHistory/viewlet/taskHistoryView": [
		"No task history to display. Try backup or restore task to view its execution status.",
		"Task history",
		"Task Error"
	],
	"sql/platform/dashboard/common/insightRegistry": [
		"Widget used in the dashboards"
	],
	"sql/platform/dashboard/common/widgetRegistry": [
		"Widget used in the dashboards",
		"Widget used in the dashboards"
	],
	"sql/platform/tasks/taskRegistry": [
		"Task actions specific for sql"
	],
	"sql/services/accountManagement/accountManagementService": [
		"Account provider does not exist",
		"Account provider does not exist"
	],
	"sql/workbench/common/actions": [
		"New Query",
		"Select Top 1000",
		"Edit Data",
		"Script as Create",
		"Script as Delete",
		"Backup",
		"Restore",
		"Manage",
		"Show Details",
		"New Database",
		"Configure"
	],
	"sql/workbench/common/actions.contribution": [
		"Open up backup dialog",
		"Open up restore dialog",
		"Open a new query window",
		"Configure the Management Dashboard"
	],
	"sql/workbench/common/taskUtilities": [
		"Select",
		"Create",
		"Insert",
		"Update",
		"Delete",
		"No script was returned when calling select script on object ",
		"No script was returned when scripting as {0} on object {1}",
		"Scripting Failed",
		"No script was returned when scripting as {0}"
	],
	"sql/workbench/errorMessageDialog/errorMessageService": [
		"Error",
		"Warning",
		"Info"
	],
	"sql/workbench/update/releaseNotes": [
		"Get Started",
		"Show Getting Started",
		"Welcome to {0} Public Preview 1! Would you like to view the Getting Started Guide?"
	],
	"vs/base/browser/ui/actionbar/actionbar": [
		"{0} ({1})"
	],
	"vs/base/browser/ui/aria/aria": [
		"{0} (occurred again)"
	],
	"vs/base/browser/ui/findinput/findInput": [
		"input"
	],
	"vs/base/browser/ui/findinput/findInputCheckboxes": [
		"Match Case",
		"Match Whole Word",
		"Use Regular Expression"
	],
	"vs/base/browser/ui/inputbox/inputBox": [
		"Error: {0}",
		"Warning: {0}",
		"Info: {0}"
	],
	"vs/base/browser/ui/resourceviewer/resourceViewer": [
		"{0}x{1} {2}",
		"The image is too large to display in the editor. ",
		"Open image using external program?",
		"The file will not be displayed in the editor because it is either binary, very large or uses an unsupported text encoding.",
		"{0}B",
		"{0}KB",
		"{0}MB",
		"{0}GB",
		"{0}TB"
	],
	"vs/base/browser/ui/toolbar/toolbar": [
		"More"
	],
	"vs/base/common/errorMessage": [
		"{0}. Error code: {1}",
		"Permission Denied (HTTP {0})",
		"Permission Denied",
		"{0} (HTTP {1}: {2})",
		"{0} (HTTP {1})",
		"Unknown Connection Error ({0})",
		"An unknown connection error occurred. Either you are no longer connected to the internet or the server you are connected to is offline.",
		"{0}: {1}",
		"An unknown error occurred. Please consult the log for more details.",
		"A system error occurred ({0})",
		"An unknown error occurred. Please consult the log for more details.",
		"{0} ({1} errors in total)",
		"An unknown error occurred. Please consult the log for more details."
	],
	"vs/base/common/jsonErrorMessages": [
		"Invalid symbol",
		"Invalid number format",
		"Property name expected",
		"Value expected",
		"Colon expected",
		"Comma expected",
		"Closing brace expected",
		"Closing bracket expected",
		"End of file expected"
	],
	"vs/base/common/keybindingLabels": [
		"Ctrl",
		"Shift",
		"Alt",
		"Windows",
		"Control",
		"Shift",
		"Alt",
		"Command",
		"Control",
		"Shift",
		"Alt",
		"Windows"
	],
	"vs/base/common/processes": [
		"Error: executable info must define a command of type string.",
		"Warning: isShellCommand must be of type boolean. Ignoring value {0}.",
		"Warning: args must be of type string[]. Ignoring value {0}.",
		"Warning: options.cwd must be of type string. Ignoring value {0}."
	],
	"vs/base/common/severity": [
		"Error",
		"Warning",
		"Info"
	],
	"vs/base/node/processes": [
		"Can't execute a shell command on an UNC drive."
	],
	"vs/base/parts/quickopen/browser/quickOpenModel": [
		"{0}, picker",
		"picker"
	],
	"vs/base/parts/quickopen/browser/quickOpenWidget": [
		"Quick picker. Type to narrow down results.",
		"Quick Picker"
	],
	"vs/base/parts/tree/browser/treeDefaults": [
		"Collapse"
	],
	"vs/editor/browser/widget/diffEditorWidget": [
		"Cannot compare files because one file is too large."
	],
	"vs/editor/browser/widget/diffReview": [
		"Close",
		"Difference {0} of {1}: original {2}, {3} lines, modified {4}, {5} lines",
		"blank",
		"original {0}, modified {1}: {2}",
		"+ modified {0}: {1}",
		"- original {0}: {1}",
		"Go to Next Difference",
		"Go to Previous Difference"
	],
	"vs/editor/common/config/commonEditorConfig": [
		"Editor",
		"Controls the font family.",
		"Controls the font weight.",
		"Controls the font size in pixels.",
		"Controls the line height. Use 0 to compute the lineHeight from the fontSize.",
		"Controls the letter spacing in pixels.",
		"Controls the display of line numbers. Possible values are 'on', 'off', and 'relative'. 'relative' shows the line count from the current cursor position.",
		"Columns at which to show vertical rulers",
		"Characters that will be used as word separators when doing word related navigations or operations",
		"The number of spaces a tab is equal to. This setting is overriden based on the file contents when `editor.detectIndentation` is on.",
		"Expected 'number'. Note that the value \"auto\" has been replaced by the `editor.detectIndentation` setting.",
		"Insert spaces when pressing Tab. This setting is overriden based on the file contents when `editor.detectIndentation` is on.",
		"Expected 'boolean'. Note that the value \"auto\" has been replaced by the `editor.detectIndentation` setting.",
		"When opening a file, `editor.tabSize` and `editor.insertSpaces` will be detected based on the file contents.",
		"Controls if selections have rounded corners",
		"Controls if the editor will scroll beyond the last line",
		"Controls if the editor will scroll using an animation",
		"Controls if the minimap is shown",
		"Controls whether the minimap slider is automatically hidden. Possible values are 'always' and 'mouseover'",
		"Render the actual characters on a line (as opposed to color blocks)",
		"Limit the width of the minimap to render at most a certain number of columns",
		"Controls if we seed the search string in Find Widget from editor selection",
		"Controls if Find in Selection flag is turned on when multiple characters or lines of text are selected in the editor",
		"Lines will never wrap.",
		"Lines will wrap at the viewport width.",
		"Lines will wrap at `editor.wordWrapColumn`.",
		"Lines will wrap at the minimum of viewport and `editor.wordWrapColumn`.",
		"Controls how lines should wrap. Can be:\n - 'off' (disable wrapping),\n - 'on' (viewport wrapping),\n - 'wordWrapColumn' (wrap at `editor.wordWrapColumn`) or\n - 'bounded' (wrap at minimum of viewport and `editor.wordWrapColumn`).",
		"Controls the wrapping column of the editor when `editor.wordWrap` is 'wordWrapColumn' or 'bounded'.",
		"Controls the indentation of wrapped lines. Can be one of 'none', 'same' or 'indent'.",
		"A multiplier to be used on the `deltaX` and `deltaY` of mouse wheel scroll events",
		"Maps to `Control` on Windows and Linux and to `Command` on OSX.",
		"Maps to `Alt` on Windows and Linux and to `Option` on OSX.",
		"The modifier to be used to add multiple cursors with the mouse. `ctrlCmd` maps to `Control` on Windows and Linux and to `Command` on OSX. The Go To Definition and Open Link mouse gestures will adapt such that they do not conflict with the multicursor modifier.",
		"Enable quick suggestions inside strings.",
		"Enable quick suggestions inside comments.",
		"Enable quick suggestions outside of strings and comments.",
		"Controls if suggestions should automatically show up while typing",
		"Controls the delay in ms after which quick suggestions will show up",
		"Enables pop-up that shows parameter documentation and type information as you type",
		"Controls if the editor should automatically close brackets after opening them",
		"Controls if the editor should automatically format the line after typing",
		"Controls if the editor should automatically format the pasted content. A formatter must be available and the formatter should be able to format a range in a document.",
		"Controls if the editor should automatically adjust the indentation when users type, paste or move lines. Indentation rules of the language must be available. ",
		"Controls if suggestions should automatically show up when typing trigger characters",
		"Controls if suggestions should be accepted on 'Enter' - in addition to 'Tab'. Helps to avoid ambiguity between inserting new lines or accepting suggestions. The value 'smart' means only accept a suggestion with Enter when it makes a textual change",
		"Controls if suggestions should be accepted on commit characters. For instance in JavaScript the semi-colon (';') can be a commit character that accepts a suggestion and types that character.",
		"Show snippet suggestions on top of other suggestions.",
		"Show snippet suggestions below other suggestions.",
		"Show snippets suggestions with other suggestions.",
		"Do not show snippet suggestions.",
		"Controls whether snippets are shown with other suggestions and how they are sorted.",
		"Controls whether copying without a selection copies the current line.",
		"Controls whether completions should be computed based on words in the document.",
		"Font size for the suggest widget",
		"Line height for the suggest widget",
		"Controls whether the editor should highlight similar matches to the selection",
		"Controls whether the editor should highlight semantic symbol occurrences",
		"Controls the number of decorations that can show up at the same position in the overview ruler",
		"Controls if a border should be drawn around the overview ruler.",
		"Control the cursor animation style, possible values are 'blink', 'smooth', 'phase', 'expand' and 'solid'",
		"Zoom the font of the editor when using mouse wheel and holding Ctrl",
		"Controls the cursor style, accepted values are 'block', 'block-outline', 'line', 'line-thin', 'underline' and 'underline-thin'",
		"Enables font ligatures",
		"Controls if the cursor should be hidden in the overview ruler.",
		"Controls how the editor should render whitespace characters, possibilities are 'none', 'boundary', and 'all'. The 'boundary' option does not render single spaces between words.",
		"Controls whether the editor should render control characters",
		"Controls whether the editor should render indent guides",
		"Controls how the editor should render the current line highlight, possibilities are 'none', 'gutter', 'line', and 'all'.",
		"Controls if the editor shows code lenses",
		"Controls whether the editor has code folding enabled",
		"Controls whether the fold controls on the gutter are automatically hidden.",
		"Highlight matching brackets when one of them is selected.",
		"Controls whether the editor should render the vertical glyph margin. Glyph margin is mostly used for debugging.",
		"Inserting and deleting whitespace follows tab stops",
		"Remove trailing auto inserted whitespace",
		"Keep peek editors open even when double clicking their content or when hitting Escape.",
		"Controls if the editor should allow to move selections via drag and drop.",
		"The editor will use platform APIs to detect when a Screen Reader is attached.",
		"The editor will be permanently optimized for usage with a Screen Reader.",
		"The editor will never be optimized for usage with a Screen Reader.",
		"Controls whether the editor should run in a mode where it is optimized for screen readers.",
		"Controls whether the editor should detect links and make them clickable",
		"Controls whether the editor should render the inline color decorators and color picker.",
		"Controls if the diff editor shows the diff side by side or inline",
		"Controls if the diff editor shows changes in leading or trailing whitespace as diffs",
		"Controls if the diff editor shows +/- indicators for added/removed changes",
		"Controls if the Linux primary clipboard should be supported."
	],
	"vs/editor/common/config/editorOptions": [
		"The editor is not accessible at this time. Press Alt+F1 for options.",
		"Editor content"
	],
	"vs/editor/common/controller/cursor": [
		"Unexpected exception while executing command."
	],
	"vs/editor/common/model/textModelWithTokens": [
		"The mode has failed while tokenizing the input."
	],
	"vs/editor/common/modes/modesRegistry": [
		"Plain Text"
	],
	"vs/editor/common/services/bulkEdit": [
		"These files have changed in the meantime: {0}",
		"Made no edits",
		"Made {0} text edits in {1} files",
		"Made {0} text edits in one file"
	],
	"vs/editor/common/services/modelServiceImpl": [
		"[{0}]\n{1}",
		"[{0}] {1}"
	],
	"vs/editor/common/view/editorColorRegistry": [
		"Background color for the highlight of line at the cursor position.",
		"Background color for the border around the line at the cursor position.",
		"Background color of highlighted ranges, like by quick open and find features.",
		"Color of the editor cursor.",
		"The background color of the editor cursor. Allows customizing the color of a character overlapped by a block cursor.",
		"Color of whitespace characters in the editor.",
		"Color of the editor indentation guides.",
		"Color of editor line numbers.",
		"Color of the editor rulers.",
		"Foreground color of editor code lenses",
		"Background color behind matching brackets",
		"Color for matching brackets boxes",
		"Color of the overview ruler border.",
		"Background color of the editor gutter. The gutter contains the glyph margins and the line numbers.",
		"Foreground color of error squigglies in the editor.",
		"Border color of error squigglies in the editor.",
		"Foreground color of warning squigglies in the editor.",
		"Border color of warning squigglies in the editor.",
		"Overview ruler marker color for range highlights.",
		"Overview ruler marker color for errors.",
		"Overview ruler marker color for warnings.",
		"Overview ruler marker color for infos."
	],
	"vs/editor/contrib/bracketMatching/common/bracketMatching": [
		"Go to Bracket"
	],
	"vs/editor/contrib/caretOperations/common/caretOperations": [
		"Move Caret Left",
		"Move Caret Right"
	],
	"vs/editor/contrib/caretOperations/common/transpose": [
		"Transpose Letters"
	],
	"vs/editor/contrib/clipboard/browser/clipboard": [
		"Cut",
		"Copy",
		"Paste",
		"Copy With Syntax Highlighting"
	],
	"vs/editor/contrib/comment/common/comment": [
		"Toggle Line Comment",
		"Add Line Comment",
		"Remove Line Comment",
		"Toggle Block Comment"
	],
	"vs/editor/contrib/contextmenu/browser/contextmenu": [
		"Show Editor Context Menu"
	],
	"vs/editor/contrib/find/browser/findWidget": [
		"Find",
		"Find",
		"Previous match",
		"Next match",
		"Find in selection",
		"Close",
		"Replace",
		"Replace",
		"Replace",
		"Replace All",
		"Toggle Replace mode",
		"Only the first 999 results are highlighted, but all find operations work on the entire text.",
		"{0} of {1}",
		"No Results"
	],
	"vs/editor/contrib/find/browser/simpleFindWidget": [
		"Find",
		"Find",
		"Previous match",
		"Next match",
		"Close"
	],
	"vs/editor/contrib/find/common/findController": [
		"Find",
		"Find Next",
		"Find Previous",
		"Find Next Selection",
		"Find Previous Selection",
		"Replace",
		"Add Selection To Next Find Match",
		"Add Selection To Previous Find Match",
		"Move Last Selection To Next Find Match",
		"Move Last Selection To Previous Find Match",
		"Select All Occurrences of Find Match",
		"Change All Occurrences",
		"Show Next Find Term",
		"Show Previous Find Term"
	],
	"vs/editor/contrib/folding/browser/folding": [
		"Unfold",
		"Unfold Recursively",
		"Fold",
		"Fold Recursively",
		"Fold All",
		"Unfold All",
		"Fold Level {0}"
	],
	"vs/editor/contrib/format/browser/formatActions": [
		"Made 1 formatting edit on line {0}",
		"Made {0} formatting edits on line {1}",
		"Made 1 formatting edit between lines {0} and {1}",
		"Made {0} formatting edits between lines {1} and {2}",
		"Format Document",
		"Format Selection"
	],
	"vs/editor/contrib/goToDeclaration/browser/goToDeclarationCommands": [
		"No definition found for '{0}'",
		"No definition found",
		" – {0} definitions",
		"Go to Definition",
		"Open Definition to the Side",
		"Peek Definition",
		"No implementation found for '{0}'",
		"No implementation found",
		" – {0} implementations",
		"Go to Implementation",
		"Peek Implementation",
		"No type definition found for '{0}'",
		"No type definition found",
		" – {0} type definitions",
		"Go to Type Definition",
		"Peek Type Definition"
	],
	"vs/editor/contrib/goToDeclaration/browser/goToDeclarationMouse": [
		"Click to show {0} definitions."
	],
	"vs/editor/contrib/gotoError/browser/gotoError": [
		"({0}/{1})",
		"Go to Next Error or Warning",
		"Go to Previous Error or Warning",
		"Editor marker navigation widget error color.",
		"Editor marker navigation widget warning color.",
		"Editor marker navigation widget background."
	],
	"vs/editor/contrib/hover/browser/hover": [
		"Show Hover"
	],
	"vs/editor/contrib/hover/browser/modesContentHover": [
		"Loading..."
	],
	"vs/editor/contrib/inPlaceReplace/common/inPlaceReplace": [
		"Replace with Previous Value",
		"Replace with Next Value"
	],
	"vs/editor/contrib/indentation/common/indentation": [
		"Convert Indentation to Spaces",
		"Convert Indentation to Tabs",
		"Configured Tab Size",
		"Select Tab Size for Current File",
		"Indent Using Tabs",
		"Indent Using Spaces",
		"Detect Indentation from Content",
		"Reindent Lines"
	],
	"vs/editor/contrib/linesOperations/common/linesOperations": [
		"Copy Line Up",
		"Copy Line Down",
		"Move Line Up",
		"Move Line Down",
		"Sort Lines Ascending",
		"Sort Lines Descending",
		"Trim Trailing Whitespace",
		"Delete Line",
		"Indent Line",
		"Outdent Line",
		"Insert Line Above",
		"Insert Line Below",
		"Delete All Left",
		"Delete All Right",
		"Join Lines",
		"Transpose characters around the cursor",
		"Transform to Uppercase",
		"Transform to Lowercase"
	],
	"vs/editor/contrib/links/browser/links": [
		"Cmd + click to follow link",
		"Ctrl + click to follow link",
		"Cmd + click to execute command",
		"Ctrl + click to execute command",
		"Alt + click to follow link",
		"Alt + click to execute command",
		"Sorry, failed to open this link because it is not well-formed: {0}",
		"Sorry, failed to open this link because its target is missing.",
		"Open Link"
	],
	"vs/editor/contrib/multicursor/common/multicursor": [
		"Add Cursor Above",
		"Add Cursor Below",
		"Add Cursors to Line Ends"
	],
	"vs/editor/contrib/parameterHints/browser/parameterHints": [
		"Trigger Parameter Hints"
	],
	"vs/editor/contrib/parameterHints/browser/parameterHintsWidget": [
		"{0}, hint"
	],
	"vs/editor/contrib/quickFix/browser/quickFixCommands": [
		"Show Fixes ({0})",
		"Show Fixes",
		"Quick Fix"
	],
	"vs/editor/contrib/referenceSearch/browser/referenceSearch": [
		" – {0} references",
		"Find All References"
	],
	"vs/editor/contrib/referenceSearch/browser/referencesController": [
		"Loading..."
	],
	"vs/editor/contrib/referenceSearch/browser/referencesModel": [
		"symbol in {0} on line {1} at column {2}",
		"1 symbol in {0}, full path {1}",
		"{0} symbols in {1}, full path {2}",
		"No results found",
		"Found 1 symbol in {0}",
		"Found {0} symbols in {1}",
		"Found {0} symbols in {1} files"
	],
	"vs/editor/contrib/referenceSearch/browser/referencesWidget": [
		"Failed to resolve file.",
		"{0} references",
		"{0} reference",
		"no preview available",
		"References",
		"No results",
		"References",
		"Background color of the peek view title area.",
		"Color of the peek view title.",
		"Color of the peek view title info.",
		"Color of the peek view borders and arrow.",
		"Background color of the peek view result list.",
		"Foreground color for line nodes in the peek view result list.",
		"Foreground color for file nodes in the peek view result list.",
		"Background color of the selected entry in the peek view result list.",
		"Foreground color of the selected entry in the peek view result list.",
		"Background color of the peek view editor.",
		"Background color of the gutter in the peek view editor.",
		"Match highlight color in the peek view result list.",
		"Match highlight color in the peek view editor."
	],
	"vs/editor/contrib/rename/browser/rename": [
		"No result.",
		"Successfully renamed '{0}' to '{1}'. Summary: {2}",
		"Sorry, rename failed to execute.",
		"Rename Symbol"
	],
	"vs/editor/contrib/rename/browser/renameInputField": [
		"Rename input. Type new name and press Enter to commit."
	],
	"vs/editor/contrib/smartSelect/common/smartSelect": [
		"Expand Select",
		"Shrink Select"
	],
	"vs/editor/contrib/suggest/browser/suggestController": [
		"Accepting '{0}' did insert the following text: {1}",
		"Trigger Suggest"
	],
	"vs/editor/contrib/suggest/browser/suggestWidget": [
		"Background color of the suggest widget.",
		"Border color of the suggest widget.",
		"Foreground color of the suggest widget.",
		"Background color of the selected entry in the suggest widget.",
		"Color of the match highlights in the suggest widget.",
		"Read More...{0}",
		"{0}, suggestion, has details",
		"{0}, suggestion",
		"Read less...{0}",
		"Loading...",
		"No suggestions.",
		"{0}, accepted",
		"{0}, suggestion, has details",
		"{0}, suggestion"
	],
	"vs/editor/contrib/toggleTabFocusMode/common/toggleTabFocusMode": [
		"Toggle Tab Key Moves Focus"
	],
	"vs/editor/contrib/wordHighlighter/common/wordHighlighter": [
		"Background color of a symbol during read-access, like reading a variable.",
		"Background color of a symbol during write-access, like writing to a variable.",
		"Overview ruler marker color for symbol highlights.",
		"Overview ruler marker color for write-access symbol highlights."
	],
	"vs/editor/contrib/zoneWidget/browser/peekViewWidget": [
		"Close"
	],
	"vs/platform/actions/browser/menuItemActionItem": [
		"{0} ({1})"
	],
	"vs/platform/actions/electron-browser/menusExtensionPoint": [
		"menu items must be an array",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` can be omitted or must be of type `string`",
		"property `{0}` can be omitted or must be of type `string`",
		"property `{0}` can be omitted or must be of type `string`",
		"Identifier of the command to execute. The command must be declared in the 'commands'-section",
		"Identifier of an alternative command to execute. The command must be declared in the 'commands'-section",
		"Condition which must be true to show this item",
		"Group into which this command belongs",
		"Contributes menu items to the editor",
		"The Command Palette",
		"The editor title menu",
		"The editor context menu",
		"The file explorer context menu",
		"The editor tabs context menu",
		"The debug callstack context menu",
		"The Source Control title menu",
		"The Source Control resource group context menu",
		"The Source Control resource state context menu",
		"The contributed view title menu",
		"The contributed view item context menu",
		"expected non-empty value.",
		"property `{0}` is mandatory and must be of type `string`",
		"property `icon` can be omitted or must be either a string or a literal like `{dark, light}`",
		"property `{0}` is mandatory and must be of type `string` or `object`",
		"property `{0}` is mandatory and must be of type `string`",
		"properties `{0}` and `{1}` are mandatory and must be of type `string`",
		"Identifier of the command to execute",
		"Title by which the command is represented in the UI",
		"(Optional) Category string by the command is grouped in the UI",
		"(Optional) Icon which is used to represent the command in the UI. Either a file path or a themable configuration",
		"Icon path when a light theme is used",
		"Icon path when a dark theme is used",
		"Contributes commands to the command palette.",
		"Command `{0}` appears multiple times in the `commands` section.",
		"`{0}` is not a valid menu identifier",
		"Menu item references a command `{0}` which is not defined in the 'commands' section.",
		"Menu item references an alt-command `{0}` which is not defined in the 'commands' section.",
		"Menu item references the same command as default and alt-command",
		"Sorry, but currently only the 'navigation' group of the 'editor/title' menu supports alt-commands"
	],
	"vs/platform/configuration/common/configurationRegistry": [
		"Default Configuration Overrides",
		"Configure editor settings to be overridden for {0} language.",
		"Configure editor settings to be overridden for a language.",
		"Cannot register '{0}'. This matches property pattern '\\\\[.*\\\\]$' for describing language specific editor settings. Use 'configurationDefaults' contribution.",
		"Cannot register '{0}'. This property is already registered."
	],
	"vs/platform/extensionManagement/common/extensionEnablementService": [
		"No workspace."
	],
	"vs/platform/extensionManagement/common/extensionManagement": [
		"Extensions",
		"Preferences"
	],
	"vs/platform/extensionManagement/node/extensionGalleryService": [
		"Extension not found",
		"Couldn't find a compatible version of {0} with this version of Code."
	],
	"vs/platform/extensions/common/extensionsRegistry": [
		"For VS Code extensions, specifies the VS Code version that the extension is compatible with. Cannot be *. For example: ^0.10.5 indicates compatibility with a minimum VS Code version of 0.10.5.",
		"The publisher of the VS Code extension.",
		"The display name for the extension used in the VS Code gallery.",
		"The categories used by the VS Code gallery to categorize the extension.",
		"Banner used in the VS Code marketplace.",
		"The banner color on the VS Code marketplace page header.",
		"The color theme for the font used in the banner.",
		"All contributions of the VS Code extension represented by this package.",
		"Sets the extension to be flagged as a Preview in the Marketplace.",
		"Activation events for the VS Code extension.",
		"An activation event emitted whenever a file that resolves to the specified language gets opened.",
		"An activation event emitted whenever the specified command gets invoked.",
		"An activation event emitted whenever a debug session of the specified type is started.",
		"An activation event emitted whenever a folder is opened that contains at least a file matching the specified glob pattern.",
		"An activation event emitted whenever the specified view is expanded.",
		"An activation event emitted on VS Code startup. To ensure a great end user experience, please use this activation event in your extension only when no other activation events combination works in your use-case.",
		"Array of badges to display in the sidebar of the Marketplace's extension page.",
		"Badge image URL.",
		"Badge link.",
		"Badge description.",
		"Dependencies to other extensions. The identifier of an extension is always ${publisher}.${name}. For example: vscode.csharp.",
		"Script executed before the package is published as a VS Code extension.",
		"The path to a 128x128 pixel icon."
	],
	"vs/platform/extensions/node/extensionValidator": [
		"Could not parse `engines.vscode` value {0}. Please use, for example: ^0.10.0, ^1.2.3, ^0.11.0, ^0.10.x, etc.",
		"Version specified in `engines.vscode` ({0}) is not specific enough. For vscode versions before 1.0.0, please define at a minimum the major and minor desired version. E.g. ^0.10.0, 0.10.x, 0.11.0, etc.",
		"Version specified in `engines.vscode` ({0}) is not specific enough. For vscode versions after 1.0.0, please define at a minimum the major desired version. E.g. ^1.10.0, 1.10.x, 1.x.x, 2.x.x, etc.",
		"Extension is not compatible with Code {0}. Extension requires: {1}.",
		"Got empty extension description",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` is mandatory and must be of type `object`",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` can be omitted or must be of type `string[]`",
		"property `{0}` can be omitted or must be of type `string[]`",
		"properties `{0}` and `{1}` must both be specified or must both be omitted",
		"property `{0}` can be omitted or must be of type `string`",
		"Expected `main` ({0}) to be included inside extension's folder ({1}). This might make the extension non-portable.",
		"properties `{0}` and `{1}` must both be specified or must both be omitted",
		"Extension version is not semver compatible."
	],
	"vs/platform/integrity/node/integrityServiceImpl": [
		"OK",
		"Don't show again",
		"More information",
		"Your {0} installation appears to be corrupt. Please reinstall."
	],
	"vs/platform/jsonschemas/common/jsonValidationExtensionPoint": [
		"Contributes json schema configuration.",
		"The file pattern to match, for example \"package.json\" or \"*.launch\".",
		"A schema URL ('http:', 'https:') or relative path to the extension folder ('./').",
		"'configuration.jsonValidation' must be a array",
		"'configuration.jsonValidation.fileMatch' must be defined",
		"'configuration.jsonValidation.url' must be a URL or relative path",
		"'configuration.jsonValidation.url' is an invalid relative URL: {0}",
		"'configuration.jsonValidation.url' must start with 'http:', 'https:' or './' to reference schemas located in the extension"
	],
	"vs/platform/keybinding/common/abstractKeybindingService": [
		"({0}) was pressed. Waiting for second key of chord...",
		"The key combination ({0}, {1}) is not a command."
	],
	"vs/platform/markers/common/problemMatcher": [
		"The loop property is only supported on the last line matcher.",
		"The problem pattern is missing a regular expression.",
		"The problem pattern is invalid. It must have at least a file, message and line or location match group.",
		"Error: The string {0} is not a valid regular expression.\n",
		"The regular expression to find an error, warning or info in the output.",
		"The match group index of the filename. If omitted 1 is used.",
		"The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.",
		"The match group index of the problem's line. Defaults to 2",
		"The match group index of the problem's line character. Defaults to 3",
		"The match group index of the problem's end line. Defaults to undefined",
		"The match group index of the problem's end line character. Defaults to undefined",
		"The match group index of the problem's severity. Defaults to undefined",
		"The match group index of the problem's code. Defaults to undefined",
		"The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.",
		"In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.",
		"The name of the problem pattern.",
		"The name of the problem multi line problem pattern.",
		"The actual patterns.",
		"Contributes problem patterns",
		"Invalid problem pattern. The pattern will be ignored.",
		"Invalid problem pattern. The pattern will be ignored.",
		"Error: the description can't be converted into a problem matcher:\n{0}\n",
		"Error: the description doesn't define a valid problem pattern:\n{0}\n",
		"Error: the description doesn't define an owner:\n{0}\n",
		"Error: the description doesn't define a file location:\n{0}\n",
		"Info: unknown severity {0}. Valid values are error, warning and info.\n",
		"Error: the pattern with the identifier {0} doesn't exist.",
		"Error: the pattern property refers to an empty identifier.",
		"Error: the pattern property {0} is not a valid pattern variable name.",
		"A problem matcher must define both a begin pattern and an end pattern for watching.",
		"Error: The string {0} is not a valid regular expression.\n",
		"The regular expression to detect the begin or end of a background task.",
		"The match group index of the filename. Can be omitted.",
		"The name of a contributed or predefined pattern",
		"A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.",
		"The name of a base problem matcher to use.",
		"The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.",
		"The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.",
		"Controls if a problem reported on a text document is applied only to open, closed or all documents.",
		"Defines how file names reported in a problem pattern should be interpreted.",
		"Patterns to track the begin and end of a matcher active on a background task.",
		"If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern",
		"If matched in the output the start of a background task is signaled.",
		"If matched in the output the end of a background task is signaled.",
		"The watching property is deprecated. Use background instead.",
		"Patterns to track the begin and end of a watching matcher.",
		"If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern",
		"If matched in the output the start of a watching task is signaled.",
		"If matched in the output the end of a watching task is signaled.",
		"This property is deprecated. Use the watching property instead.",
		"A regular expression signaling that a watched tasks begins executing triggered through file watching.",
		"This property is deprecated. Use the watching property instead.",
		"A regular expression signaling that a watched tasks ends executing.",
		"The name of the problem matcher used to refer to it.",
		"A human readable label of the problem matcher.",
		"Contributes problem matchers",
		"Microsoft compiler problems",
		"Less problems",
		"Gulp TSC Problems",
		"JSHint problems",
		"JSHint stylish problems",
		"ESLint compact problems",
		"ESLint stylish problems",
		"Go problems"
	],
	"vs/platform/message/common/message": [
		"Close",
		"Later",
		"Cancel"
	],
	"vs/platform/request/node/request": [
		"HTTP",
		"The proxy setting to use. If not set will be taken from the http_proxy and https_proxy environment variables",
		"Whether the proxy server certificate should be verified against the list of supplied CAs.",
		"The value to send as the 'Proxy-Authorization' header for every network request."
	],
	"vs/platform/telemetry/common/telemetryService": [
		"Telemetry",
		"Enable usage data and errors to be sent to Microsoft."
	],
	"vs/platform/theme/common/colorExtensionPoint": [
		"Contributes extension defined themable colors",
		"The identifier of the themable color",
		"Identifiers should be in the form aa[.bb]*",
		"The description of the themable color",
		"The default color for light themes. Either a color value in hex (#RRGGBB[AA]) or the identifier of a themable color which provides the default.",
		"The default color for dark themes. Either a color value in hex (#RRGGBB[AA]) or the identifier of a themable color which provides the default.",
		"The default color for high contrast themes. Either a color value in hex (#RRGGBB[AA]) or the identifier of a themable color which provides the default.",
		"'configuration.colors' must be a array",
		"{0} must be either a color value in hex (#RRGGBB[AA] or #RGB[A]) or the identifier of a themable color which provides the default.",
		"'configuration.colors.id' must be defined an can not be empty",
		"'configuration.colors.id' must follow the word[.word]*",
		"'configuration.colors.description' must be defined an can not be empty",
		"'configuration.colors.defaults' must be defined and must contain 'light', 'dark' and 'highContrast'"
	],
	"vs/platform/theme/common/colorRegistry": [
		"Invalid color format. Use #RGB, #RGBA, #RRGGBB or #RRGGBBAA",
		"Colors used in the workbench.",
		"Overall foreground color. This color is only used if not overridden by a component.",
		"Overall foreground color for error messages. This color is only used if not overridden by a component.",
		"Foreground color for description text providing additional information, for example for a label.",
		"Overall border color for focused elements. This color is only used if not overridden by a component.",
		"An extra border around elements to separate them from others for greater contrast.",
		"An extra border around active elements to separate them from others for greater contrast.",
		"The background color of text selections in the workbench (e.g. for input fields or text areas). Note that this does not apply to selections within the editor.",
		"Color for text separators.",
		"Foreground color for links in text.",
		"Foreground color for active links in text.",
		"Foreground color for preformatted text segments.",
		"Background color for block quotes in text.",
		"Border color for block quotes in text.",
		"Background color for code blocks in text.",
		"Shadow color of widgets such as find/replace inside the editor.",
		"Input box background.",
		"Input box foreground.",
		"Input box border.",
		"Border color of activated options in input fields.",
		"Input box foreground color for placeholder text.",
		"Input validation background color for information severity.",
		"Input validation border color for information severity.",
		"Input validation background color for information warning.",
		"Input validation border color for warning severity.",
		"Input validation background color for error severity.",
		"Input validation border color for error severity.",
		"Dropdown background.",
		"Dropdown foreground.",
		"Dropdown border.",
		"List/Tree background color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.",
		"List/Tree foreground color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.",
		"List/Tree background color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.",
		"List/Tree foreground color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.",
		"List/Tree background color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.",
		"List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.",
		"List/Tree background color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.",
		"List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.",
		"List/Tree background when hovering over items using the mouse.",
		"List/Tree foreground when hovering over items using the mouse.",
		"List/Tree drag and drop background when moving items around using the mouse.",
		"List/Tree foreground color of the match highlights when searching inside the list/tree.",
		"Quick picker color for grouping labels.",
		"Quick picker color for grouping borders.",
		"Button foreground color.",
		"Button background color.",
		"Button background color when hovering.",
		"Badge background color. Badges are small information labels, e.g. for search results count.",
		"Badge foreground color. Badges are small information labels, e.g. for search results count.",
		"Scrollbar shadow to indicate that the view is scrolled.",
		"Scrollbar slider background color.",
		"Scrollbar slider background color when hovering.",
		"Scrollbar slider background color when active.",
		"Background color of the progress bar that can show for long running operations.",
		"Editor background color.",
		"Editor default foreground color.",
		"Background color of editor widgets, such as find/replace.",
		"Border color of editor widgets. The color is only used if the widget chooses to have a border and if the color is not overridden by a widget.",
		"Color of the editor selection.",
		"Color of the selected text for high contrast.",
		"Color of the selection in an inactive editor.",
		"Color for regions with the same content as the selection.",
		"Color of the current search match.",
		"Color of the other search matches.",
		"Color the range limiting the search.",
		"Highlight below the word for which a hover is shown.",
		"Background color of the editor hover.",
		"Border color of the editor hover.",
		"Color of active links.",
		"Background color for text that got inserted.",
		"Background color for text that got removed.",
		"Outline color for the text that got inserted.",
		"Outline color for text that got removed.",
		"Current header background in inline merge-conflicts.",
		"Current content background in inline merge-conflicts.",
		"Incoming header background in inline merge-conflicts.",
		"Incoming content background in inline merge-conflicts.",
		"Common ancestor header background in inline merge-conflicts.",
		"Common ancester content background in inline merge-conflicts.",
		"Border color on headers and the splitter in inline merge-conflicts.",
		"Current overview ruler foreground for inline merge-conflicts.",
		"Incoming overview ruler foreground for inline merge-conflicts.",
		"Common ancestor overview ruler foreground for inline merge-conflicts.",
		"Overview ruler marker color for find matches.",
		"Overview ruler marker color for selection highlights."
	],
	"vs/platform/workspaces/common/workspaces": [
		"Code Workspace",
		"Untitled (Workspace)",
		"{0} (Workspace)",
		"{0} (Workspace)"
	],
	"vs/workbench/api/electron-browser/mainThreadMessageService": [
		"Close",
		"Cancel",
		"OK"
	],
	"vs/workbench/browser/actions/configureLocale": [
		"Configure Language",
		"Defines VSCode's display language.",
		"See {0} for a list of supported languages.",
		"Changing the value requires restarting VSCode.",
		"Unable to create '{0}' ({1}).",
		"The UI Language to use."
	],
	"vs/workbench/browser/actions/toggleActivityBarVisibility": [
		"Toggle Activity Bar Visibility",
		"View"
	],
	"vs/workbench/browser/actions/toggleEditorLayout": [
		"Toggle Editor Group Vertical/Horizontal Layout",
		"Horizontal Editor Group Layout",
		"Vertical Editor Group Layout",
		"View"
	],
	"vs/workbench/browser/actions/toggleSidebarPosition": [
		"Toggle Side Bar Location",
		"View"
	],
	"vs/workbench/browser/actions/toggleSidebarVisibility": [
		"Toggle Side Bar Visibility",
		"View"
	],
	"vs/workbench/browser/actions/toggleStatusbarVisibility": [
		"Toggle Status Bar Visibility",
		"View"
	],
	"vs/workbench/browser/actions/toggleZenMode": [
		"Toggle Zen Mode",
		"View"
	],
	"vs/workbench/browser/actions/workspaceActions": [
		"Open Folder...",
		"Open...",
		"Add Folder to Workspace...",
		"&&Add",
		"Add Folder to Workspace",
		"New Workspace...",
		"&&Select",
		"Select Folders for Workspace",
		"Remove Folder from Workspace",
		"Save Workspace As...",
		"Please open a workspace first to save.",
		"&&Save",
		"Save Workspace",
		"Open Workspace...",
		"Open Workspace Configuration File"
	],
	"vs/workbench/browser/parts/activitybar/activitybarActions": [
		"Remove from Activity Bar",
		"Keep in Activity Bar",
		"{0} ({1})",
		"Additional Views",
		"{0} ({1})",
		"Manage Extension",
		"Toggle View Pinned"
	],
	"vs/workbench/browser/parts/activitybar/activitybarPart": [
		"Hide Activity Bar",
		"Active View Switcher",
		"Global Actions"
	],
	"vs/workbench/browser/parts/compositePart": [
		"{0} actions",
		"{0} ({1})"
	],
	"vs/workbench/browser/parts/editor/binaryDiffEditor": [
		"{0} ↔ {1}"
	],
	"vs/workbench/browser/parts/editor/binaryEditor": [
		"Binary Viewer"
	],
	"vs/workbench/browser/parts/editor/editor.contribution": [
		"Text Editor",
		"Text Diff Editor",
		"Binary Diff Editor",
		"Side by Side Editor",
		"Show Editors in First Group",
		"Show Editors in Second Group",
		"Show Editors in Third Group",
		"Show All Opened Editors",
		"View"
	],
	"vs/workbench/browser/parts/editor/editorActions": [
		"Split Editor",
		"Join Editors of Two Groups",
		"Navigate Between Editor Groups",
		"Focus Active Editor Group",
		"Focus First Editor Group",
		"Focus Second Editor Group",
		"Focus Third Editor Group",
		"Focus Previous Group",
		"Focus Next Group",
		"Open to the Side",
		"Close Editor",
		"Revert and Close Editor",
		"Close Editors to the Left",
		"Close Editors to the Right",
		"Close All Editors",
		"Close Unmodified Editors in Group",
		"Close Editors in Other Groups",
		"Close Other Editors",
		"Close All Editors in Group",
		"Move Editor Group Left",
		"Move Editor Group Right",
		"Minimize Other Editor Groups",
		"Even Editor Group Widths",
		"Maximize Editor Group and Hide Sidebar",
		"Keep Editor",
		"Open Next Editor",
		"Open Previous Editor",
		"Open Next Editor in Group",
		"Open Previous Editor in Group",
		"Go Forward",
		"Go Back",
		"Reopen Closed Editor",
		"Clear Recently Opened",
		"Show Editors in First Group",
		"Show Editors in Second Group",
		"Show Editors in Third Group",
		"Show Editors in Group",
		"Show All Editors",
		"Open Previous Recently Used Editor in Group",
		"Open Next Recently Used Editor in Group",
		"Open Previous Editor from History",
		"Open Next Recently Used Editor",
		"Open Previous Recently Used Editor",
		"Clear Editor History",
		"Open Last Editor in Group",
		"Move Editor Left",
		"Move Editor Right",
		"Move Editor into Previous Group",
		"Move Editor into Next Group"
	],
	"vs/workbench/browser/parts/editor/editorCommands": [
		"Move the active editor by tabs or groups",
		"Active editor move argument",
		"Argument Properties:\n\t\t\t\t\t\t* 'to': String value providing where to move.\n\t\t\t\t\t\t* 'by': String value providing the unit for move. By tab or by group.\n\t\t\t\t\t\t* 'value': Number value providing how many positions or an absolute position to move.\n\t\t\t\t\t",
		"Command **{0}** has been removed. You can use **{1}** instead",
		"Configure Keyboard Shortcuts"
	],
	"vs/workbench/browser/parts/editor/editorPart": [
		"Left",
		"Center",
		"Right",
		"Top",
		"Center",
		"Bottom",
		"Unable to open '{0}': {1}."
	],
	"vs/workbench/browser/parts/editor/editorPicker": [
		"{0}, editor group picker",
		"Group: {0}",
		"No matching opened editor found in group",
		"List of opened editors is currently empty in group",
		"No matching opened editor found",
		"List of opened editors is currently empty"
	],
	"vs/workbench/browser/parts/editor/editorStatus": [
		"Ln {0}, Col {1} ({2} selected)",
		"Ln {0}, Col {1}",
		"{0} selections ({1} characters selected)",
		"{0} selections",
		"LF",
		"CRLF",
		"Tab Moves Focus",
		"Screen Reader Detected",
		"If you are not using a Screen Reader, please change the setting `editor.accessibilitySupport` to \"off\".",
		"Disable Accessibility Mode",
		"Go to Line",
		"Indentation",
		"Select Encoding",
		"Select End of Line Sequence",
		"Select Language Mode",
		"File Information",
		"Spaces: {0}",
		"Tab Size: {0}",
		"Search Marketplace Extensions for '{0}'...",
		"Change Language Mode",
		"No text editor active at this time",
		"({0}) - Configured Language",
		"({0})",
		"languages (identifier)",
		"Configure '{0}' language based settings...",
		"Configure File Association for '{0}'...",
		"Auto Detect",
		"Select Language Mode",
		"Current Association",
		"Select Language Mode to Associate with '{0}'",
		"Change Indentation",
		"No text editor active at this time",
		"The active code editor is read-only.",
		"change view",
		"convert file",
		"Select Action",
		"Change End of Line Sequence",
		"No text editor active at this time",
		"The active code editor is read-only.",
		"Select End of Line Sequence",
		"Change File Encoding",
		"No text editor active at this time",
		"No file active at this time",
		"Save with Encoding",
		"Reopen with Encoding",
		"Save with Encoding",
		"Reopen with Encoding",
		"Select Action",
		"Guessed from content",
		"Select File Encoding to Reopen File",
		"Select File Encoding to Save with"
	],
	"vs/workbench/browser/parts/editor/tabsTitleControl": [
		"Tab actions"
	],
	"vs/workbench/browser/parts/editor/textDiffEditor": [
		"Text Diff Editor",
		"{0}. Readonly text compare editor.",
		"Readonly text compare editor.",
		"{0}. Text file compare editor.",
		"Text file compare editor.",
		"Next Change",
		"Previous Change",
		"Switch to Inline View",
		"Switch to Side by Side View"
	],
	"vs/workbench/browser/parts/editor/textEditor": [
		"{0}, Group {1}."
	],
	"vs/workbench/browser/parts/editor/textResourceEditor": [
		"Text Editor",
		"{0}. Readonly text editor.",
		"Readonly text editor.",
		"{0}. Untitled file text editor.",
		"Untitled file text editor."
	],
	"vs/workbench/browser/parts/editor/titleControl": [
		"Close",
		"Close Others",
		"Close to the Right",
		"Close All",
		"Close Unmodified",
		"Keep Open",
		"Show Opened Editors",
		"Editor actions"
	],
	"vs/workbench/browser/parts/panel/panelActions": [
		"{0} ({1})",
		"Close Panel",
		"Toggle Panel",
		"Focus into Panel",
		"Toggle Maximized Panel",
		"Maximize Panel Size",
		"Restore Panel Size",
		"View",
		"View",
		"View",
		"View"
	],
	"vs/workbench/browser/parts/panel/panelPart": [
		"Active Panel Switcher"
	],
	"vs/workbench/browser/parts/quickopen/quickOpenController": [
		"{0} (Press 'Enter' to confirm or 'Escape' to cancel)",
		"Press 'Enter' to confirm your input or 'Escape' to cancel",
		"There are no entries to pick from",
		"Type '?' to get help on the actions you can take from here",
		"recently opened",
		"recently opened",
		"No results found",
		"This quick open handler can not be used in the current context",
		"{0}, recently opened",
		"Remove From History",
		"Select an editor entry to remove from history"
	],
	"vs/workbench/browser/parts/quickopen/quickopen": [
		"Go to File...",
		"Navigate Next in Quick Open",
		"Navigate Previous in Quick Open",
		"Select Next in Quick Open",
		"Select Previous in Quick Open"
	],
	"vs/workbench/browser/parts/sidebar/sidebarPart": [
		"Hide Side Bar",
		"Focus into Side Bar",
		"View"
	],
	"vs/workbench/browser/parts/statusbar/statusbarPart": [
		"Command '{0}' is currently not enabled and can not be run.",
		"Manage Extension"
	],
	"vs/workbench/browser/parts/titlebar/titlebarPart": [
		"[Unsupported]",
		"[Extension Development Host]"
	],
	"vs/workbench/browser/quickopen": [
		"No results matching",
		"No results found",
		"{0}, command"
	],
	"vs/workbench/browser/viewlet": [
		"Collapse All"
	],
	"vs/workbench/common/theme": [
		"Active tab background color. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.",
		"Inactive tab background color. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.",
		"Border to separate tabs from each other. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.",
		"Border to highlight active tabs. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.",
		"Border to highlight active tabs in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.",
		"Active tab foreground color in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.",
		"Inactive tab foreground color in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.",
		"Active tab foreground color in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.",
		"Inactive tab foreground color in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.",
		"Background color of an editor group. Editor groups are the containers of editors. The background color shows up when dragging editor groups around.",
		"Background color of the editor group title header when tabs are enabled. Editor groups are the containers of editors.",
		"Border color of the editor group title header when tabs are enabled. Editor groups are the containers of editors.",
		"Background color of the editor group title header when tabs are disabled. Editor groups are the containers of editors.",
		"Color to separate multiple editor groups from each other. Editor groups are the containers of editors.",
		"Background color when dragging editors around. The color should have transparency so that the editor contents can still shine through.",
		"Panel background color. Panels are shown below the editor area and contain views like output and integrated terminal.",
		"Panel border color on the top separating to the editor. Panels are shown below the editor area and contain views like output and integrated terminal.",
		"Title color for the active panel. Panels are shown below the editor area and contain views like output and integrated terminal.",
		"Title color for the inactive panel. Panels are shown below the editor area and contain views like output and integrated terminal.",
		"Border color for the active panel title. Panels are shown below the editor area and contain views like output and integrated terminal.",
		"Status bar foreground color when a workspace is opened. The status bar is shown in the bottom of the window.",
		"Status bar foreground color when no folder is opened. The status bar is shown in the bottom of the window.",
		"Status bar background color when a workspace is opened. The status bar is shown in the bottom of the window.",
		"Status bar background color when no folder is opened. The status bar is shown in the bottom of the window.",
		"Status bar border color separating to the sidebar and editor. The status bar is shown in the bottom of the window.",
		"Status bar border color separating to the sidebar and editor when no folder is opened. The status bar is shown in the bottom of the window.",
		"Status bar item background color when clicking. The status bar is shown in the bottom of the window.",
		"Status bar item background color when hovering. The status bar is shown in the bottom of the window.",
		"Status bar prominent items background color. Prominent items stand out from other status bar entries to indicate importance. The status bar is shown in the bottom of the window.",
		"Status bar prominent items background color when hovering. Prominent items stand out from other status bar entries to indicate importance. The status bar is shown in the bottom of the window.",
		"Activity bar background color. The activity bar is showing on the far left or right and allows to switch between views of the side bar.",
		"Activity bar foreground color (e.g. used for the icons). The activity bar is showing on the far left or right and allows to switch between views of the side bar.",
		"Activity bar border color separating to the side bar. The activity bar is showing on the far left or right and allows to switch between views of the side bar.",
		"Drag and drop feedback color for the activity bar items. The color should have transparency so that the activity bar entries can still shine through. The activity bar is showing on the far left or right and allows to switch between views of the side bar.",
		"Activity notification badge background color. The activity bar is showing on the far left or right and allows to switch between views of the side bar.",
		"Activity notification badge foreground color. The activity bar is showing on the far left or right and allows to switch between views of the side bar.",
		"Side bar background color. The side bar is the container for views like explorer and search.",
		"Side bar foreground color. The side bar is the container for views like explorer and search.",
		"Side bar border color on the side separating to the editor. The side bar is the container for views like explorer and search.",
		"Side bar title foreground color. The side bar is the container for views like explorer and search.",
		"Drag and drop feedback color for the side bar sections. The color should have transparency so that the side bar sections can still shine through. The side bar is the container for views like explorer and search.",
		"Side bar section header background color. The side bar is the container for views like explorer and search.",
		"Side bar section header foreground color. The side bar is the container for views like explorer and search.",
		"Title bar foreground when the window is active. Note that this color is currently only supported on macOS.",
		"Title bar foreground when the window is inactive. Note that this color is currently only supported on macOS.",
		"Title bar background when the window is active. Note that this color is currently only supported on macOS.",
		"Title bar background when the window is inactive. Note that this color is currently only supported on macOS.",
		"Title bar border color. Note that this color is currently only supported on macOS.",
		"Notifications foreground color. Notifications slide in from the top of the window.",
		"Notifications background color. Notifications slide in from the top of the window.",
		"Notifications button background color. Notifications slide in from the top of the window.",
		"Notifications button background color when hovering. Notifications slide in from the top of the window.",
		"Notifications button foreground color. Notifications slide in from the top of the window.",
		"Notifications info background color. Notifications slide in from the top of the window.",
		"Notifications info foreground color. Notifications slide in from the top of the window.",
		"Notifications warning background color. Notifications slide in from the top of the window.",
		"Notifications warning foreground color. Notifications slide in from the top of the window.",
		"Notifications error background color. Notifications slide in from the top of the window.",
		"Notifications error foreground color. Notifications slide in from the top of the window."
	],
	"vs/workbench/electron-browser/actions": [
		"Close Editor",
		"Close Window",
		"Close Workspace",
		"There is currently no workspace opened in this instance to close.",
		"New Window",
		"Toggle Full Screen",
		"Toggle Menu Bar",
		"Toggle Developer Tools",
		"Zoom In",
		"Zoom Out",
		"Reset Zoom",
		"Startup Performance",
		"Reload Window",
		"Select a window to switch to",
		"Current Window",
		"Close Window",
		"Switch Window...",
		"Quick Switch Window...",
		"workspaces",
		"files",
		"Select to open (hold Cmd-key to open in new window)",
		"Select to open (hold Ctrl-key to open in new window)",
		"Remove from Recently Opened",
		"Open Recent...",
		"Quick Open Recent...",
		"Close Notification Messages",
		"Report Issues",
		"Report Performance Issue",
		"Keyboard Shortcuts Reference",
		"Documentation",
		"Introductory Videos",
		"Tips and Tricks",
		"Toggle Shared Process",
		"Navigate to the View on the Left",
		"Navigate to the View on the Right",
		"Navigate to the View Above",
		"Navigate to the View Below",
		"Increase Current View Size",
		"Decrease Current View Size"
	],
	"vs/workbench/electron-browser/commands": [
		"{0} ⟷ {1}"
	],
	"vs/workbench/electron-browser/main": [
		"Failed to load a required file. Either you are no longer connected to the internet or the server you are connected to is offline. Please refresh the browser to try again.",
		"Failed to load a required file. Please restart the application to try again. Details: {0}"
	],
	"vs/workbench/electron-browser/main.contribution": [
		"View",
		"Help",
		"File",
		"Workspaces",
		"Developer",
		"Controls if opened editors should show in tabs or not.",
		"Controls the position of the editor's tabs close buttons or disables them when set to 'off'.",
		"Controls if opened editors should show with an icon or not. This requires an icon theme to be enabled as well.",
		"Controls if opened editors show as preview. Preview editors are reused until they are kept (e.g. via double click or editing).",
		"Controls if opened editors from Quick Open show as preview. Preview editors are reused until they are kept (e.g. via double click or editing).",
		"Controls where editors open. Select 'left' or 'right' to open editors to the left or right of the current active one. Select 'first' or 'last' to open editors independently from the currently active one.",
		"Controls if an editor is revealed in any of the visible groups if opened. If disabled, an editor will prefer to open in the currently active editor group. If enabled, an already opened editor will be revealed instead of opened again in the currently active editor group. Note that there are some cases where this setting is ignored, e.g. when forcing an editor to open in a specific group or to the side of the currently active group.",
		"Controls if the number of recently used commands to keep in history for the command palette. Set to 0 to disable command history.",
		"Controls if the last typed input to the command palette should be restored when opening it the next time.",
		"Controls if Quick Open should close automatically once it loses focus.",
		"Controls if opening settings also opens an editor showing all default settings.",
		"Controls the location of the sidebar. It can either show on the left or right of the workbench.",
		"Controls the visibility of the status bar at the bottom of the workbench.",
		"Controls the visibility of the activity bar in the workbench.",
		"Controls if editors showing a file should close automatically when the file is deleted or renamed by some other process. Disabling this will keep the editor open as dirty on such an event. Note that deleting from within the application will always close the editor and that dirty files will never close to preserve your data.",
		"Controls font aliasing method in the workbench.\n- default: Sub-pixel font smoothing. On most non-retina displays this will give the sharpest text\n- antialiased: Smooth the font on the level of the pixel, as opposed to the subpixel. Can make the font appear lighter overall\n- none: Disables font smoothing. Text will show with jagged sharp edges",
		"Sub-pixel font smoothing. On most non-retina displays this will give the sharpest text.",
		"Smooth the font on the level of the pixel, as opposed to the subpixel. Can make the font appear lighter overall.",
		"Disables font smoothing. Text will show with jagged sharp edges.",
		"Navigate between open files using three-finger swipe horizontally.",
		"Workbench",
		"Files will open in a new window",
		"Files will open in the window with the files' folder open or the last active window",
		"Files will open in the window with the files' folder open or the last active window unless opened via the dock or from finder (macOS only)",
		"Controls if files should open in a new window.\n- default: files will open in the window with the files' folder open or the last active window unless opened via the dock or from finder (macOS only)\n- on: files will open in a new window\n- off: files will open in the window with the files' folder open or the last active window\nNote that there can still be cases where this setting is ignored (e.g. when using the -new-window or -reuse-window command line option).",
		"Folders will open in a new window",
		"Folders will replace the last active window",
		"Folders will open in a new window unless a folder is picked from within the application (e.g. via the File menu)",
		"Controls if folders should open in a new window or replace the last active window.\n- default: folders will open in a new window unless a folder is picked from within the application (e.g. via the File menu)\n- on: folders will open in a new window\n- off: folders will replace the last active window\nNote that there can still be cases where this setting is ignored (e.g. when using the -new-window or -reuse-window command line option).",
		"Reopen all windows.",
		"Reopen all folders. Empty workspaces will not be restored.",
		"Reopen the last active window.",
		"Never reopen a window. Always start with an empty one.",
		"Controls how windows are being reopened after a restart. Select 'none' to always start with an empty workspace, 'one' to reopen the last window you worked on, 'folders' to reopen all windows that had folders opened or 'all' to reopen all windows of your last session.",
		"Controls if a window should restore to full screen mode if it was exited in full screen mode.",
		"Adjust the zoom level of the window. The original size is 0 and each increment above (e.g. 1) or below (e.g. -1) represents zooming 20% larger or smaller. You can also enter decimals to adjust the zoom level with a finer granularity.",
		"Controls the window title based on the active editor. Variables are substituted based on the context:\n${activeEditorShort}: e.g. myFile.txt\n${activeEditorMedium}: e.g. myFolder/myFile.txt\n${activeEditorLong}: e.g. /Users/Development/myProject/myFolder/myFile.txt\n${folderName}: e.g. myFolder\n${folderPath}: e.g. /Users/Development/myFolder\n${rootName}: e.g. myFolder1, myFolder2, myFolder3\n${rootPath}: e.g. /Users/Development/myWorkspace\n${appName}: e.g. VS Code\n${dirty}: a dirty indicator if the active editor is dirty\n${separator}: a conditional separator (\" - \") that only shows when surrounded by variables with values",
		"Open new windows in the center of the screen.",
		"Open new windows with same dimension as last active one.",
		"Open new windows maximized.",
		"Open new windows in full screen mode.",
		"Controls the dimensions of opening a new window when at least one window is already opened. By default, a new window will open in the center of the screen with small dimensions. When set to 'inherit', the window will get the same dimensions as the last window that was active. When set to 'maximized', the window will open maximized and fullscreen if configured to 'fullscreen'. Note that this setting does not have an impact on the first window that is opened. The first window will always restore the size and location as you left it before closing.",
		"Controls if closing the last editor should also close the window. This setting only applies for windows that do not show folders.",
		"Menu is only hidden in full screen mode.",
		"Menu is always visible even in full screen mode.",
		"Menu is hidden but can be displayed via Alt key.",
		"Menu is always hidden.",
		"Control the visibility of the menu bar. A setting of 'toggle' means that the menu bar is hidden and a single press of the Alt key will show it. By default, the menu bar will be visible, unless the window is full screen.",
		"If enabled, the main menus can be opened via Alt-key shortcuts. Disabling mnemonics allows to bind these Alt-key shortcuts to editor commands instead.",
		"If enabled, will automatically change to high contrast theme if Windows is using a high contrast theme, and to dark theme when switching away from a Windows high contrast theme.",
		"Adjust the appearance of the window title bar. Changes require a full restart to apply.",
		"Enables macOS Sierra window tabs. Note that changes require a full restart to apply and that native tabs will disable a custom title bar style if configured.",
		"Window",
		"Zen Mode",
		"Controls if turning on Zen Mode also puts the workbench into full screen mode.",
		"Controls if turning on Zen Mode also hides workbench tabs.",
		"Controls if turning on Zen Mode also hides the status bar at the bottom of the workbench.",
		"Controls if turning on Zen Mode also hides the activity bar at the left of the workbench.",
		"Controls if a window should restore to zen mode if it was exited in zen mode."
	],
	"vs/workbench/electron-browser/shell": [
		"It is recommended not to run Code as 'root'."
	],
	"vs/workbench/electron-browser/window": [
		"Undo",
		"Redo",
		"Cut",
		"Copy",
		"Paste",
		"Select All"
	],
	"vs/workbench/electron-browser/workbench": [
		"Developer",
		"File"
	],
	"vs/workbench/parts/cli/electron-browser/cli.contribution": [
		"Install '{0}' command in PATH",
		"This command is not available",
		"Shell command '{0}' successfully installed in PATH.",
		"Code will now prompt with 'osascript' for Administrator privileges to install the shell command.",
		"OK",
		"Unable to create '/usr/local/bin'.",
		"Cancel",
		"Aborted",
		"Uninstall '{0}' command from PATH",
		"This command is not available",
		"Shell command '{0}' successfully uninstalled from PATH.",
		"Shell Command"
	],
	"vs/workbench/parts/codeEditor/electron-browser/accessibility": [
		"Now changing the setting `editor.accessibilitySupport` to 'on'.",
		"Now opening the VS Code Accessibility documentation page.",
		"Thank you for trying out VS Code's accessibility options.",
		"Status:",
		"To configure the editor to be permanently optimized for usage with a Screen Reader press Command+E now.",
		"To configure the editor to be permanently optimized for usage with a Screen Reader press Control+E now.",
		"The editor is configured to use platform APIs to detect when a Screen Reader is attached, but the current runtime does not support this.",
		"The editor has automatically detected a Screen Reader is attached.",
		"The editor is configured to automatically detect when a Screen Reader is attached, which is not the case at this time.",
		"The editor is configured to be permanently optimized for usage with a Screen Reader - you can change this by editing the setting `editor.accessibilitySupport`.",
		"The editor is configured to never be optimized for usage with a Screen Reader.",
		"Pressing Tab in the current editor will move focus to the next focusable element. Toggle this behavior by pressing {0}.",
		"Pressing Tab in the current editor will move focus to the next focusable element. The command {0} is currently not triggerable by a keybinding.",
		"Pressing Tab in the current editor will insert the tab character. Toggle this behavior by pressing {0}.",
		"Pressing Tab in the current editor will insert the tab character. The command {0} is currently not triggerable by a keybinding.",
		"Press Command+H now to open a browser window with more VS Code information related to Accessibility.",
		"Press Control+H now to open a browser window with more VS Code information related to Accessibility.",
		"You can dismiss this tooltip and return to the editor by pressing Escape or Shift+Escape.",
		"Show Accessibility Help"
	],
	"vs/workbench/parts/codeEditor/electron-browser/inspectKeybindings": [
		"Developer: Inspect Key Mappings"
	],
	"vs/workbench/parts/codeEditor/electron-browser/languageConfiguration/languageConfigurationExtensionPoint": [
		"Errors parsing {0}: {1}",
		"The opening bracket character or string sequence.",
		"The closing bracket character or string sequence.",
		"Defines the comment symbols",
		"Defines how block comments are marked.",
		"The character sequence that starts a block comment.",
		"The character sequence that ends a block comment.",
		"The character sequence that starts a line comment.",
		"Defines the bracket symbols that increase or decrease the indentation.",
		"Defines the bracket pairs. When a opening bracket is entered, the closing bracket is inserted automatically.",
		"Defines a list of scopes where the auto pairs are disabled.",
		"Defines the bracket pairs that can be used to surround a selected string.",
		"The word definition for the language.",
		"The RegExp pattern used to match words.",
		"The RegExp flags used to match words.",
		"Must match the pattern `/^([gimuy]+)$/`.",
		"The language's indentation settings.",
		"If a line matches this pattern, then all the lines after it should be indented once (until another rule matches).",
		"The RegExp pattern for increaseIndentPattern.",
		"The RegExp flags for increaseIndentPattern.",
		"Must match the pattern `/^([gimuy]+)$/`.",
		"If a line matches this pattern, then all the lines after it should be unindendented once (until another rule matches).",
		"The RegExp pattern for decreaseIndentPattern.",
		"The RegExp flags for decreaseIndentPattern.",
		"Must match the pattern `/^([gimuy]+)$/`.",
		"If a line matches this pattern, then **only the next line** after it should be indented once.",
		"The RegExp pattern for indentNextLinePattern.",
		"The RegExp flags for indentNextLinePattern.",
		"Must match the pattern `/^([gimuy]+)$/`.",
		"If a line matches this pattern, then its indentation should not be changed and it should not be evaluated against the other rules.",
		"The RegExp pattern for unIndentedLinePattern.",
		"The RegExp flags for unIndentedLinePattern.",
		"Must match the pattern `/^([gimuy]+)$/`."
	],
	"vs/workbench/parts/codeEditor/electron-browser/textMate/inspectTMScopes": [
		"Developer: Inspect TM Scopes",
		"Loading..."
	],
	"vs/workbench/parts/codeEditor/electron-browser/toggleMinimap": [
		"View: Toggle Minimap"
	],
	"vs/workbench/parts/codeEditor/electron-browser/toggleMultiCursorModifier": [
		"Toggle Multi-Cursor Modifier"
	],
	"vs/workbench/parts/codeEditor/electron-browser/toggleRenderControlCharacter": [
		"View: Toggle Control Characters"
	],
	"vs/workbench/parts/codeEditor/electron-browser/toggleRenderWhitespace": [
		"View: Toggle Render Whitespace"
	],
	"vs/workbench/parts/codeEditor/electron-browser/toggleWordWrap": [
		"View: Toggle Word Wrap",
		"Cannot toggle word wrap in a diff editor.",
		"Disable wrapping for this file",
		"Enable wrapping for this file"
	],
	"vs/workbench/parts/codeEditor/electron-browser/wordWrapMigration": [
		"OK",
		"Don't show again",
		"Open Settings",
		"The setting `editor.wrappingColumn` has been deprecated in favor of `editor.wordWrap`."
	],
	"vs/workbench/parts/debug/browser/debugActions": [
		"Open {0}",
		"Configure or Fix 'launch.json'",
		"Please first open a folder in order to do advanced debug configuration.",
		"Start Debugging",
		"Start Without Debugging",
		"Select and Start Debugging",
		"Restart",
		"Reconnect",
		"Step Over",
		"Step Into",
		"Step Out",
		"Stop",
		"Disconnect",
		"Continue",
		"Pause",
		"Restart Frame",
		"Remove Breakpoint",
		"Remove All Breakpoints",
		"Enable Breakpoint",
		"Disable Breakpoint",
		"Enable All Breakpoints",
		"Disable All Breakpoints",
		"Activate Breakpoints",
		"Deactivate Breakpoints",
		"Reapply All Breakpoints",
		"Add Function Breakpoint",
		"Rename Function Breakpoint",
		"Add Conditional Breakpoint...",
		"Edit Breakpoint...",
		"Set Value",
		"Add Expression",
		"Edit Expression",
		"Add to Watch",
		"Remove Expression",
		"Remove All Expressions",
		"Clear Console",
		"Debug Console",
		"New Output in Debug Console",
		"Focus Debug Console",
		"Focus Process",
		"Step Back",
		"Reverse"
	],
	"vs/workbench/parts/debug/common/debug": [
		"Controls behavior of the internal debug console."
	],
	"vs/workbench/parts/debug/common/debugModel": [
		"not available",
		"Please start a debug session to evaluate"
	],
	"vs/workbench/parts/debug/common/debugSource": [
		"Unknown Source"
	],
	"vs/workbench/parts/execution/electron-browser/execution.contribution": [
		"External Terminal",
		"Customizes what kind of terminal to launch.",
		"Customizes which terminal to run on Windows.",
		"Customizes which terminal application to run on OS X.",
		"Customizes which terminal to run on Linux.",
		"Open New Command Prompt",
		"Open New Terminal",
		"Open in Command Prompt",
		"Open in Terminal",
		"Open in Terminal"
	],
	"vs/workbench/parts/execution/electron-browser/terminalService": [
		"VS Code Console",
		"Script '{0}' failed with exit code {1}",
		"'{0}' not supported",
		"Press any key to continue...",
		"'{0}' failed with exit code {1}"
	],
	"vs/workbench/parts/extensions/browser/extensionsActions": [
		"Install",
		"Installing",
		"Uninstall",
		"Uninstalling",
		"Update",
		"Update to {0}",
		"Enable (Workspace)",
		"Enable (Always)",
		"Disable (Workspace)",
		"Disable (Always)",
		"Uninstalling",
		"Workspace",
		"Always",
		"Enable",
		"Workspace",
		"Always",
		"Disable",
		"Check for Updates",
		"Enable Auto Updating Extensions",
		"Disable Auto Updating Extensions",
		"Update All Extensions",
		"Reload",
		"Reload to update",
		"Reload this window to activate the updated extension '{0}'?",
		"Reload to activate",
		"Reload this window to activate the extension '{0}'?",
		"Reload to deactivate",
		"Reload this window to deactivate the extension '{0}'?",
		"Reload to deactivate",
		"Reload this window to deactivate the uninstalled extension '{0}'?",
		"&&Reload Window",
		"Show Extensions",
		"Install Extensions",
		"Show Enabled Extensions",
		"Show Installed Extensions",
		"Show Disabled Extensions",
		"Clear Extensions Input",
		"Show Outdated Extensions",
		"Show Popular Extensions",
		"Show Recommended Extensions",
		"Show Workspace Recommended Extensions",
		"Show Recommended Keymaps",
		"Keymaps",
		"Show Language Extensions",
		"Language Extensions",
		"Show Azure Extensions",
		"Azure Extensions",
		"Configure Recommended Extensions (Workspace)",
		"Recommendations are only available on a workspace folder.",
		"Unable to create 'extensions.json' file inside the '.vscode' folder ({0}).",
		"Built-in",
		"Disable All Installed Extensions",
		"Disable All Installed Extensions for this Workspace",
		"Enable All Installed Extensions",
		"Enable All Installed Extensions for this Workspace",
		"Button background color for actions extension that stand out (e.g. install button).",
		"Button foreground color for actions extension that stand out (e.g. install button).",
		"Button background hover color for actions extension that stand out (e.g. install button)."
	],
	"vs/workbench/parts/extensions/common/extensionsFileTemplate": [
		"Extensions",
		"List of extensions recommendations. The identifier of an extension is always '${publisher}.${name}'. For example: 'vscode.csharp'.",
		"Expected format '${publisher}.${name}'. Example: 'vscode.csharp'."
	],
	"vs/workbench/parts/extensions/common/extensionsInput": [
		"Extension: {0}"
	],
	"vs/workbench/parts/extensions/electron-browser/extensionTipsService": [
		"The '{0}' extension is recommended for this file type.",
		"Show Recommendations",
		"Don't show again",
		"Close",
		"This workspace has extension recommendations.",
		"Show Recommendations",
		"Don't show again",
		"Close",
		"Do you want to ignore all extension recommendations ?",
		"Yes, Ignore All",
		"No",
		"Cancel"
	],
	"vs/workbench/parts/extensions/node/extensionsWorkbenchService": [
		"Enabling '{0}' also enable its dependencies. Would you like to continue?",
		"Yes",
		"No",
		"Would you like to disable '{0}' only or its dependencies also?",
		"Only",
		"All",
		"Cancel",
		"Cannot disable extension '{0}'. Extension '{1}' depends on this.",
		"Cannot disable extension '{0}'. Extensions '{1}' and '{2}' depend on this.",
		"Cannot disable extension '{0}'. Extensions '{1}', '{2}' and others depend on this.",
		"Would you like to install the '{0}' extension?",
		"Install",
		"Cancel"
	],
	"vs/workbench/parts/feedback/electron-browser/feedback": [
		"Tweet Feedback",
		"Tweet us your feedback.",
		"Your installation is corrupt.",
		"Please specify this if you submit a bug.",
		"How was your experience?",
		"Happy",
		"Sad",
		"Other ways to contact us",
		"Submit a bug",
		"Request a missing feature",
		"Tell us why?",
		"Comments",
		"Tweet",
		"character left",
		"characters left",
		"Sending",
		"Thanks",
		"Try again"
	],
	"vs/workbench/parts/files/browser/editors/binaryFileEditor": [
		"Binary File Viewer"
	],
	"vs/workbench/parts/files/browser/editors/textFileEditor": [
		"Text File Editor",
		"Create File",
		"{0}. Text file editor.",
		"Text file editor."
	],
	"vs/workbench/parts/files/browser/explorerViewlet": [
		"Folders"
	],
	"vs/workbench/parts/files/browser/fileActions": [
		"Retry",
		"Rename",
		"Rename",
		"New File",
		"New Folder",
		"Open a folder first to create files or folders within.",
		"New Untitled File",
		"New File",
		"New Folder",
		"New File",
		"New Folder",
		"&&Move to Recycle Bin",
		"&&Move to Trash",
		"&&Delete",
		"You are deleting a folder with unsaved changes in 1 file. Do you want to continue?",
		"You are deleting a folder with unsaved changes in {0} files. Do you want to continue?",
		"You are deleting a file with unsaved changes. Do you want to continue?",
		"Your changes will be lost if you don't save them.",
		"Are you sure you want to delete '{0}' and its contents?",
		"Are you sure you want to delete '{0}'?",
		"You can restore from the recycle bin.",
		"You can restore from the trash.",
		"Are you sure you want to permanently delete '{0}' and its contents?",
		"Are you sure you want to permanently delete '{0}'?",
		"This action is irreversible!",
		"Delete Permanently",
		"Delete",
		"Import Files",
		"A file or folder with the same name already exists in the destination folder. Do you want to replace it?",
		"This action is irreversible!",
		"&&Replace",
		"Copy",
		"Paste",
		"Duplicate",
		"Open to the Side",
		"Select for Compare",
		"Compare Active File With...",
		"Select a previously opened file to compare with",
		"The selected file can not be compared with '{0}'.",
		"Open a file first to compare it with another file.",
		"Compare '{0}' with '{1}'",
		"Compare Files",
		"Refresh",
		"Save",
		"Save As...",
		"Save All",
		"Save All in Group",
		"Save Dirty Files",
		"Revert File",
		"Focus on Open Editors View",
		"Focus on Files Explorer",
		"Reveal Active File in Side Bar",
		"Open a file first to show it in the explorer",
		"Collapse Folders in Explorer",
		"Refresh Explorer",
		"Open File...",
		"Open Active File in New Window",
		"Open a file first to open in new window",
		"Reveal in Explorer",
		"Reveal in Finder",
		"Open Containing Folder",
		"Reveal Active File in Windows Explorer",
		"Reveal Active File in Finder",
		"Open Containing Folder of Active File",
		"Copy Path",
		"Copy Path of Active File",
		"A file or folder name must be provided.",
		"A file or folder **{0}** already exists at this location. Please choose a different name.",
		"The name **{0}** is not valid as a file or folder name. Please choose a different name.",
		"The name **{0}** results in a path that is too long. Please choose a shorter name.",
		"Compare Active File with Saved",
		"{0} (on disk) ↔ {1}"
	],
	"vs/workbench/parts/files/browser/fileActions.contribution": [
		"Files",
		"Reveal in Side Bar",
		"Use your changes and overwrite disk contents",
		"Discard your changes and revert to content on disk"
	],
	"vs/workbench/parts/files/browser/fileCommands": [
		"Open a file first to copy its path",
		"Open a file first to reveal"
	],
	"vs/workbench/parts/files/browser/files.contribution": [
		"Show Explorer",
		"Explorer",
		"View",
		"Text File Editor",
		"Binary File Editor",
		"Files",
		"Configure glob patterns for excluding files and folders.",
		"The glob pattern to match file paths against. Set to true or false to enable or disable the pattern.",
		"Additional check on the siblings of a matching file. Use $(basename) as variable for the matching file name.",
		"Configure file associations to languages (e.g. \"*.extension\": \"html\"). These have precedence over the default associations of the languages installed.",
		"The default character set encoding to use when reading and writing files.",
		"When enabled, will attempt to guess the character set encoding when opening files",
		"The default end of line character. Use \\n for LF and \\r\\n for CRLF.",
		"When enabled, will trim trailing whitespace when saving a file.",
		"When enabled, insert a final new line at the end of the file when saving it.",
		"A dirty file is never automatically saved.",
		"A dirty file is automatically saved after the configured 'files.autoSaveDelay'.",
		"A dirty file is automatically saved when the editor loses focus.",
		"A dirty file is automatically saved when the window loses focus.",
		"Controls auto save of dirty files. Accepted values:  '{0}', '{1}', '{2}' (editor loses focus), '{3}' (window loses focus). If set to '{4}', you can configure the delay in 'files.autoSaveDelay'.",
		"Controls the delay in ms after which a dirty file is saved automatically. Only applies when 'files.autoSave' is set to '{0}'",
		"Configure glob patterns of file paths to exclude from file watching. Patterns must match on absolute paths (i.e. prefix with ** or the full path to match properly). Changing this setting requires a restart. When you experience Code consuming lots of cpu time on startup, you can exclude large folders to reduce the initial load.",
		"Disable hot exit.",
		"Hot exit will be triggered when the application is closed, that is when the last window is closed on Windows/Linux or when the workbench.action.quit command is triggered (command palette, keybinding, menu). All windows with backups will be restored upon next launch.",
		"Hot exit will be triggered when the application is closed, that is when the last window is closed on Windows/Linux or when the workbench.action.quit command is triggered (command palette, keybinding, menu), and also for any window with a folder opened regardless of whether it's the last window. All windows without folders opened will be restored upon next launch. To restore folder windows as they were before shutdown set \"window.restoreWindows\" to \"all\".",
		"Controls whether unsaved files are remembered between sessions, allowing the save prompt when exiting the editor to be skipped.",
		"Use the new experimental file watcher.",
		"The default language mode that is assigned to new files.",
		"Editor",
		"Format a file on save. A formatter must be available, the file must not be auto-saved, and editor must not be shutting down.",
		"File Explorer",
		"Number of editors shown in the Open Editors pane. Set it to 0 to hide the pane.",
		"Controls if the height of the open editors section should adapt dynamically to the number of elements or not.",
		"Controls if the explorer should automatically reveal and select files when opening them.",
		"Controls if the explorer should allow to move files and folders via drag and drop.",
		"Files and folders are sorted by their names, in alphabetical order. Folders are displayed before files.",
		"Files and folders are sorted by their names, in alphabetical order. Files are interwoven with folders.",
		"Files and folders are sorted by their names, in alphabetical order. Files are displayed before folders.",
		"Files and folders are sorted by their extensions, in alphabetical order. Folders are displayed before files.",
		"Files and folders are sorted by last modified date, in descending order. Folders are displayed before files.",
		"Controls sorting order of files and folders in the explorer. In addition to the default sorting, you can set the order to 'mixed' (files and folders sorted combined), 'type' (by file type), 'modified' (by last modified date) or 'filesFirst' (sort files before folders)."
	],
	"vs/workbench/parts/files/browser/saveErrorHandler": [
		"Discard",
		"Overwrite",
		"Retry",
		"Failed to save '{0}': File is write protected. Select 'Overwrite' to remove protection.",
		"Failed to save '{0}': {1}",
		"Failed to save '{0}': The content on disk is newer. Click on **Compare** to compare your version with the one on disk.",
		"Compare",
		"{0} (on disk) ↔ {1} (in {2}) - Resolve save conflict",
		"Use the actions in the editor tool bar to the right to either **undo** your changes or **overwrite** the content on disk with your changes"
	],
	"vs/workbench/parts/files/browser/views/emptyView": [
		"No Folder Opened",
		"Files Explorer Section",
		"You have not yet opened a folder.",
		"Open Folder"
	],
	"vs/workbench/parts/files/browser/views/explorerView": [
		"Files Explorer Section",
		"Files Explorer"
	],
	"vs/workbench/parts/files/browser/views/explorerViewer": [
		"Type file name. Press Enter to confirm or Escape to cancel.",
		"{0}, Files Explorer",
		"Do you want to add the folders to the workspace?",
		"Do you want to add the folder to the workspace?",
		"&&Add Folders",
		"&&Add Folder",
		"'{0}' already exists in the destination folder. Do you want to replace it?",
		"This action is irreversible!",
		"&&Replace"
	],
	"vs/workbench/parts/files/browser/views/openEditorsView": [
		"Open Editors",
		"Open Editors Section",
		"Open Editors: List of Active Files",
		"{0} unsaved"
	],
	"vs/workbench/parts/files/browser/views/openEditorsViewer": [
		"{0}, Editor Group",
		"{0}, Open Editor",
		"Save All",
		"Close Unmodified",
		"Close All",
		"Compare with Saved",
		"Close",
		"Close Others",
		"Close Unmodified",
		"Close All"
	],
	"vs/workbench/parts/files/common/dirtyFilesTracker": [
		"{0} unsaved files"
	],
	"vs/workbench/parts/files/common/editors/fileEditorInput": [
		"{0} (deleted from disk)"
	],
	"vs/workbench/parts/html/browser/html.contribution": [
		"Html Preview",
		"Developer: Webview Tools"
	],
	"vs/workbench/parts/html/browser/htmlPreviewPart": [
		"Invalid editor input."
	],
	"vs/workbench/parts/markers/common/messages": [
		"View",
		"Show Problems",
		"Problems View",
		"Controls if Problems view should automatically reveal files when opening them",
		"Problems",
		"Problems grouped by files",
		"No problems have been detected in the workspace so far.",
		"No results found with provided filter criteria",
		"Filter Problems",
		"Filter by type or text",
		"errors",
		"warnings",
		"infos",
		"1 Error",
		"{0} Errors",
		"1 Warning",
		"{0} Warnings",
		"1 Info",
		"{0} Infos",
		"1 Unknown",
		"{0} Unknowns",
		"({0}, {1})",
		"{0} with {1} problems",
		"Error generated by {0}: {1} at line {2} and character {3}",
		"Error: {0} at line {1} and character {2}",
		"Warning generated by {0}: {1} at line {2} and character {3}",
		"Warning: {0} at line {1} and character {2}",
		"Info generated by {0}: {1} at line {2} and character {3}",
		"Info: {0} at line {1} and character {2}",
		"Problem generated by {0}: {1} at line {2} and character {3}",
		"Problem: {0} at line {1} and character {2}",
		"Show Errors and Warnings"
	],
	"vs/workbench/parts/markers/electron-browser/markersElectronContributions": [
		"Copy"
	],
	"vs/workbench/parts/output/browser/output.contribution": [
		"Output",
		"View",
		"View",
		"Clear Output"
	],
	"vs/workbench/parts/output/browser/outputActions": [
		"Toggle Output",
		"Clear Output",
		"Toggle Output Scroll Lock",
		"Switch to Output"
	],
	"vs/workbench/parts/output/browser/outputPanel": [
		"{0}, Output panel",
		"Output panel"
	],
	"vs/workbench/parts/output/common/output": [
		"Output",
		"for '{0}'"
	],
	"vs/workbench/parts/performance/electron-browser/performance.contribution": [
		"Slow startup detected",
		"Sorry that you just had a slow startup. Please restart '{0}' with profiling enabled, share the profiles with us, and we will work hard to make startup great again.",
		"Successfully created profiles.",
		"Please create an issue and manually attach the following files:\n{0}",
		"Create Issue and Restart",
		"Restart",
		"Thanks for helping us.",
		"A final restart is required to continue to use '{0}'. Again, thank you for your contribution.",
		"Restart"
	],
	"vs/workbench/parts/preferences/browser/keybindingWidgets": [
		"Press desired key combination and ENTER. ESCAPE to cancel.",
		"chord to"
	],
	"vs/workbench/parts/preferences/browser/keybindingsEditor": [
		"Keyboard Shortcuts",
		"Search keybindings",
		"Search keybindings",
		"Sort by Precedence",
		"For advanced customizations open and edit",
		"keybindings.json",
		"Keybindings",
		"Change Keybinding",
		"Add Keybinding",
		"Remove Keybinding",
		"Reset Keybinding",
		"Show Conflicts",
		"Copy",
		"Error '{0}' while editing keybinding. Please open 'keybindings.json' file and check.",
		"Command",
		"Keybinding",
		"Source",
		"When",
		"Change Keybinding {0}",
		"Change Keybinding",
		"Add Keybinding {0}",
		"Add Keybinding",
		"Command is {0}.",
		"Keybinding is {0}.",
		"No Keybinding assigned.",
		"Source is {0}.",
		"When is {0}.",
		"No when context."
	],
	"vs/workbench/parts/preferences/browser/keybindingsEditorContribution": [
		"Define Keybinding",
		"You won't be able to produce this key combination under your current keyboard layout.",
		"**{0}** for your current keyboard layout (**{1}** for US standard).",
		"**{0}** for your current keyboard layout."
	],
	"vs/workbench/parts/preferences/browser/preferences.contribution": [
		"Default Preferences Editor",
		"Keybindings Editor",
		"Preferences"
	],
	"vs/workbench/parts/preferences/browser/preferencesActions": [
		"Open User Settings",
		"Open Keyboard Shortcuts",
		"Open Keyboard Shortcuts File",
		"Open Workspace Settings",
		"Open Folder Settings",
		"Select Folder",
		"Configure Language Specific Settings...",
		"({0})",
		"Select Language"
	],
	"vs/workbench/parts/preferences/browser/preferencesEditor": [
		"Default Settings",
		"Search settings",
		"Search Settings",
		"Total {0} Settings",
		"No Results",
		"1 Setting matched",
		"{0} Settings matched",
		"{0}. Text file editor.",
		"Text file editor.",
		"Default preferences. Readonly text editor."
	],
	"vs/workbench/parts/preferences/browser/preferencesRenderers": [
		"Place your settings here to overwrite the Default Settings.",
		"Unable to write into settings. Correct errors/warnings in the file and try again.",
		"Place your settings here to overwrite the User Settings.",
		"Place your folder settings here to overwrite those from the Workspace Settings.",
		"Default Folder Settings",
		"Default Settings",
		"No Settings Found.",
		"Edit",
		"Replace in Settings",
		"Copy to Settings",
		"This setting must be a User Setting. To configure PHP for the workspace, open a PHP file and click on 'PHP Path' in the status bar.",
		"This setting must be a User Setting.",
		"This setting cannot be applied now. It will be applied when you open this folder directly."
	],
	"vs/workbench/parts/preferences/browser/preferencesService": [
		"Open a folder first to create workspace settings",
		"Place your key bindings in this file to overwrite the defaults",
		"Default Keybindings",
		"{0} (Folder Settings)",
		"Unable to create '{0}' ({1})."
	],
	"vs/workbench/parts/preferences/browser/preferencesWidgets": [
		"Folder Settings"
	],
	"vs/workbench/parts/preferences/common/keybindingsEditorModel": [
		"Default",
		"User",
		"meta",
		"option"
	],
	"vs/workbench/parts/preferences/common/preferences": [
		"User Settings",
		"Workspace Settings"
	],
	"vs/workbench/parts/preferences/common/preferencesModels": [
		"Commonly Used",
		"No Settings",
		"Overwrite key bindings by placing them into your key bindings file."
	],
	"vs/workbench/parts/quickopen/browser/commandsHandler": [
		"Show All Commands",
		"Clear Command History",
		"Command Palette...",
		"{0}, {1}, commands",
		"{0}, commands",
		"Command '{0}' can not be run from here.",
		"Command '{0}' is not enabled in the current context.",
		"recently used",
		"other commands",
		"{0}: {1}",
		"{0}: {1}",
		"No commands matching"
	],
	"vs/workbench/parts/quickopen/browser/gotoLineHandler": [
		"Go to Line...",
		"Type a line number between 1 and {0} to navigate to",
		"Type a line number to navigate to",
		"Go to line {0} and character {1}",
		"Go to line {0}",
		"Type a line number to navigate to.",
		"Open a text file first to go to a line"
	],
	"vs/workbench/parts/quickopen/browser/gotoSymbolHandler": [
		"Go to Symbol in File...",
		"symbols ({0})",
		"methods ({0})",
		"functions ({0})",
		"constructors ({0})",
		"variables ({0})",
		"classes ({0})",
		"interfaces ({0})",
		"namespaces ({0})",
		"packages ({0})",
		"modules ({0})",
		"properties ({0})",
		"enumerations ({0})",
		"strings ({0})",
		"rules ({0})",
		"files ({0})",
		"arrays ({0})",
		"numbers ({0})",
		"booleans ({0})",
		"objects ({0})",
		"keys ({0})",
		"{0}, symbols",
		"No symbols matching",
		"No symbols found",
		"Type to narrow down symbols of the currently active editor.",
		"No symbol information for the file",
		"Open a text file first to go to a symbol"
	],
	"vs/workbench/parts/quickopen/browser/helpHandler": [
		"{0}, picker help",
		"global commands",
		"editor commands"
	],
	"vs/workbench/parts/quickopen/browser/quickopen.contribution": [
		"Show and Run Commands",
		"Go to Line",
		"Go to Line",
		"Go to Symbol in File",
		"Go to Symbol in File by Category",
		"Show Help",
		"Open View"
	],
	"vs/workbench/parts/quickopen/browser/viewPickerHandler": [
		"{0}, view picker",
		"Views",
		"Panels",
		"Terminal",
		"{0}: {1}",
		"Output",
		"Open View",
		"Quick Open View"
	],
	"vs/workbench/parts/relauncher/electron-browser/relauncher.contribution": [
		"A setting has changed that requires a restart to take effect.",
		"Press the restart button to restart {0} and enable the setting.",
		"Restart",
		"This workspace change requires a reload of our extension system.",
		"Reload"
	],
	"vs/workbench/parts/scm/electron-browser/dirtydiffDecorator": [
		"Editor gutter background color for lines that are modified.",
		"Editor gutter background color for lines that are added.",
		"Editor gutter background color for lines that are deleted.",
		"Overview ruler marker color for modified content.",
		"Overview ruler marker color for added content.",
		"Overview ruler marker color for deleted content."
	],
	"vs/workbench/parts/scm/electron-browser/scm.contribution": [
		"Show Git",
		"Source Control",
		"Show SCM",
		"View"
	],
	"vs/workbench/parts/scm/electron-browser/scmActivity": [
		"{0} pending changes"
	],
	"vs/workbench/parts/scm/electron-browser/scmViewlet": [
		"Message (press {0} to commit)",
		"Install Additional SCM Providers...",
		"There are no active source control providers",
		"Source Control",
		"{0}: {1}"
	],
	"vs/workbench/parts/search/browser/openAnythingHandler": [
		"file and symbol results",
		"file results"
	],
	"vs/workbench/parts/search/browser/openFileHandler": [
		"{0}, file picker",
		"search results"
	],
	"vs/workbench/parts/search/browser/openSymbolHandler": [
		"{0}, symbols picker",
		"symbol results",
		"No symbols matching",
		"Type to search for symbols"
	],
	"vs/workbench/parts/search/browser/patternInputWidget": [
		"input",
		"Use Ignore Files",
		"Use Exclude Settings"
	],
	"vs/workbench/parts/search/browser/replaceService": [
		"{0} ↔ {1} (Replace Preview)"
	],
	"vs/workbench/parts/search/browser/search.contribution": [
		"Go to Symbol in Workspace...",
		"Search",
		"Show Search",
		"View",
		"Find in Files",
		"Go to File",
		"Go to Symbol in Workspace",
		"Search",
		"Search",
		"Configure glob patterns for excluding files and folders in searches. Inherits all glob patterns from the files.exclude setting.",
		"The glob pattern to match file paths against. Set to true or false to enable or disable the pattern.",
		"Additional check on the siblings of a matching file. Use $(basename) as variable for the matching file name.",
		"Controls whether to use ripgrep in text search",
		"Controls whether to use .gitignore and .ignore files by default when searching in a new workspace.",
		"Configure to include results from a global symbol search in the file results for Quick Open."
	],
	"vs/workbench/parts/search/browser/searchActions": [
		"Show Next Search Include Pattern",
		"Show Previous Search Include Pattern",
		"Show Next Search Exclude Pattern",
		"Show Previous Search Exclude Pattern",
		"Show Next Search Term",
		"Show Previous Search Term",
		"Focus Next Input Box",
		"Focus Previous Input Box",
		"Replace in Files",
		"Find in Workspace...",
		"Find in Folder...",
		"Refresh",
		"Clear Search Results",
		"Focus Next Search Result",
		"Focus Previous Search Result",
		"Remove",
		"Replace All",
		"Replace"
	],
	"vs/workbench/parts/search/browser/searchResultsView": [
		"Other files",
		"{0} files found",
		"{0} file found",
		"{0} matches found",
		"{0} match found",
		"{0} matches in folder root {1}, Search result",
		"{0} matches in file {1} of folder {2}, Search result",
		"Replace term {0} with {1} at column position {2} in line with text {3}",
		"Found term {0} at column position {1} in line with text {2}"
	],
	"vs/workbench/parts/search/browser/searchViewlet": [
		"Toggle Search Details",
		"files to include",
		"Search Include Patterns",
		"files to exclude",
		"Search Exclude Patterns",
		"Replace All",
		"Replace",
		"Replaced {0} occurrence across {1} file with '{2}'.",
		"Replaced {0} occurrence across {1} file'.",
		"Replaced {0} occurrence across {1} files with '{2}'.",
		"Replaced {0} occurrence across {1} files.",
		"Replaced {0} occurrences across {1} file with '{2}'.",
		"Replaced {0} occurrences across {1} file'.",
		"Replaced {0} occurrences across {1} files with '{2}'.",
		"Replaced {0} occurrences across {1} files.",
		"Replace {0} occurrence across {1} file with '{2}'?",
		"Replace {0} occurrence across {1} file'?",
		"Replace {0} occurrence across {1} files with '{2}'?",
		"Replace {0} occurrence across {1} files?",
		"Replace {0} occurrences across {1} file with '{2}'?",
		"Replace {0} occurrences across {1} file'?",
		"Replace {0} occurrences across {1} files with '{2}'?",
		"Replace {0} occurrences across {1} files?",
		"Search Results",
		"Search path not found: {0}",
		"The result set only contains a subset of all matches. Please be more specific in your search to narrow down the results.",
		"Search was canceled before any results could be found - ",
		"No results found in '{0}' excluding '{1}' - ",
		"No results found in '{0}' - ",
		"No results found excluding '{0}' - ",
		"No results found. Review your settings for configured exclusions and ignore files - ",
		"Search again",
		"Search again in all files",
		"Open Settings",
		"Learn More",
		"Search returned {0} results in {1} files",
		"{0} result in {1} file",
		"{0} result in {1} files",
		"{0} results in {1} file",
		"{0} results in {1} files",
		"You have not yet opened a folder. Only open files are currently searched - ",
		"Open Folder"
	],
	"vs/workbench/parts/search/browser/searchWidget": [
		"Replace All (Submit Search to Enable)",
		"Replace All",
		"Toggle Replace",
		"Search: Type Search Term and press Enter to search or Escape to cancel",
		"Search",
		"Replace: Type replace term and press Enter to preview or Escape to cancel",
		"Replace",
		"Expression matches everything"
	],
	"vs/workbench/parts/search/common/queryBuilder": [
		"No folder in workspace with name: {0}"
	],
	"vs/workbench/parts/snippets/electron-browser/TMSnippets": [
		"Contributes snippets.",
		"Language identifier for which this snippet is contributed to.",
		"Path of the snippets file. The path is relative to the extension folder and typically starts with './snippets/'.",
		"Unknown language in `contributes.{0}.language`. Provided value: {1}",
		"Expected string in `contributes.{0}.path`. Provided value: {1}",
		"Expected `contributes.{0}.path` ({1}) to be included inside extension's folder ({2}). This might make the extension non-portable.",
		"The \"{0}\"-snippet very likely confuses snippet-variables and snippet-placeholders. See https://code.visualstudio.com/docs/editor/userdefinedsnippets#_snippet-syntax for more details."
	],
	"vs/workbench/parts/snippets/electron-browser/insertSnippet": [
		"Insert Snippet"
	],
	"vs/workbench/parts/snippets/electron-browser/snippets.contribution": [
		"Select Language for Snippet",
		"Unable to create {0}",
		"Open User Snippets",
		"Preferences",
		"Empty snippet",
		"User snippet configuration",
		"The prefix to used when selecting the snippet in intellisense",
		"The snippet content. Use '$1', '${1:defaultText}' to define cursor positions, use '$0' for the final cursor position. Insert variable values with '${varName}' and '${varName:defaultText}', e.g 'This is file: $TM_FILENAME'.",
		"The snippet description."
	],
	"vs/workbench/parts/snippets/electron-browser/snippetsService": [
		"User Snippet",
		"{0} ({1})",
		"{0}, {1}",
		"{0}, {1}"
	],
	"vs/workbench/parts/snippets/electron-browser/tabCompletion": [
		"Insert snippets when their prefix matches. Works best when 'quickSuggestions' aren't enabled."
	],
	"vs/workbench/parts/surveys/electron-browser/languageSurveys.contribution": [
		"Help us improve our support for {0}",
		"Take Short Survey",
		"Remind Me later",
		"Don't Show Again"
	],
	"vs/workbench/parts/surveys/electron-browser/nps.contribution": [
		"Do you mind taking a quick feedback survey?",
		"Take Survey",
		"Remind Me later",
		"Don't Show Again"
	],
	"vs/workbench/parts/tasks/browser/quickOpen": [
		"{0}, tasks",
		"recently used tasks",
		"configured tasks",
		"detected tasks",
		"Configure Task"
	],
	"vs/workbench/parts/tasks/browser/taskQuickOpen": [
		"Type the name of a task to run",
		"No tasks matching",
		"No tasks found"
	],
	"vs/workbench/parts/tasks/common/taskDefinitionRegistry": [
		"The actual task type",
		"Additional properties of the task type",
		"The task type configuration is missing the required 'taskType' property",
		"Contributes task kinds"
	],
	"vs/workbench/parts/tasks/common/taskTemplates": [
		"Executes .NET Core build command",
		"Executes the build target",
		"Example to run an arbitrary external command",
		"Executes common maven commands"
	],
	"vs/workbench/parts/tasks/electron-browser/jsonSchemaCommon": [
		"Additional command options",
		"The current working directory of the executed program or script. If omitted Code's current workspace root is used.",
		"The environment of the executed program or shell. If omitted the parent process' environment is used.",
		"Configures the shell to be used.",
		"The shell to be used.",
		"The shell arguments.",
		"The command to be executed. Can be an external program or a shell command.",
		"Arguments passed to the command when this task is invoked.",
		"The task's name",
		"The command to be executed. Can be an external program or a shell command.",
		"Arguments passed to the command when this task is invoked.",
		"Windows specific command configuration",
		"Mac specific command configuration",
		"Linux specific command configuration",
		"Controls whether the task name is added as an argument to the command. If omitted the globally defined value is used.",
		"Controls whether the output of the running task is shown or not. If omitted the globally defined value is used.",
		"Controls whether the executed command is echoed to the output. Default is false.",
		"Deprecated. Use isBackground instead.",
		"Whether the executed task is kept alive and is watching the file system.",
		"Whether the executed task is kept alive and is running in the background.",
		"Whether the user is prompted when VS Code closes with a running task.",
		"Maps this task to Code's default build command.",
		"Maps this task to Code's default test command.",
		"The problem matcher(s) to use. Can either be a string or a problem matcher definition or an array of strings and problem matchers.",
		"The command to be executed. Can be an external program or a shell command.",
		"Additional arguments passed to the command.",
		"Controls whether the output of the running task is shown or not. If omitted 'always' is used.",
		"Deprecated. Use isBackground instead.",
		"Whether the executed task is kept alive and is watching the file system.",
		"Whether the executed task is kept alive and is running in the background.",
		"Whether the user is prompted when VS Code closes with a running background task.",
		"Controls whether the executed command is echoed to the output. Default is false.",
		"Controls whether the task name is added as an argument to the command. Default is false.",
		"Prefix to indicate that an argument is task.",
		"The problem matcher(s) to use. Can either be a string or a problem matcher definition or an array of strings and problem matchers.",
		"The task configurations. Usually these are enrichments of task already defined in the external task runner."
	],
	"vs/workbench/parts/tasks/electron-browser/jsonSchema_v1": [
		"The config's version number",
		"The runner has graduated. Use the offical runner property",
		"Defines whether the task is executed as a process and the output is shown in the output window or inside the terminal.",
		"Windows specific command configuration",
		"Mac specific command configuration",
		"Linux specific command configuration",
		"Specifies whether the command is a shell command or an external program. Defaults to false if omitted."
	],
	"vs/workbench/parts/tasks/electron-browser/jsonSchema_v2": [
		"Specifies whether the command is a shell command or an external program. Defaults to false if omitted.",
		"The property isShellCommand is deprecated. Use the type property of the task and the shell property in the options instead. See also the 1.14 release notes.",
		"Another task this task depends on.",
		"The other tasks this task depends on.",
		"Configures the panel that is used to present the task's ouput and reads its input.",
		"Controls whether the executed command is echoed to the panel. Default is true.",
		"Controls whether the panel takes focus. Default is false. If set to true the panel is revealed as well.",
		"Always reveals the terminal when this task is executed.",
		"Only reveals the terminal if no problem matcher is associated with the task and an errors occurs executing it.",
		"Never reveals the terminal when this task is executed.",
		"Controls whether the panel running the task is revealed or not. Default is \"always\".",
		"Controls if the panel is shared between tasks, dedicated to this task or a new one is created on every run.",
		"The terminal property is deprecated. Use presentation instead",
		"The task's execution group.",
		"Defines if this task is the default task in the group.",
		"Marks the tasks as the default build task.",
		"Marks the tasks as the default test task.",
		"Marks the tasks as a build task accesible through the 'Run Build Task' command.",
		"Marks the tasks as a test task accesible through the 'Run Test Task' command.",
		"Assigns the task to no group",
		"Defines to which execution group this task belongs to. It supports \"build\" to add it to the build group and \"test\" to add it to the test group.",
		"Defines whether the task is run as a process or as a command inside a shell. Default is process.",
		"The config's version number.",
		"A user defined identifier to reference the task in launch.json or a dependsOn clause.",
		"The task's label",
		"The task's name",
		"The task's name property is deprecated. Use the label property instead.",
		"Whether the executed task is kept alive and is running in the background.",
		"Whether the user is prompted when VS Code closes with a running task.",
		"The problem matcher(s) to use. Can either be a string or a problem matcher definition or an array of strings and problem matchers.",
		"The task type to customize",
		"The customize property is deprecated. See the 1.14 release notes on how to migrate to the new task customization approach",
		"The property showOutput is deprecated. Use the reveal property inside the presentation property instead. See also the 1.14 release notes.",
		"The property echoCommand is deprecated. Use the echo property inside the presentation property instead. See also the 1.14 release notes.",
		"The property suppressTaskName is deprecated. Inline the command with its arguments into the task instead. See also the 1.14 release notes.",
		"The property isBuildCommand is deprecated. Use the group property instead. See also the 1.14 release notes.",
		"The property isTestCommand is deprecated. Use the group property instead. See also the 1.14 release notes.",
		"The property suppressTaskName is deprecated. Inline the command with its arguments into the task instead. See also the 1.14 release notes.",
		"The property taskSelector is deprecated. Inline the command with its arguments into the task instead. See also the 1.14 release notes.",
		"Windows specific command configuration",
		"Mac specific command configuration",
		"Linux specific command configuration"
	],
	"vs/workbench/parts/tasks/electron-browser/task.contribution": [
		"Tasks",
		"Tasks are only available on a workspace folder.",
		"Select a Task Runner",
		"Auto detecting tasks for {0}",
		"Auto detecting the task system failed. Using default template. Consult the task output for details.",
		"Auto detecting the task system produced errors. Consult the task output for details.",
		"Unable to create the 'tasks.json' file inside the '.vscode' folder. Consult the task output for details.",
		"Configure Task Runner",
		"Configure Build Task",
		"Close",
		"View Terminal",
		"Problems",
		"99+",
		"Show Running Tasks",
		"Tasks",
		"Changing the task execution engine requires to reload the Window",
		"No build task defined. Mark a task with 'isBuildCommand' in the tasks.json file.",
		"No build task defined. Mark a task with as a 'build' group in the tasks.json file.",
		"No test task defined. Mark a task with 'isTestCommand' in the tasks.json file.",
		"No test task defined. Mark a task with as a 'test' group in the tasks.json file.",
		"Requested task {0} to execute not found.",
		"Continue without scanning the task output",
		"Never scan the task output",
		"Learn more about scanning the task output",
		"Select for which kind of errors and warnings to scan the task output",
		"The current task configuration has errors. Please fix the errors first before customizing a task.",
		"There are many build tasks defined in the tasks.json. Executing the first one.\n",
		"The task '{0}' is already active and in background mode. To terminate it use `Terminate Task...` from the Tasks menu.",
		"The task '{0}' is already active. To terminate it use `Terminate Task...` from the Tasks menu.",
		"There is already a task running. Terminate it first before executing another task.",
		"Failed to terminate and restart task {0}",
		"Error: the provided task configuration has validation errors and can't not be used. Please correct the errors first.",
		"Error: The content of the tasks.json file has syntax errors. Please correct them before executing a task.\n",
		"There is a task running. Do you want to terminate it?",
		"&&Terminate Task",
		"The launched task doesn't exist anymore. If the task spawned background processes exiting VS Code might result in orphaned processes. To avoid this start the last background process with a wait flag.",
		"&&Exit Anyways",
		"Terminate Task",
		"An error has occurred while running a task. See task log for details.",
		"Tasks are only available on a workspace folder.",
		"recently used tasks",
		"configured tasks",
		"detected tasks",
		"Fetching build tasks...",
		"No Build Task found. Press 'Configure Build Task' to define one.",
		"Select the build task to run",
		"Fetching test tasks...",
		"No Test Task found. Press 'Configure Task Runner' to define one.",
		"Select the test task to run",
		"No task is currently running.",
		"Select task to terminate",
		"The launched process doesn't exist anymore. If the task spawned background tasks exiting VS Code might result in orphaned processes.",
		"Failed to terminate running task",
		"No task to restart.",
		"Select the task to restart",
		"{0} is already marked as the default build task.",
		"Select the task to be used as the default build task",
		"{0} is already marked as the default test task.",
		"Select the task to be used as the default test task",
		"No task is running.",
		"No task is running.",
		"Select the task to show its output",
		"Run Task"
	],
	"vs/workbench/parts/tasks/electron-browser/terminalTaskSystem": [
		"A unknown error has occurred while executing a task. See task output log for details.",
		"Task - {0}",
		"Terminal will be reused by tasks, press any key to close it.",
		"Can't execute a shell command on an UNC drive.",
		"Problem matcher {0} can't be resolved. The matcher will be ignored"
	],
	"vs/workbench/parts/tasks/node/processRunnerDetector": [
		"Running gulp --tasks-simple didn't list any tasks. Did you run npm install?",
		"Running jake --tasks didn't list any tasks. Did you run npm install?",
		"Gulp is not installed on your system. Run npm install -g gulp to install it.",
		"Jake is not installed on your system. Run npm install -g jake to install it.",
		"Grunt is not installed on your system. Run npm install -g grunt to install it.",
		"Program {0} was not found. Message is {1}",
		"Build task named '{0}' detected.",
		"Test task named '{0}' detected."
	],
	"vs/workbench/parts/tasks/node/processTaskSystem": [
		"A unknown error has occurred while executing a task. See task output log for details.",
		"\nWatching build tasks has finished.",
		"Failed to launch external program {0} {1}.",
		"\nThe task '{0}' was terminated per user request.",
		"Problem matcher {0} can't be resolved. The matcher will be ignored"
	],
	"vs/workbench/parts/tasks/node/taskConfiguration": [
		"Warning: options.cwd must be of type string. Ignoring value {0}\n",
		"Error: command arguments must be an array of strings. Provided value is:\n{0}",
		"Warning: shell configuration is only supported when executing tasks in the terminal.",
		"Error: Problem Matcher in declare scope must have a name:\n{0}\n",
		"Warning: the defined problem matcher is unknown. Supported types are string | ProblemMatcher | (string | ProblemMatcher)[].\n{0}\n",
		"Error: Invalid problemMatcher reference: {0}\n",
		"Error: tasks configuration must have a type property. The configuration will be ignored.\n{0}\n",
		"Error: there is no registered task type '{0}'. Did you miss to install an extension that provides a corresponding task provider?",
		"Error: tasks is not declared as a custom task. The configuration will be ignored.\n{0}\n",
		"Error: tasks must provide a taskName property. The task will be ignored.\n{0}\n",
		"Warning: the task '{0}' is a shell command and either the command name or one of its arguments has unescaped spaces. To ensure correct command line quoting please merge args into the command.",
		"Error: the task '{0}' neither specifies a command nor a dependsOn property. The task will be ignored. Its definition is:\n{1}",
		"Error: the task '{0}' doesn't define a command. The task will be ignored. Its definition is:\n{1}",
		"Task version 2.0.0 doesn't support global OS specific tasks. Convert them to a task with a OS specific command. Affected tasks are:\n{0}"
	],
	"vs/workbench/parts/terminal/browser/terminalQuickOpen": [
		"{0}, terminal picker",
		"{0}, create new terminal",
		"$(plus) Create New Integrated Terminal",
		"No terminals matching",
		"No terminals open"
	],
	"vs/workbench/parts/terminal/electron-browser/terminal.contribution": [
		"Show All Opened Terminals",
		"Integrated Terminal",
		"The path of the shell that the terminal uses on Linux.",
		"The command line arguments to use when on the Linux terminal.",
		"The path of the shell that the terminal uses on OS X.",
		"The command line arguments to use when on the OS X terminal.",
		"The path of the shell that the terminal uses on Windows. When using shells shipped with Windows (cmd, PowerShell or Bash on Ubuntu).",
		"The command line arguments to use when on the Windows terminal.",
		"When set, this will prevent the context menu from appearing when right clicking within the terminal, instead it will copy when there is a selection and paste when there is no selection.",
		"Controls the font family of the terminal, this defaults to editor.fontFamily's value.",
		"Controls whether font ligatures are enabled in the terminal.",
		"Controls the font size in pixels of the terminal.",
		"Controls the line height of the terminal, this number is multipled by the terminal font size to get the actual line-height in pixels.",
		"Whether to enable bold text within the terminal, this requires support from the terminal shell.",
		"Controls whether the terminal cursor blinks.",
		"Controls the style of terminal cursor.",
		"Controls the maximum amount of lines the terminal keeps in its buffer.",
		"Controls whether locale variables are set at startup of the terminal, this defaults to true on OS X, false on other platforms.",
		"An explicit start path where the terminal will be launched, this is used as the current working directory (cwd) for the shell process. This may be particularly useful in workspace settings if the root directory is not a convenient cwd.",
		"Whether to confirm on exit if there are active terminal sessions.",
		"A set of command IDs whose keybindings will not be sent to the shell and instead always be handled by Code. This allows the use of keybindings that would normally be consumed by the shell to act the same as when the terminal is not focused, for example ctrl+p to launch Quick Open.",
		"Object with environment variables that will be added to the VS Code process to be used by the terminal on OS X",
		"Object with environment variables that will be added to the VS Code process to be used by the terminal on Linux",
		"Object with environment variables that will be added to the VS Code process to be used by the terminal on Windows",
		"Terminal",
		"Terminal",
		"View"
	],
	"vs/workbench/parts/terminal/electron-browser/terminalActions": [
		"Toggle Integrated Terminal",
		"Kill the Active Terminal Instance",
		"Kill Terminal",
		"Kill Terminal Instance",
		"Copy Selection",
		"Select All",
		"Delete Word Left",
		"Delete Word Right",
		"Create New Integrated Terminal",
		"New Terminal",
		"Focus Terminal",
		"Focus Next Terminal",
		"Focus Terminal {0}",
		"Focus Previous Terminal",
		"Paste into Active Terminal",
		"Select Default Shell",
		"Run Selected Text In Active Terminal",
		"Run Active File In Active Terminal",
		"Only files on disk can be run in the terminal",
		"Switch Terminal Instance",
		"Scroll Down (Line)",
		"Scroll Down (Page)",
		"Scroll to Bottom",
		"Scroll Up (Line)",
		"Scroll Up (Page)",
		"Scroll to Top",
		"Clear",
		"Allow Workspace Shell Configuration",
		"Disallow Workspace Shell Configuration",
		"Rename",
		"Enter terminal name",
		"Focus Find Widget",
		"Hide Find Widget",
		"Show Next Find Term",
		"Show Previous Find Term",
		"Terminal: Switch Active Terminal"
	],
	"vs/workbench/parts/terminal/electron-browser/terminalColorRegistry": [
		"The background color of the terminal, this allows coloring the terminal differently to the panel.",
		"The foreground color of the terminal.",
		"The foreground color of the terminal cursor.",
		"The background color of the terminal cursor. Allows customizing the color of a character overlapped by a block cursor.",
		"'{0}' ansi color in the terminal."
	],
	"vs/workbench/parts/terminal/electron-browser/terminalConfigHelper": [
		"Do you allow {0} (defined as a workspace setting) to be launched in the terminal?",
		"Allow",
		"Disallow"
	],
	"vs/workbench/parts/terminal/electron-browser/terminalInstance": [
		"The terminal has no selection to copy",
		"The terminal process terminated with exit code: {0}",
		"Press any key to close the terminal",
		"The terminal process command `{0}{1}` failed to launch (exit code: {2})"
	],
	"vs/workbench/parts/terminal/electron-browser/terminalLinkHandler": [
		"Alt + click to follow link",
		"Cmd + click to follow link",
		"Ctrl + click to follow link"
	],
	"vs/workbench/parts/terminal/electron-browser/terminalPanel": [
		"Copy",
		"New Terminal",
		"Paste",
		"Select All",
		"Clear"
	],
	"vs/workbench/parts/terminal/electron-browser/terminalService": [
		"You can change the default terminal shell by selecting the customize button.",
		"Customize",
		"Cancel",
		"OK, Never Show Again",
		"Select your preferred terminal shell, you can change this later in your settings",
		"There is an active terminal session, do you want to kill it?",
		"There are {0} active terminal sessions, do you want to kill them?",
		"Yes",
		"Cancel"
	],
	"vs/workbench/parts/themes/electron-browser/themes.contribution": [
		"Color Theme",
		"Install Additional Color Themes...",
		"Select Color Theme (Up/Down Keys to Preview)",
		"File Icon Theme",
		"Install Additional File Icon Themes...",
		"None",
		"Disable file icons",
		"Problem setting icon theme: {0}",
		"Select File Icon Theme",
		"Generate Color Theme From Current Settings",
		"Preferences",
		"Developer"
	],
	"vs/workbench/parts/trust/electron-browser/unsupportedWorkspaceSettings.contribution": [
		"This Workspace contains settings that can only be set in User Settings. ({0})",
		"Open Workspace Settings",
		"Learn More",
		"Ignore"
	],
	"vs/workbench/parts/update/electron-browser/releaseNotesInput": [
		"Release Notes: {0}"
	],
	"vs/workbench/parts/update/electron-browser/update": [
		"Update Now",
		"Later",
		"unassigned",
		"Release Notes",
		"Release Notes",
		"Show Release Notes",
		"Download Now",
		"Never Show Again",
		"{0} for 64-bit Windows is now available!",
		"Learn More",
		"New {0} update available.",
		"There is an available update.",
		"{0} will be updated after it restarts.",
		"There are no updates currently available.",
		"Command Palette...",
		"Settings",
		"Keyboard Shortcuts",
		"Color Theme",
		"File Icon Theme",
		"Updates Not Available",
		"Checking For Updates...",
		"Download Available Update",
		"Downloading Update...",
		"Installing Update...",
		"Restart to Update...",
		"Check for Updates..."
	],
	"vs/workbench/parts/update/electron-browser/update.contribution": [
		"Release notes",
		"Update",
		"Configure whether you receive automatic updates from an update channel. Requires a restart after change."
	],
	"vs/workbench/parts/views/browser/views": [
		"{0} actions",
		"Hide from Side Bar"
	],
	"vs/workbench/parts/views/browser/viewsExtensionPoint": [
		"views must be an array",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` can be omitted or must be of type `string`",
		"Identifier of the view. Use this to register a data provider through `vscode.window.registerTreeDataProviderForView` API. Also to trigger activating your extension by registering `onView:${id}` event to `activationEvents`.",
		"The human-readable name of the view. Will be shown",
		"Condition which must be true to show this view",
		"Contributes views to the editor",
		"Explorer View",
		"Debug View",
		"`{0}` is not a valid view location"
	],
	"vs/workbench/parts/watermark/electron-browser/watermark": [
		"Show All Commands",
		"Go to File",
		"Open File",
		"Open Folder",
		"Open File or Folder",
		"Open Recent",
		"New Untitled File",
		"Toggle Terminal",
		"Find in Files",
		"Start Debugging",
		"unbound",
		"Workbench",
		"When enabled, will show the watermark tips when no editor is open."
	],
	"vs/workbench/parts/welcome/overlay/browser/welcomeOverlay": [
		"File explorer",
		"Search across files",
		"Source code management",
		"Launch and debug",
		"Manage extensions",
		"View errors and warnings",
		"Find and run all commands",
		"User Interface Overview",
		"Hide Interface Overview"
	],
	"vs/workbench/services/configuration/node/configuration": [
		"Contributes configuration settings.",
		"A summary of the settings. This label will be used in the settings file as separating comment.",
		"Description of the configuration properties.",
		"Window specific configuration, which can be configured in the User or Workspace settings.",
		"Resource specific configuration, which can be configured in the User, Workspace or Folder settings.",
		"Scope in which the configuration is applicable. Available scopes are `window` and `resource`.",
		"if set, 'configuration.type' must be set to 'object",
		"'configuration.title' must be a string",
		"Contributes default editor configuration settings by language.",
		"'configuration.properties' must be an object",
		"List of folders to be loaded in the workspace. Must be a file path. e.g. `/root/folderA` or `./folderA` for a relative path that will be resolved against the location of the workspace file.",
		"A file path. e.g. `/root/folderA` or `./folderA` for a relative path that will be resolved against the location of the workspace file.",
		"Workspace settings"
	],
	"vs/workbench/services/configuration/node/configurationEditingService": [
		"Open Settings",
		"Close",
		"Save Settings and Retry",
		"Open Settings",
		"Close",
		"Unable to write to {0} because {1} is not a registered configuration.",
		"Unable to write to Folder Settings because {0} does not support the folder resource scope.",
		"Unable to write to User Settings because {0} does not support for global scope.",
		"Unable to write to Folder Settings because no resource is provided.",
		"Unable to write to {0} because no workspace is opened. Please open a workspace first and try again.",
		"Unable to write into settings. Please open **User Settings** to correct errors/warnings in the file and try again.",
		"Unable to write into settings. Please open **Workspace Settings** to correct errors/warnings in the file and try again.",
		"Unable to write into settings because the file is dirty. Please save the **User Settings** file and try again.",
		"Unable to write into settings because the file is dirty. Please save the **Workspace Settings** file and try again.",
		"User Settings",
		"Workspace Settings",
		"Folder Settings"
	],
	"vs/workbench/services/configuration/node/jsonEditingService": [
		"Unable to write into the file. Please open the file to correct errors/warnings in the file and try again.",
		"Unable to write into the file because the file is dirty. Please save the file and try again."
	],
	"vs/workbench/services/crashReporter/common/crashReporterService": [
		"Telemetry",
		"Enable crash reports to be sent to Microsoft.\nThis option requires restart to take effect."
	],
	"vs/workbench/services/editor/browser/editorService": [
		"{0} ↔ {1}"
	],
	"vs/workbench/services/extensions/electron-browser/extensionHost": [
		"Extension host did not start in 10 seconds, it might be stopped on the first line and needs a debugger to continue.",
		"Extension host did not start in 10 seconds, that might be a problem.",
		"Error from the extension host: {0}"
	],
	"vs/workbench/services/extensions/electron-browser/extensionPoints": [
		"Failed to parse {0}: {1}.",
		"Cannot read file {0}: {1}.",
		"Failed to parse {0} or {1}: {2}.",
		"Cannot read file {0}: {1}.",
		"Couldn't find message for key {0}."
	],
	"vs/workbench/services/extensions/electron-browser/extensionService": [
		"Developer Tools",
		"Restart Extension Host",
		"Extension host terminated unexpectedly.",
		"Extension host terminated because it was not responsive.",
		"Overwriting extension {0} with {1}.",
		"Loading development extension at {0}",
		"Overwriting extension {0} with {1}."
	],
	"vs/workbench/services/files/electron-browser/fileService": [
		"The Microsoft .NET Framework 4.5 is required. Please follow the link to install it.",
		"Download .NET Framework 4.5",
		"Don't Show Again",
		"Failed to move '{0}' to the trash"
	],
	"vs/workbench/services/files/node/fileService": [
		"Invalid file resource ({0})",
		"File is directory ({0})",
		"File not modified since",
		"File too large to open",
		"File seems to be binary and cannot be opened as text",
		"File not found ({0})",
		"Unable to move/copy. File already exists at destination.",
		"Unable to move/copy. File would replace folder it is contained in.",
		"Folders cannot be copied into the workspace. Please select individual files to copy them.",
		"File too large to open",
		"File Modified Since",
		"File is Read Only"
	],
	"vs/workbench/services/keybinding/common/keybindingEditing": [
		"Unable to write because the file is dirty. Please save the **Keybindings** file and try again.",
		"Unable to write keybindings. Please open **Keybindings file** to correct errors/warnings in the file and try again.",
		"Unable to write keybindings. **Keybindings file** has an object which is not of type Array. Please open the file to clean up and try again.",
		"Place your key bindings in this file to overwrite the defaults"
	],
	"vs/workbench/services/keybinding/electron-browser/keybindingService": [
		"expected non-empty value.",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` can be omitted or must be of type `string`",
		"property `{0}` can be omitted or must be of type `string`",
		"property `{0}` can be omitted or must be of type `string`",
		"property `{0}` can be omitted or must be of type `string`",
		"Identifier of the command to run when keybinding is triggered.",
		"Key or key sequence (separate keys with plus-sign and sequences with space, e.g Ctrl+O and Ctrl+L L for a chord).",
		"Mac specific key or key sequence.",
		"Linux specific key or key sequence.",
		"Windows specific key or key sequence.",
		"Condition when the key is active.",
		"Contributes keybindings.",
		"Invalid `contributes.{0}`: {1}",
		"Here are other available commands: ",
		"Keybindings configuration",
		"Key or key sequence (separated by space)",
		"Name of the command to execute",
		"Condition when the key is active.",
		"Arguments to pass to the command to execute.",
		"Keyboard",
		"Controls the dispatching logic for key presses to use either `keydown.code` (recommended) or `keydown.keyCode`."
	],
	"vs/workbench/services/message/browser/messageList": [
		"Error: {0}",
		"Warning: {0}",
		"Info: {0}",
		"Error",
		"Warn",
		"Info",
		"Close"
	],
	"vs/workbench/services/message/electron-browser/messageService": [
		"&&Yes",
		"Cancel"
	],
	"vs/workbench/services/mode/common/workbenchModeService": [
		"Contributes language declarations.",
		"ID of the language.",
		"Name aliases for the language.",
		"File extensions associated to the language.",
		"File names associated to the language.",
		"File name glob patterns associated to the language.",
		"Mime types associated to the language.",
		"A regular expression matching the first line of a file of the language.",
		"A relative path to a file containing configuration options for the language.",
		"Invalid `contributes.{0}`. Expected an array.",
		"Empty value for `contributes.{0}`",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` can be omitted and must be of type `string[]`",
		"property `{0}` can be omitted and must be of type `string[]`",
		"property `{0}` can be omitted and must be of type `string`",
		"property `{0}` can be omitted and must be of type `string`",
		"property `{0}` can be omitted and must be of type `string[]`",
		"property `{0}` can be omitted and must be of type `string[]`"
	],
	"vs/workbench/services/progress/browser/progressService2": [
		"{0} - {1}",
		"{0}: {1}"
	],
	"vs/workbench/services/textMate/electron-browser/TMGrammars": [
		"Contributes textmate tokenizers.",
		"Language identifier for which this syntax is contributed to.",
		"Textmate scope name used by the tmLanguage file.",
		"Path of the tmLanguage file. The path is relative to the extension folder and typically starts with './syntaxes/'.",
		"A map of scope name to language id if this grammar contains embedded languages.",
		"List of language scope names to which this grammar is injected to."
	],
	"vs/workbench/services/textMate/electron-browser/TMSyntax": [
		"Unknown language in `contributes.{0}.language`. Provided value: {1}",
		"Expected string in `contributes.{0}.scopeName`. Provided value: {1}",
		"Expected string in `contributes.{0}.path`. Provided value: {1}",
		"Invalid value in `contributes.{0}.injectTo`. Must be an array of language scope names. Provided value: {1}",
		"Invalid value in `contributes.{0}.embeddedLanguages`. Must be an object map from scope name to language. Provided value: {1}",
		"Expected `contributes.{0}.path` ({1}) to be included inside extension's folder ({2}). This might make the extension non-portable.",
		"No TM Grammar registered for this language."
	],
	"vs/workbench/services/textfile/common/textFileEditorModel": [
		"The file is dirty. Please save it first before reopening it with another encoding.",
		"Failed to save '{0}': {1}"
	],
	"vs/workbench/services/textfile/common/textFileService": [
		"Files could not be backed up (Error: {0}), try saving your files to exit."
	],
	"vs/workbench/services/textfile/electron-browser/textFileService": [
		"Do you want to save the changes you made to {0}?",
		"Do you want to save the changes to the following {0} files?",
		"...1 additional file not shown",
		"...{0} additional files not shown",
		"&&Save All",
		"&&Save",
		"Do&&n't Save",
		"Cancel",
		"Your changes will be lost if you don't save them.",
		"All Files",
		"No Extension"
	],
	"vs/workbench/services/themes/common/colorThemeSchema": [
		"Colors and styles for the token.",
		"Foreground color for the token.",
		"Font style of the rule: One or a combination of 'italic', 'bold' and 'underline'",
		"Font style must be a combination of 'italic', 'bold' and 'underline'",
		"Description of the rule.",
		"Scope selector against which this rule matches.",
		"Path to a tmTheme file (relative to the current file).",
		"Colors for syntax highlighting"
	],
	"vs/workbench/services/themes/common/fileIconThemeSchema": [
		"The folder icon for expanded folders. The expanded folder icon is optional. If not set, the icon defined for folder will be shown.",
		"The folder icon for collapsed folders, and if folderExpanded is not set, also for expanded folders.",
		"The default file icon, shown for all files that don't match any extension, filename or language id.",
		"Associates folder names to icons. The object key is is the folder name, not including any path segments. No patterns or wildcards are allowed. Folder name matching is case insensitive.",
		"The ID of the icon definition for the association.",
		"Associates folder names to icons for expanded folders. The object key is is the folder name, not including any path segments. No patterns or wildcards are allowed. Folder name matching is case insensitive.",
		"The ID of the icon definition for the association.",
		"Associates file extensions to icons. The object key is is the file extension name. The extension name is the last segment of a file name after the last dot (not including the dot). Extensions are compared case insensitive.",
		"The ID of the icon definition for the association.",
		"Associates file names to icons. The object key is is the full file name, but not including any path segments. File name can include dots and a possible file extension. No patterns or wildcards are allowed. File name matching is case insensitive.",
		"The ID of the icon definition for the association.",
		"Associates languages to icons. The object key is the language id as defined in the language contribution point.",
		"The ID of the icon definition for the association.",
		"Fonts that are used in the icon definitions.",
		"The ID of the font.",
		"The locations of the font.",
		"The font path, relative to the current icon theme file.",
		"The format of the font.",
		"The weight of the font.",
		"The style of the font.",
		"The default size of the font.",
		"Description of all icons that can be used when associating files to icons.",
		"An icon definition. The object key is the ID of the definition.",
		"When using a SVG or PNG: The path to the image. The path is relative to the icon set file.",
		"When using a glyph font: The character in the font to use.",
		"When using a glyph font: The color to use.",
		"When using a font: The font size in percentage to the text font. If not set, defaults to the size in the font definition.",
		"When using a font: The id of the font. If not set, defaults to the first font definition.",
		"Optional associations for file icons in light color themes.",
		"Optional associations for file icons in high contrast color themes."
	],
	"vs/workbench/services/themes/electron-browser/colorThemeData": [
		"Problems parsing JSON theme file: {0}",
		"Problem parsing color theme file: {0}. Property 'colors' is not of type 'object'.",
		"Problem parsing color theme file: {0}. Property 'tokenColors' should be either an array specifying colors or a path to a TextMate theme file",
		"Problem parsing tmTheme file: {0}. 'settings' is not array.",
		"Problems parsing tmTheme file: {0}",
		"Problems loading tmTheme file {0}: {1}"
	],
	"vs/workbench/services/themes/electron-browser/workbenchThemeService": [
		"Contributes textmate color themes.",
		"Id of the icon theme as used in the user settings.",
		"Label of the color theme as shown in the UI.",
		"Base theme defining the colors around the editor: 'vs' is the light color theme, 'vs-dark' is the dark color theme. 'hc-black' is the dark high contrast theme.",
		"Path of the tmTheme file. The path is relative to the extension folder and is typically './themes/themeFile.tmTheme'.",
		"Contributes file icon themes.",
		"Id of the icon theme as used in the user settings.",
		"Label of the icon theme as shown in the UI.",
		"Path of the icon theme definition file. The path is relative to the extension folder and is typically './icons/awesome-icon-theme.json'.",
		"New theme settings have been added to the user settings. Backup available at {0}.",
		"Unable to load {0}: {1}",
		"Extension point `{0}` must be an array.",
		"Expected string in `contributes.{0}.path`. Provided value: {1}",
		"Expected `contributes.{0}.path` ({1}) to be included inside extension's folder ({2}). This might make the extension non-portable.",
		"Extension point `{0}` must be an array.",
		"Expected string in `contributes.{0}.path`. Provided value: {1}",
		"Expected string in `contributes.{0}.id`. Provided value: {1}",
		"Expected `contributes.{0}.path` ({1}) to be included inside extension's folder ({2}). This might make the extension non-portable.",
		"Unable to load {0}",
		"Problems parsing file icons file: {0}",
		"Specifies the color theme used in the workbench.",
		"Theme is unknown or not installed.",
		"Specifies the icon theme used in the workbench or 'null' to not show any file icons.",
		"No file icons",
		"File icon theme is unknown or not installed.",
		"Overrides colors from the currently selected color theme.",
		"The setting is no longer experimental and has been renamed to 'workbench.colorCustomizations'",
		"Use 'workbench.colorCustomizations' instead",
		"Overrides editor colors and font style from the currently selected color theme.",
		"Sets the colors and styles for comments",
		"Sets the colors and styles for strings literals.",
		"Sets the colors and styles for keywords.",
		"Sets the colors and styles for number literals.",
		"Sets the colors and styles for type declarations and references.",
		"Sets the colors and styles for functions declarations and references.",
		"Sets the colors and styles for variables declarations and references.",
		"Sets colors and styles using textmate theming rules (advanced)."
	]
});