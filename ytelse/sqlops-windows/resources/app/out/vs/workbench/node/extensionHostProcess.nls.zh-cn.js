/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/workbench/node/extensionHostProcess.nls.zh-cn", {
	"vs/base/common/processes": [
		"错误: 可执行信息必须定义字符串类型的命令。",
		"警告: isShellCommand 的类型必须为布尔型。正在忽略值 {0}。",
		"警告: args 的类型必须为 string[]。正在忽略值 {0}。",
		"警告: options.cwd 的类型必须为字符串。正在忽略值 {0}。",
	],
	"vs/base/common/severity": [
		"错误",
		"警告",
		"信息",
	],
	"vs/base/node/processes": [
		"无法对 UNC 驱动器执行 shell 命令。",
	],
	"vs/editor/common/config/editorOptions": [
		"现在无法访问编辑器。按 Alt+F1  显示选项。",
		"编辑器内容",
	],
	"vs/editor/common/modes/modesRegistry": [
		"纯文本",
	],
	"vs/workbench/api/node/extHostDiagnostics": [
		"未显示 {0} 个进一步的错误和警告。",
	],
	"vs/workbench/api/node/extHostExtensionActivator": [
		"无法激活扩展”{1}“。原因: 未知依赖关系“{0}”。",
		"无法激活扩展”{1}“。原因: 无法激活依赖关系”{0}“。",
		"无法激活扩展”{0}“。原因: 依赖关系多于 10 级(最可能是依赖关系循环)。",
		"激活扩展“{0}”失败: {1}。",
	],
	"vs/workbench/api/node/extHostTask": [
		"{0}: {1}",
	],
	"vs/workbench/api/node/extHostTreeViews": [
		"没有注册 ID 为“{0}”的树形图。",
		"没有注册 ID 为“{0}”的树形图。",
		"没有在树中找到 ID 为“{0}”的项目。",
		"已注册元素 {0}。",
	],
	"vs/workbench/node/extensionHostMain": [
		"路径 {0} 未指向有效的扩展测试运行程序。",
	]
});