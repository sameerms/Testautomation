/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const nls = require("vscode-nls");
const localize = nls.config(process.env.VSCODE_NLS_CONFIG)(__filename);
const vscode_1 = require("vscode");
const git_1 = require("./git");
const model_1 = require("./model");
const commands_1 = require("./commands");
const contentProvider_1 = require("./contentProvider");
const askpass_1 = require("./askpass");
const util_1 = require("./util");
const vscode_extension_telemetry_1 = require("vscode-extension-telemetry");
function init(context, disposables) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, version, aiKey } = require(context.asAbsolutePath('./package.json'));
        const telemetryReporter = new vscode_extension_telemetry_1.default(name, version, aiKey);
        disposables.push(telemetryReporter);
        const outputChannel = vscode_1.window.createOutputChannel('Git');
        disposables.push(outputChannel);
        const config = vscode_1.workspace.getConfiguration('git');
        const enabled = config.get('enabled') === true;
        const pathHint = vscode_1.workspace.getConfiguration('git').get('path');
        const info = yield git_1.findGit(pathHint);
        const askpass = new askpass_1.Askpass();
        const env = yield askpass.getEnv();
        const git = new git_1.Git({ gitPath: info.path, version: info.version, env });
        const model = new model_1.Model(git);
        disposables.push(model);
        const onRepository = () => vscode_1.commands.executeCommand('setContext', 'gitOpenRepositoryCount', `${model.repositories.length}`);
        model.onDidOpenRepository(onRepository, null, disposables);
        model.onDidCloseRepository(onRepository, null, disposables);
        onRepository();
        if (!enabled) {
            const commandCenter = new commands_1.CommandCenter(git, model, outputChannel, telemetryReporter);
            disposables.push(commandCenter);
            return;
        }
        outputChannel.appendLine(localize(0, null, info.version, info.path));
        const onOutput = str => outputChannel.append(str);
        git.onOutput.addListener('log', onOutput);
        disposables.push(util_1.toDisposable(() => git.onOutput.removeListener('log', onOutput)));
        disposables.push(new commands_1.CommandCenter(git, model, outputChannel, telemetryReporter), new contentProvider_1.GitContentProvider(model));
        yield checkGitVersion(info);
    });
}
function activate(context) {
    const disposables = [];
    context.subscriptions.push(new vscode_1.Disposable(() => vscode_1.Disposable.from(...disposables).dispose()));
    init(context, disposables)
        .catch(err => console.error(err));
}
exports.activate = activate;
function checkGitVersion(info) {
    return __awaiter(this, void 0, void 0, function* () {
        // {{SQL CARBON EDIT}}
        // remove Git version check on since for Carbon
        return;
        /*
        const config = workspace.getConfiguration('git');
        const shouldIgnore = config.get<boolean>('ignoreLegacyWarning') === true;
    
        if (shouldIgnore) {
            return;
        }
    
        if (!/^[01]/.test(info.version)) {
            return;
        }
    
        const update = localize('updateGit', "Update Git");
        const neverShowAgain = localize('neverShowAgain', "Don't show again");
    
        const choice = await window.showWarningMessage(
            localize('git20', "You seem to have git {0} installed. Code works best with git >= 2", info.version),
            update,
            neverShowAgain
        );
    
        if (choice === update) {
            commands.executeCommand('vscode.open', Uri.parse('https://git-scm.com/'));
        } else if (choice === neverShowAgain) {
            await config.update('ignoreLegacyWarning', true, true);
        }
        */
    });
}
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/8a3011756318a2ded1e6e84332230a2b2bf9c544/extensions\git\out/main.js.map
