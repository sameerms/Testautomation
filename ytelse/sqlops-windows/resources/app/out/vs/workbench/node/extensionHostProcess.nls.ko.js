/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/workbench/node/extensionHostProcess.nls.ko", {
	"vs/base/common/processes": [
		"오류: 실행 파일 정보에서는 문자열 형식의 명령을 정의해야 합니다.",
		"경고: isShellCommand는 boolean 형식이어야 합니다. {0} 값을 무시합니다.",
		"경고: args는 string[] 형식이어야 합니다. {0} 값을 무시합니다.",
		"경고: options.cwd는 string 형식이어야 합니다. {0} 값을 무시합니다.",
	],
	"vs/base/common/severity": [
		"오류",
		"경고",
		"정보",
	],
	"vs/base/node/processes": [
		"UNC 드라이브에서 셸 명령을 실행할 수 없습니다.",
	],
	"vs/editor/common/config/editorOptions": [
		"지금은 편집기를 사용할 수 없습니다. Alt+F1을 눌러 옵션을 보세요.",
		"편집기 콘텐츠",
	],
	"vs/editor/common/modes/modesRegistry": [
		"일반 텍스트",
	],
	"vs/workbench/api/node/extHostDiagnostics": [
		"{0}개의 추가 오류 및 경고를 표시하지 않습니다.",
	],
	"vs/workbench/api/node/extHostExtensionActivator": [
		"확장 `{1}`을(를) 활성화하지 못했습니다. 이유: 알 수 없는 종속성 `{0}`.",
		"확장 `{1}`을(를) 활성화하지 못했습니다. 이유: 종속성 `{0}`이(가) 활성화되지 않았습니다.",
		"확장 `{0}`을(를) 활성화하지 못했습니다. 이유: 종속성 수준이 10개가 넘음(종속성 루프일 가능성이 높음).",
		"확장 `{0}` 활성화 실패: {1}.",
	],
	"vs/workbench/api/node/extHostTask": [
		"{0}: {1}",
	],
	"vs/workbench/api/node/extHostTreeViews": [
		"ID가 \'{0}\'인 등록된 트리 뷰가 없습니다.",
		"ID가 \'{0}\'인 등록된 트리 뷰가 없습니다.",
		"ID가 \'{0}\'인 트리 항목을 찾을 수 없습니다.",
		"{0} 요소가 이미 등록되어 있습니다.",
	],
	"vs/workbench/node/extensionHostMain": [
		"경로 {0}이(가) 유효한 확장 Test Runner를 가리키지 않습니다.",
	]
});