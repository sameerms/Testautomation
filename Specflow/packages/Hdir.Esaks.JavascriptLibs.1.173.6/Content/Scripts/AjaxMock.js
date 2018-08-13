/* ESAKS ajax mock adapter */

window.esaks = window.esaks || {};
window.esaks.utils = window.esaks.utils || {};

window.esaks.utils.Ajax = (function ($, Logger) {
    'use strict';

    function AjaxMock() {
        var self = this,
            _logger = new Logger('Ajax mock adapter'),
            mockTable = [],
            mockKey = function (method, url, requestData) {
                this.method = method,
                this.url = url,
                this.key = (this.method + (this.url === undefined ? '' : this.url)) + (!!requestData ? JSON.stringify(sortProperties(requestData)) : '');
                //Properties are sorted to make sure two requests that are passed logically equal objects return the same data
            },
            dataValue = function (data) { this.data = data, this.count = 0; };

        function isFunction(functionToCheck) {
            var getType = {};
            return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
        }

        function sortProperties(data) {
            function sortProps(d, sortedData) {
                var keys = _.keys(d).sort();

                _.forEach(keys, function (key) {
                    if (_.keys(d[key]).length === 0) { //No children
                        sortedData[key] = d[key];
                    } else { //Has children
                        sortedData[key] = {};
                    }
                    sortProps(d[key], sortedData[key]);
                });
                return sortedData;
            }

            return sortProps(data, {});
        }

        function getCorrectMock(method, url, requestData) {
            var strictKey = new mockKey(method, url, requestData),
                sloppyKey = new mockKey(method, url);

            if (mockTable[strictKey.key] != undefined) {
                return mockTable[strictKey.key];
            }

            if (mockTable[sloppyKey.key] != undefined) {
                return mockTable[sloppyKey.key];
            }
        }

        function doAction(method, url, requestData, callback) {
            _logger.debug('Sending ' + method + ' request to "' + url + '"');

            var result = getData(method, url, requestData);

            if (isFunction(callback)) {
                callback(result);
            }

            return result;
        }

        function getData(method, url, requestData) {
            var element = getCorrectMock(method, url, requestData);

            if (element) {
                element.count++;
                return element.data;
            } else {

                var key = new mockKey(method, url, requestData);
                var dataObj = new dataValue();
                dataObj.count = 1;
                mockTable[key.key] = dataObj;
            }

            _logger.error('Not able to find callback for ' + method + '-method' + (url ? ' and url ' + url : ''));
        }

        self.methods = { 'get': 'GET', 'post': 'POST', 'delete': 'DELETE', 'put': 'PUT', 'putJSON': 'PUT', 'script': 'SCRIPT' };

        //// Mock functions //////////////////////////////////////////////////////////////////////////////////////////////////////

        self.setup = function (method, url, requestData, responseData) {
            var key = new mockKey(method, url, requestData);
            var data = new dataValue(responseData);
            mockTable[key.key] = data;
        };

        self.clean = function () {
            mockTable = [];
        };

        self.getCount = function (method, url, requestData) {
            var el = getCorrectMock(method, url, requestData);
            if (el) {
                return el.count;
            }

            _logger.error('Not able to find count for ' + method + '-method' + (url ? ' and url ' + url : ''));
            return 0;
        };

        self.isInvoked = function (method, url, requestData) {
            return self.getCount(method, url, requestData) > 0;
        };

        self.isCalledOnce = function (method, url, requestData) {
            return self.getCount(method, url, requestData) === 1;
        };

        self.clearCount = function (method, url) {

            if (method === undefined) {
                for (var mockobj in mockTable) {
                    mockTable[mockobj].count = 0;
                }
                return;
            }

            var el = getCorrectMock(method, url);
            if (el) {
                el.count = 0;
            }

            _logger.error('Not able to find count for ' + method + '-method' + (url ? ' and url ' + url : ''));
        };

        function getPromise(response) {
            var deferred = $.Deferred();
            deferred.resolve(response);
            return deferred.promise();
        }

        function performMockRequest(method, url, requestData, callback) {
            if (callback === undefined && $.isFunction(requestData)) {
                callback = requestData;
                requestData = null;
            }
            return doAction(method, url, requestData, callback);
        }

        //// From "interface" ////////////////////////////////////////////////////////////////////////////////////////////////////

        self.get = function (url, requestData, callback) {
            var response = performMockRequest(self.methods.get, url, requestData, callback);
            return getPromise(callback);
        };

        self.getScript = function (url, callback) {
            var response = performMockRequest(self.methods.get, url, null, callback);
            return getPromise(response);
        },

        self.getJSON = function (url, requestData, callback) {
            var response = performMockRequest(self.methods.get, url, requestData, callback);
            return getPromise(response);
        };

        self.post = function (url, requestData, callback) {
            var response = performMockRequest(self.methods.post, url, requestData, callback);
            return getPromise(response);
        };

        self.putJSON = function (url, requestData, callback) {
            var response = performMockRequest(self.methods.put, url, requestData, callback);
            return getPromise(response);
        };

        self.deleteJSON = function (url, requestData, callback) {
            var response = performMockRequest(self.methods['delete'], url, requestData, callback);
            return getPromise(response);
        };
    }

    return new AjaxMock();
})(jQuery, esaks.utils.Logger);