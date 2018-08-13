/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/workbench/node/extensionHostProcess.nls.es", {
	"vs/base/common/processes": [
		"Error: La información del ejecutable debe definir un comando de tipo cadena.",
		"Advertencia: isShellCommand debe ser de tipo booleano. Se ignora el valor {0}.",
		"Advertencia: Los argumentos deben ser de tipo \"string[]\". Se ignora el valor {0}.",
		"Advertencia: options.cwd debe ser de tipo cadena. Se ignora el valor {0}.",
	],
	"vs/base/common/severity": [
		"Error",
		"Advertencia",
		"Información",
	],
	"vs/base/node/processes": [
		"No se puede ejecutar un comando shell en una unidad UNC.",
	],
	"vs/editor/common/config/editorOptions": [
		"No se puede acceder al editor en este momento. Presione Alt+F1 para ver opciones.",
		"Contenido del editor",
	],
	"vs/editor/common/modes/modesRegistry": [
		"Texto sin formato",
	],
	"vs/workbench/api/node/extHostDiagnostics": [
		"No se mostrarán {0} errores y advertencias adicionales.",
	],
	"vs/workbench/api/node/extHostExtensionActivator": [
		"La extensión `{1}` no se pudo activar. Motivo: dependencia `{0}` desconocida.",
		"La extensión `{1}` no se pudo activar. Motivo: La dependencia `{0}` no se pudo activar.",
		"La extensión `{0}` no se pudo activar. Motivo: más de 10 niveles de dependencias (probablemente sea un bucle de dependencias).",
		"Error al activar la extensión `{0}`: {1}.",
	],
	"vs/workbench/api/node/extHostTask": [
		"{0}: {1}",
	],
	"vs/workbench/api/node/extHostTreeViews": [
		"No se ha registrado ninga vista del árbol con id \'{0}\'.",
		"No se ha registrado ninga vista del árbol con id \'{0}\'.",
		"No se encontró ningún item del árbol con id \'{0}\'.",
		"El elemento \'{0}\' ya está registrado",
	],
	"vs/workbench/node/extensionHostMain": [
		"La ruta de acceso {0} no apunta a un ejecutor de pruebas de extensión.",
	]
});