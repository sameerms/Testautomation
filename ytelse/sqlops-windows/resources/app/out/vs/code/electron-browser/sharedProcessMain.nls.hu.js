/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/code/electron-browser/sharedProcessMain.nls.hu", {
	"vs/base/common/severity": [
		"Hiba",
		"Figyelmeztetés",
		"Információ",
	],
	"vs/base/node/zip": [
		"{0} nem található a zipen belül.",
	],
	"vs/platform/configuration/common/configurationRegistry": [
		"Felülírt alapértelmezett konfigurációk",
		"A szerkesztő beállításainak felülírása a(z) {0} nyelvre vonatkozóan",
		"A szerkesztő beállításainak felülírása egy adott nyelvre vonatkozóan",
		"A(z) \'{0}\' nem regisztrálható. Ez a beállítás illeszkedik a \'\\\\[.*\\\\]$\' mintára, ami a nyelvspecifikus szerkesztőbeállításokhoz van használva. Használja a \'configurationDefaults\' szolgáltatási lehetőséget.",
		"A(z) \'{0}\' nem regisztrálható: ez a tulajdonság már regisztrálva van.",
	],
	"vs/platform/extensionManagement/common/extensionManagement": [
		"Kiegészítők",
		"Beállítások",
	],
	"vs/platform/extensionManagement/node/extensionGalleryService": [
		"Kiegészítő nem található",
		"A(z) {0} kiegészítőnek nincs ezzel a Code-verzióval kompatibilis változata.",
	],
	"vs/platform/extensionManagement/node/extensionManagementService": [
		"A kiegészítő érvénytelen: a package.json nem egy JSON-fájl.",
		"Indítsa újra a Code-ot a(z) {0} újratelepítése előtt.",
		"Indítsa újra a Code-ot a(z) {0} újratelepítése előtt.",
		"A(z) \'{0}\' teleítése során annak függőségei is telepítve lesznek. Szeretné folytatni?",
		"Igen",
		"Nem",
		"Indítsa újra a Code-ot a(z) {0} újratelepítése előtt.",
		"Csak a(z) \'{0}\' kiegészítőt szeretné eltávolítani vagy annak függőségeit is?",
		"Csak ezt",
		"Mindent",
		"Mégse",
		"Biztosan szeretné eltávolítani a(z) \'{0}\' kiegészítőt?",
		"OK",
		"Mégse",
		"Nem sikerült eltávolítani a(z) \'{0}\' kiegészítőt: a(z) \'{1}\' kiegészítő függ tőle.",
		"Nem sikerült eltávolítani a(z) \'{0}\' kiegészítőt: a(z) \'{1}\' és \'{2}\' kiegészítők függnek tőle.",
		"Nem sikerült eltávolítani a(z) \'{0}\' kiegészítőt: a(z) \'{1}\', \'{2}\' és más kiegészítők függnek tőle.",
		"Nem sikerült megtalálni a kiegészítőt",
	],
	"vs/platform/extensions/node/extensionValidator": [
		"Nem sikerült feldolgozni az `engines.vscode` beállítás értékét ({0}). Használja például a következők egyikét: ^0.10.0, ^1.2.3, ^0.11.0, ^0.10.x stb.",
		"Az `engines.vscode` beállításban megadott érték ({0}) nem elég konkrét. A vscode 1.0.0 előtti verzióihoz legalább a kívánt fő- és alverziót is meg kell adni. Pl.: ^0.10.0, 0.10.x, 0.11.0 stb.",
		"Az `engines.vscode` beállításban megadott érték ({0}) nem elég konkrét. A vscode 1.0.0 utáni verzióihoz legalább a kívánt főverziót meg kell adni. Pl.: ^1.10.0, 1.10.x, 1.x.x, 2.x.x stb.",
		"A kiegészítő nem kompatibilis a Code {0} verziójával. A következő szükséges hozzá: {1}.",
		"A kiegészítő leírása üres",
		"a(z) `{0}` tulajdonság kötelező és `string` típusúnak kell lennie",
		"a(z) `{0}` tulajdonság kötelező és `string` típusúnak kell lennie",
		"a(z) `{0}` tulajdonság kötelező és `string` típusúnak kell lennie",
		"a(z) `{0}` tulajdonság kötelező és `object` típusúnak kell lennie",
		"a(z) `{0}` tulajdonság kötelező és `string` típusúnak kell lennie",
		"a(z) `{0}` tulajdonság elhagyható vagy `string[]` típusúnak kell lennie",
		"a(z) `{0}` tulajdonság elhagyható vagy `string[]` típusúnak kell lennie",
		"a(z) `{0}` és `{1}` megadása kötelező vagy mindkettőt el kell hagyni",
		"a(z) `{0}` tulajdonság elhagyható vagy `string` típusúnak kell lennie",
		"A `main` ({0}) nem a kiegészítő mappáján belül található ({1}). Emiatt előfordulhat, hogy a kiegészítő nem lesz hordozható.",
		"a(z) `{0}` és `{1}` megadása kötelező vagy mindkettőt el kell hagyni",
		"A kiegészítő verziója nem semver-kompatibilis.",
	],
	"vs/platform/message/common/message": [
		"Bezárás",
		"Később",
		"Mégse",
	],
	"vs/platform/request/node/request": [
		"HTTP",
		"A használni kívánt proxybeállítás. Ha nincs beállítva, a http_proxy és a https_proxy környezeti változókból lesz átvéve",
		"A proxyszerver tanúsítványa hitelesítve legyen-e a megadott hitelesítésszolgáltatóknál.",
		"Minden hálózati kérés \'Proxy-Authorization\' fejlécében küldendő érték.",
	],
	"vs/platform/telemetry/common/telemetryService": [
		"Telemetria",
		"Használati adatok és hibák küldésének engedélyezése a Microsoft felé.",
	]
});