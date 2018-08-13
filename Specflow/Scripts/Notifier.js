/* Notifier. Pub/sub for esaks */

var esaks = esaks || {};
esaks.utils = esaks.utils || {};

esaks.utils.Notifier = (function () {
    'use strict';

    function Notifier() {
        var self = this,
            _listenerList = [],
            _logger = new esaks.utils.Logger('Notifier');

        function Notify(name, func, uniqueId) {
            this.hash = hashStr(name);
            this.name = name;
            this.func = func;
            this.uniqueId = uniqueId;
        }

        self.showListeners = function (item) {
            if (item) {
                var listener = _listenerList[item];

                console.log('Name: ' + listener.name);
                console.log('Callback:\n' + listener.func.toString());
                return;
            }

            for (var i in _listenerList) {
                console.log(i + ' - Listener name: ' + _listenerList[i].name);
            }

            console.log(' ');
            console.log('Number of listeners: ' + _listenerList.length + '. For more information about a listener, specify the ID.');
        };

        self.publish = function (key, data) {
            var i,
                hashkey = hashStr(key),
                length = _listenerList.length;

            _logger.debug('Publishing key ' + key);

            for (i = 0; i < length; i++) {
                if (_listenerList[i] === undefined || _listenerList[i].func === undefined) {
                    _logger.debug('Listener for message ' + key + ' undefined. Removing from listener list.');
                    _listenerList.splice(i, 1);
                    i--;
                    length--;
                } else if (_listenerList[i].hash === hashkey) {
                    _listenerList[i].func.call(data, data);
                }
            }
        };

        self.removeAllSubscribers = function (name) {
            var i,
                length = _listenerList.length;

            for (i = 0; i < length; i += 1) {
                if (_listenerList[i] !== undefined && (name === undefined || _listenerList[i].name === name) && _listenerList[i] !== undefined) {
                    _listenerList.splice(i, 1);
                    i--;
                    length--;
                }
            }
        };

        self.wireUp = function (from, to, uniqueId) {
            _logger.debug('Translating from ' + from + ' to ' + to);

            var func = function (data) {
                self.publish(to, data);
            };

            var matchFunc = function(element) {
                return uniqueId !== undefined && element.uniqueId === uniqueId && element.name === from;
            };

            addOrReplaceSubscription(from, func, matchFunc, uniqueId);
        };

        self.subscribe = function (name, func, prohibitDuplicateKeys) {

            var matchFunc = function(element) {
                if (!prohibitDuplicateKeys) {
                    return false;
                }

                return name === element.name;
            };

            addOrReplaceSubscription(name, func, matchFunc);
        };

        function addOrReplaceSubscription(name, func, matchfunc, uniqueId) {
            var i,
                length = _listenerList.length;

            for (i = 0; i < length; i++) {
                if (matchfunc(_listenerList[i])) {
                    _logger.debug('Replacing existing subscription to ' + name);
                    _listenerList.splice(i, 1);
                    i--;
                    length--;
                }
            }

            _listenerList.push(new Notify(name, func, uniqueId));
        }

        // djb2 hashing algorithm
        function hashStr(str) {
            var hash = 5381,
                i,
                length;

            for (i = 0, length = str.length; i < length; i++) {
                var character = str.charCodeAt(i);
                hash = ((hash << 5) + hash) + character; /* hash * 33 + c */
            }
            return hash;
        }
    }
    
    return new Notifier();
})();