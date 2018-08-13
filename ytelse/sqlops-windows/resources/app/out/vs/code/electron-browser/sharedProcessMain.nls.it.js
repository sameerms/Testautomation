/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/code/electron-browser/sharedProcessMain.nls.it", {
	"vs/base/common/severity": [
		"Errore",
		"Avviso",
		"Informazioni",
	],
	"vs/base/node/zip": [
		"{0} non è stato trovato all\'interno del file ZIP.",
	],
	"vs/platform/configuration/common/configurationRegistry": [
		"Override configurazione predefinita",
		"Consente di configurare le impostazioni dell\'editor di cui eseguire l\'override per il linguaggio {0}.",
		"Consente di configurare le impostazioni dell\'editor di cui eseguire l\'override per un linguaggio.",
		"Non è possibile registrare \'{0}\'. Corrisponde al criterio di proprietà \'\\\\[.*\\\\]$\' per la descrizione delle impostazioni dell\'editor specifiche del linguaggio. Usare il contributo \'configurationDefaults\'.",
		"Non è possibile registrare \'{0}\'. Questa proprietà è già registrata.",
	],
	"vs/platform/extensionManagement/common/extensionManagement": [
		"Estensioni",
		"Preferenze",
	],
	"vs/platform/extensionManagement/node/extensionGalleryService": [
		"L\'estensione non è stata trovata",
		"Non è stata trovata una versione di {0} compatibile con questa versione di Visual Studio Code.",
	],
	"vs/platform/extensionManagement/node/extensionManagementService": [
		"Estensione non valida: package.json non è un file JSON.",
		"Riavviare Code prima di reinstallare {0}.",
		"Riavviare Code prima di reinstallare {0}.",
		"Se si installa \'{0}\', verranno installate anche le relative dipendenze. Continuare?",
		"Sì",
		"No",
		"Riavviare Code prima di reinstallare {0}.",
		"Disinstallare solo \'{0}\' o anche le relative dipendenze?",
		"Solo",
		"Tutto",
		"Annulla",
		"Disinstallare \'{0}\'?",
		"OK",
		"Annulla",
		"Non è possibile disinstallare l\'estensione \'{0}\'. L\'estensione \'{1}\' dipende da tale estensione.",
		"Non è possibile disinstallare l\'estensione \'{0}\'. Le estensioni \'{1}\' e \'{2}\' dipendono da tale estensione.",
		"Non è possibile disinstallare l\'estensione \'{0}\'. Alcune estensioni, tra cui \'{1}\' e \'{2}\' dipendono da tale estensione.",
		"L\'estensione non è stata trovata",
	],
	"vs/platform/extensions/node/extensionValidator": [
		"Non è stato possibile analizzare il valore {0} di `engines.vscode`. Usare ad esempio: ^0.10.0, ^1.2.3, ^0.11.0, ^0.10.x e così via.",
		"La versione specificata in `engines.vscode` ({0}) non è abbastanza specifica. Per le versioni di vscode precedenti alla 1.0.0, definire almeno le versioni principale e secondaria desiderate, ad esempio ^0.10.0, 0.10.x, 0.11.0 e così via.",
		"La versione specificata in `engines.vscode` ({0}) non è abbastanza specifica. Per le versioni di vscode successive alla 1.0.0, definire almeno la versione principale desiderata, ad esempio ^1.10.0, 1.10.x, 1.x.x, 2.x.x e così via.",
		"L\'estensione non è compatibile con Visual Studio Code {0}. Per l\'estensione è richiesto: {1}.",
		"La descrizione dell\'estensione restituita è vuota",
		"la proprietà `{0}` è obbligatoria e deve essere di tipo `string`",
		"la proprietà `{0}` è obbligatoria e deve essere di tipo `string`",
		"la proprietà `{0}` è obbligatoria e deve essere di tipo `string`",
		"la proprietà `{0}` è obbligatoria e deve essere di tipo `object`",
		"la proprietà `{0}` è obbligatoria e deve essere di tipo `string`",
		"la proprietà `{0}` può essere omessa o deve essere di tipo `string[]`",
		"la proprietà `{0}` può essere omessa o deve essere di tipo `string[]`",
		"le proprietà `{0}` e `{1}` devono essere specificate o omesse entrambi",
		"la proprietà `{0}` può essere omessa o deve essere di tipo `string`",
		"Valore previsto di `main` ({0}) da includere nella cartella dell\'estensione ({1}). L\'estensione potrebbe non essere più portatile.",
		"le proprietà `{0}` e `{1}` devono essere specificate o omesse entrambi",
		"La versione dell\'estensione non è compatibile con semver.",
	],
	"vs/platform/message/common/message": [
		"Chiudi",
		"In seguito",
		"Annulla",
	],
	"vs/platform/request/node/request": [
		"HTTP",
		"Impostazione proxy da usare. Se non è impostata, verrà ottenuta dalle variabili di ambiente http_proxy e https_proxy",
		"Indica se il certificato del server proxy deve essere verificato in base all\'elenco di CA specificate.",
		"Valore da inviare come intestazione \'Proxy-Authorization\' per ogni richiesta di rete.",
	],
	"vs/platform/telemetry/common/telemetryService": [
		"Telemetria",
		"Consente l\'invio di errori e dati sull\'utilizzo a Microsoft.",
	]
});