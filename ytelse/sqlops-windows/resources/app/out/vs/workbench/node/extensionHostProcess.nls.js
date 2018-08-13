/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
/*---------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/workbench/node/extensionHostProcess.nls", {
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
	"vs/editor/common/config/editorOptions": [
		"The editor is not accessible at this time. Press Alt+F1 for options.",
		"Editor content"
	],
	"vs/editor/common/modes/modesRegistry": [
		"Plain Text"
	],
	"vs/workbench/api/node/extHostDiagnostics": [
		"Not showing {0} further errors and warnings."
	],
	"vs/workbench/api/node/extHostExtensionActivator": [
		"Extension `{1}` failed to activate. Reason: unknown dependency `{0}`.",
		"Extension `{1}` failed to activate. Reason: dependency `{0}` failed to activate.",
		"Extension `{0}` failed to activate. Reason: more than 10 levels of dependencies (most likely a dependency loop).",
		"Activating extension `{0}` failed: {1}."
	],
	"vs/workbench/api/node/extHostTask": [
		"{0}: {1}"
	],
	"vs/workbench/api/node/extHostTreeViews": [
		"No tree view with id '{0}' registered.",
		"No tree view with id '{0}' registered.",
		"No tree item with id '{0}' found.",
		"Element {0} is already registered"
	],
	"vs/workbench/node/extensionHostMain": [
		"Path {0} does not point to a valid extension test runner."
	]
});