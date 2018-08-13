var esaks = esaks || {};
esaks.utils = esaks.utils || {};

esaks.utils.Datepicker = (function ($) {
    'use strict';

    var dateMaskName = 'norwegian-date';

    var datepicker = function (element, keySequanceCommands) {
        var $element = $(element);

        if ($element.is('input') && !$element.data('datepicker')) {

            $element.datepicker({
                format: 'dd.mm.yyyy',
                language: 'no',
                forceParse: false,
                autoclose: true
            });

            $element.inputmask(dateMaskName);

            $element.data('datepicker', true);

            addKeyPressSequences($element, keySequanceCommands);
        }
    };

    function addKeyPressSequences($element, keySequanceCommands) {

        var supportedSequences = [
                new esaks.utils.Datepicker.KeySequanceCommand(getTodayDateString, 'dd')
            ],
            keystrokes = '',
            timeout;

        supportedSequences = supportedSequences.concat(keySequanceCommands);

        $element.keydown(function(e) {

            var keyPressed = String.fromCharCode(e.keyCode);

            if (e.keyCode === 9) {
                doYearCompletion($element);
                return;
            } else if (!/^[a-zA-Z]$/.test(keyPressed)) {
                return;
            }

            if (!$element.val()) {
                clearTimeout(timeout);

                keystrokes += keyPressed;
                setPlaceHolder();

                timeout = window.setTimeout(function() {
                    keystrokes = '';
                    clearPlaceHolder();
                }, 1000);

                _(supportedSequences).forEach(function(supportedSequence) {

                    if (supportedSequence.keycode === keystrokes.toLowerCase()) {

                        resetTimer();

                        var date = supportedSequence.getValue();
                        if (date) {
                            $element.val(date).change();
                        }
                    }
                });

                if (keystrokes.length >= 2) {
                    resetTimer();
                }
            }
        });

        function resetTimer() {
            clearTimeout(timeout);
            keystrokes = '';
            clearPlaceHolder();
        }

        function clearPlaceHolder() {
            $element.inputmask(dateMaskName, { placeholder: '_' });
        }

        function setPlaceHolder() {
            $element.inputmask(dateMaskName, { placeholder: appendUnderscore(keystrokes) + '.__.____' });
        }
    }

    function doYearCompletion($element) {
        var date = $element.val();
        if (/^\d{2}.\d{2}.\d{2}__$/.test(date)) {
            var year = date.substr(6, 2);
            var dayMonth = date.substr(0, 6);
            $element.val(dayMonth + '20' + year).change(); //change event must be raised for KO to notice that the value has been set.
        }
    }

    function appendUnderscore(chars) {
        if (chars.length <= 1) {
            return chars + '_';
        }

        return chars;
    }

    function getTodayDateString() {
        var now = new Date();
        var today = padNumber(now.getDate()) + '.' + padNumber(now.getMonth() + 1) + '.' + padNumber(now.getFullYear());
        return today;
    }

    function padNumber(number) {
        if (number <= 9) {
            return '0' + number;
        }
        return number;
    }

    return datepicker;
})(jQuery);

esaks.utils.Datepicker.KeySequanceCommand = (function () {
    function KeySequanceCommand(getValueFunction, keyCode) {
        var self = this;

        self.getValue = getValueFunction;
        self.keycode = keyCode;
    }

    return KeySequanceCommand;
})();
