window.esaks = window.esaks || {};
window.esaks.utils = window.esaks.utils || {};

window.esaks.utils.settings = (function () {
    'use strict';

    var storages = [],
        settingsObj = {},
        settingPrefix = 'setting.';

    function CookieStorage() {
        var self = this;

        function setCookie(c_name, value, exdays) {
            var exdate = new Date();
            exdate.setDate(exdate.getDate() + exdays);
            var c_value = encodeURI(value) + ((exdays == null) ? '' : ('; expires=' + exdate.toUTCString()));
            document.cookie = c_name + '=' + c_value;
        }

        function getCookie(c_name) {
            var i, x, y, ARRcookies = document.cookie.split(';');
            for (i = 0; i < ARRcookies.length; i++) {
                x = ARRcookies[i].substr(0, ARRcookies[i].indexOf('='));
                y = ARRcookies[i].substr(ARRcookies[i].indexOf('=') + 1);
                x = x.replace(/^\s+|\s+$/g, '');
                if (x == c_name) {
                    return decodeURI(y);
                }
            }
        }

        self.get = function (settingId) {
            var cookie = getCookie(settingPrefix + settingId);
            if (cookie) {
                return cookie;
            }

            return undefined;
        };

        self.set = function (settingId, value) {
            setCookie(settingPrefix + settingId, value, 90);
        };
    };

    function LocalStorage() {
        var self = this;

        self.get = function (settingId) {
            if (window.localStorage && (window.localStorage[settingPrefix + settingId])) {
                return window.localStorage[settingPrefix + settingId];
            }

            return undefined;
        };

        self.set = function (settingId, value) {
            if (window.localStorage) {
                window.localStorage[settingPrefix + settingId] = value;
            }
        };
    }

    function UrlStorage() {
        var self = this;

        function getJsonFromUrl() {
            var query = location.search.substr(1);
            var data = query.split('&');
            var result = {};

            for (var i = 0; i < data.length; i++) {
                var item = data[i].split('=');
                result[item[0]] = item[1];
            }

            return result;
        }

        function getSettingFromUrl(settingName) {
            return getJsonFromUrl()[settingPrefix + settingName];
        }

        self.get = function (settingId) {
            return getSettingFromUrl(settingPrefix + settingId);
        };

        self.set = function () {
            // We can't (or won't) save to the url-storage
        };
    }

    function parseSettingValue(value) {
        switch (value) {
            case 'true':
                return true;
            case 'false':
                return false;
            default:
                return value;
        }
    }

    var settings = {};

    settings.setPrefix = function (prefix) {
        settingPrefix = prefix + '.';
    }

    settings.setDefaultValue = function (settingId, defaultValue) {
        var storedSetting = undefined;

        for (var i in storages) {
            storedSetting = storages[i].get(settingId);

            if (storedSetting) {
                break;
            }
        }

        settingsObj[settingId] = storedSetting ? storedSetting : defaultValue;
    }

    settings.getSetting = function (settingId, defaultValue) {
        if (settingsObj[settingId] !== undefined) { // Hit in cache
            return settingsObj[settingId];
        }

        for (var i in storages) {
            var val = storages[i].get(settingId);
            if (val !== undefined) {
                val = parseSettingValue(val);
                settings.setSetting(settingId, val);
                return val;
            }
        }

        if (defaultValue !== undefined) {
            settings.setSetting(settingId, defaultValue);
        }

        return defaultValue;
    };

    settings.setSetting = function (settingId, value) {
        settingsObj[settingId] = value;

        // Save to all storages, should we do this?
        for (var i in storages) {
            storages[i].set(settingId, value);
        }
    };

    settings.invertSetting = function (settingId, defaultValue) {
        var old = settings.getSetting(settingId, defaultValue);

        settings.setSetting(settingId, !old);
    };

    // Storages
    storages = [
        new LocalStorage(),
        new CookieStorage(),
        new UrlStorage()
    ];

    return settings;
}());