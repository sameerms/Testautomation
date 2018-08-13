/* ESAKS ajax adapter */

var esaks = esaks || {};
esaks.utils = esaks.utils || {};

esaks.utils.Ajax = (function ($, Logger) {
    'use strict';

    function _ajax_request(url, data, callback, dataType, method) {
        if ($.isFunction(data)) {
            callback = data;
            data = {};
        }

        return $.ajax(url, {
            type: method,
            cache: false,
            data: data ? JSON.stringify(data) : null,
            success: callback,
            dataType: dataType || "json",
            contentType: "application/json"
        });
    }

    // Wrapper for Ajax-requests
    function Ajax() {
        var self = this,
            _logger = new Logger('Ajax adapter'),
            _connectionCount = 0,
            _ajaxListeners = [];

        self.get = function (url, data, callback) {
            incCount();
            _logger.debug('Sending GET request to "' + url + '"');
            return $.get(url, data, callback).always(decCount);
        };

        self.getScript = function (url, callback) {
            incCount();
            return $.get(url, undefined, callback, 'script').always(decCount);
        },

        self.getJSON = function (url, data, callback) {
            _logger.debug('Sending GET JSON request to "' + url + '"');
            incCount();
            return $.get(url, data, callback, 'json').always(decCount);
        };

        self.post = function (url, data, callback) {
            _logger.debug('Sending POST request to "' + url + '"');
            incCount();
            return $.post(url, data, callback).always(decCount);
        };

        self.putJSON = function (url, data, callback) {
            _logger.debug('Sending PUT JSON request to "' + url + '"');
            incCount();
            return _ajax_request(url, data, callback, 'json', 'PUT').always(decCount);
        };

        self.deleteJSON = function (url, data, callback) {
            _logger.debug('Sending DELETE JSON request to "' + url + '"');
            incCount();
            return _ajax_request(url, data, callback, 'json', 'DELETE').always(decCount);
        };

        // Trigged when a ajax-request begins or completes
        self.addAjaxListener = function (func) {
            _ajaxListeners.push(func);
            _logger.debug('Number of ajax-listeners: ' + _ajaxListeners.length);
        };

        function triggerAjaxHandlers() {
            _logger.debug('Number of connections: ' + _connectionCount);
            for (var i = 0, l = _ajaxListeners.length; i < l; i++) {
                _ajaxListeners[i](_connectionCount);
            }
        }

        function incCount() {
            _connectionCount++;
            triggerAjaxHandlers(_connectionCount);
        }

        function decCount() {
            _connectionCount--;
            triggerAjaxHandlers(_connectionCount);
        }
    }

    return new Ajax();
})(jQuery, esaks.utils.Logger);