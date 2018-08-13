var esaks = esaks || {};
esaks.utils = esaks.utils || {};

esaks.utils.Logger = (function (settings) {

    var levels = {
        fatal: 'FATAL',
        error: 'ERROR',
        warn: 'WARN ',
        info: 'INFO ',
        debug: 'DEBUG'
    };

    function showLog(numberOfEntities) {
        var log = JSON.parse(window.localStorage.log || '[]');

        for (var i = log.length - (numberOfEntities || 50); i < log.length; i++) {
            console.log('[' + log[i].level + ']' + '\t ' + log[i].timestamp + '\t ' + log[i].loggerName + '\t \t ' + log[i].message);
        }
        
        console.log('  ');
        console.log('Total number of entries: ' + log.length);
    };
    
    function clearLog() {
        var log = JSON.parse(window.localStorage.log || '[]');
        window.localStorage.log = '[]';
        console.log('Deleted ' + log.length + ' entries.');
    };

    function Logger(loggerName, doDebugLogging) {
        var self = this;
        
        self._doDebugLogging = doDebugLogging === undefined ? false : doDebugLogging;
        self._loggerName = loggerName;
    }
    
    Logger.prototype.writeToLocaleStorage = function(level, msg) {
        if (settings && settings.getSetting('storeLog') === true && window.localStorage !== undefined) {
            var logString = window.localStorage.log;
            var log = JSON.parse(logString === '' ? '[]' : logString || '[]');

            if (log.length > 1000) {
                log.splice(0, 500);
            }

            log.push({ level: level, timestamp: moment().format('HH:mm:ss DD.MM.YY'), loggerName: this._loggerName, message: msg });
            window.localStorage.log = JSON.stringify(log);
        }
    };
    
    Logger.prototype.writeToScreen = function(level, msg) {
        if (settings && settings.getSetting('debugMode', false) && (level === levels.error || level === levels.fatal || level === levels.warn)) {

            var levelClass = level === levels.error ? 'danger' : 'warning';

            var el = $('<div class="alert alert-' + levelClass + ' alert-dismissable">' +
                       '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + 
                       '<strong>' + level + '!</strong> ' + msg + 
                       '</div>');
            
            el.css({ 'position': 'fixed', 'right': '15px', 'width': '250px', 'top': '15px', 'z-index': 9999999999, 'opacity': '0.9', 'box-shadow': '0 0 10px #000' });

            el.mouseenter(function () { clearTimeout(timeout); });

            var timeout = setTimeout(function () { el.remove(); }, 5000);
            
            $('body').append(el);
        }
    };
    
    Logger.prototype.writeToLog = function (level, msg) {
        var self = this,
            logMessage = self._loggerName + '\t[' + level + ']\t' + msg;
        
        if (window.console != undefined) {
            if (level === levels.fatal && console.error) {
                throw logMessage;
            } else if (level === levels.error && console.error) {
                console.error(logMessage);
            } else if (level === levels.warn && console.warn) {
                console.warn(logMessage);
            } else if (level === levels.info && console.info) {
                console.info(logMessage);
            } else if (level === levels.debug && console.debug) {
                console.debug(logMessage);
            } else {
                console.log(logMessage);
            }
        } else if (window.opera !== undefined) {
            if (level === levels.error && opera.postError) {
                opera.postError(logMessage);
            } else {
                opera.postMessage(logMessage);
            }

        } else {
            if (level === levels.error || level === levels.fatal) {
                throw logMessage;
            }
        }

        self.writeToLocaleStorage(level, msg);
        self.writeToScreen(level, msg);
    };

    Logger.prototype.debug = function (msg) {
        var self = this;
        if (settings && settings.getSetting('debugMode') || self._doDebugLogging) {
            this.writeToLog(levels.debug, msg);
        }
    };
    
    Logger.prototype.warn = function (msg) {
        this.writeToLog(levels.warn, msg);
    };
    
    Logger.prototype.info = function (msg) {
        this.writeToLog(levels.info, msg);
    };
    
    Logger.prototype.error = function (msg) {
        this.writeToLog(levels.error, msg);
    };
    
    Logger.prototype.fatal = function(msg) {
        this.writeToLog(levels.fatal, msg);
    };    

    Logger.showLog = showLog;
    Logger.clearLog = clearLog;

    if (settings && settings.getSetting('debugMode') === true) {
        window.esaks.showLog = showLog;
        window.esaks.clearLog = clearLog;
    }
    
    return Logger;
}(esaks.settings));