/* ESAKS function dispatcher
 *
 * Usage:
 *
 * var dispatcher = new Dispatcher(500);
 * var status;
 *
 * dispatcher.dispatch('save', function() {
 *      $.get(url, function(data) {
 *          status = data.status;
 *      });
 * });
 *
 */

var esaks = esaks || {};
esaks.utils = esaks.utils || {};

esaks.utils.Dispatcher = (function (Logger) {
    'use strict';

    function Dispatcher(delay) {
        var self = this,
            logger = new Logger('Dispatcher'),
            dispatchList = [];
        
        if (delay === undefined) {
            delay = 200;
        }

        self.clearDispatchQueue = function(name) {
            if (dispatchList[name]) {
                logger.debug('Removing "' + name + '" from list.');
                clearTimeout(dispatchList[name]);
            }
        };
        
        self.dispatch = function(name, func, timeout) {
            self.clearDispatchQueue(name);

            dispatchList[name] = setTimeout(function() {
                delete dispatchList[name];
                logger.debug('Dispatching "' + name + '".');
                func.call();
            }, timeout || delay);
        };
    }

    return Dispatcher;
})(esaks.utils.Logger);