/**
 ** ShortcutOlsen 1.0.2
 **
 ** Usage: <tag data-accesskey="a"></tag>
 **/

window.esaks = window.esaks || {};
window.esaks.utils = window.esaks.utils || {};
window.esaks.utils.accesskeys = window.esaks.utils.accesskeys || {};

(function (document, $, Logger) {
    'use strict';

    var triggerKey = 27,
        backspace = 8,
        modes = { normal: 0, shortcut: 1 },
        accesskeyClueClass = 'accesskey-clue',
        accesskeyClueFinal = 'accesskey-final',
        accesskeyAttr = 'data-accesskey',
        keys = [],
        logger = new Logger('Accesskey'),
        blinkTimeout;

    var mode = modes.normal,
        ns = window.esaks.utils.accesskeys;

    ns.keyEvent = keyDownEvent;
    ns.clickEvent = function () {
        if (mode === modes.shortcut) {
            logger.debug('Hiding shortcuts');
            hideAccesskeys();
        }
    };

    function keyDownEvent(event) {
        if (mode === modes.shortcut) {
            if (event.which === triggerKey) {
                hideAccesskeys();
            } else if (event.which === backspace && keys.length >= 1) {
                keys.pop();
                hideAccesskeys(true);
                showAccesskeys();
            } else {
                var key = getKeyForCode(event.which);
                logger.debug('Key ' + key + ' pushed.');

                keys.push(key.toLowerCase());

                if (handleShortcut(keys)) {
                    hideAccesskeys(true);
                    showAccesskeys();
                } else {
                    hideAccesskeys();
                }

                event.preventDefault();
            }
        } else if (mode === modes.normal) {
            if (event.which === triggerKey) {
                keys = [];
                showAccesskeys();
                event.preventDefault();

                logger.debug('Showing shortcut keys');
            }
        }
    }

    function hasMoreShortcuts(arrayOfKeys) {
        var retValue = false;

        $('[' + accesskeyAttr + ']:visible').each(function (i, el) {
            var key = (arrayOfKeys || keys).join(' ') + ' ';
            if ($(el).attr(accesskeyAttr).substring(0, key.length) === key) {
                retValue = true;
            }
        });

        return retValue;
    }

    function blinkHints() {
        $('.' + accesskeyClueClass).css({ 'background': '#fcaf17' }, { 'color': '#000' }, { boxShadow: '0 0 10px #fcaf17' });

        setTimeout(function () {
            $('.' + accesskeyClueClass).css({ 'background': '' }, { 'color': '' }, { boxShadow: '' });
        }, 1000);
    }

    function handleShortcut(theKeys) {

        clearTimeout(blinkTimeout);

        var keyQuery = theKeys.join(' ').toLowerCase();
        var $el;

        if (isInModal()) {
            $el = $('.modal.in [' + accesskeyAttr + '][' + accesskeyAttr + '="' + keyQuery + '"]:visible');
        } else {
            $el = $('[' + accesskeyAttr + '][' + accesskeyAttr + '="' + keyQuery + '"]:visible');
        }

        if ($el.length >= 2) {
            logger.warn('More than one element has the short-cut sequence: "' + keyQuery + '"!');
            return hasMoreShortcuts(keys);
        } else if ($el.length === 1) {
            $el.focus();
            $el.click();

            if ($el.attr('href') && $el.attr('href') !== '#') {
                window.location = $el.attr('href');
            } else if ($el.attr('for')) {
                $('#' + $el.attr('for')).focus();
            }

            return hasMoreShortcuts(keys);
        }

        return false;
    }

    function elementIsOnScreen($el) {
        var offset = $el.offset();
        if ($el.is(':visible') && offset && (offset.left > -1 && offset.top >= -1 || offset.left >= -1 && offset.top > -1)) {
            return true;
        }

        return false;
    }

    function isInModal() {
        return $('.modal.in').length >= 1;
    }

    function showAccesskeys() {
        // Add accesskey to all modals
        $('.modal.in .close').attr(accesskeyAttr, 'q');
        $('.modal.in .btn-primary').attr(accesskeyAttr, 'enter');

        var all;

        if (isInModal()) {
            all = $('.modal.in [' + accesskeyAttr + '][' + accesskeyAttr + '!=""]');
        } else {
            all = $('[' + accesskeyAttr + '][' + accesskeyAttr + '!=""]:not(.modal *, :disabled)');
        }

        // Find all elements that have acceskey, and highlight them
        all.each(function (index, el) {
            var accesskey = $('<span class="' + accesskeyClueClass + '"></span>'),
                $el = $(el),
                key = $el.attr(accesskeyAttr),
                keySplit = key.split(' ');

            if (key === ' ') {
                keySplit = [' '];
            }

            if (keySplit.length === keys.length + 1 && arraysAreSameThisFar(keySplit, keys) && elementIsOnScreen($el)) {

                accesskey.offset($el.offset())
                    .text(keySplit[keySplit.length - 1] === ' ' ? 'Mellomrom' : keySplit[keySplit.length - 1].toUpperCase())
                    .attr(accesskeyAttr + '-for', key)
                    .css({ 'position': 'absolute', 'z-index': 100000 })
                    .click(function () { handleShortcut(key); })
                    .appendTo($('body'));

                if (!hasMoreShortcuts($el.attr(accesskeyAttr).split(' '))) {
                    accesskey.addClass(accesskeyClueFinal);
                }
            }
        });

        blinkTimeout = setTimeout(blinkHints, 3000);

        mode = modes.shortcut;
    }

    function arraysAreSameThisFar(array1, array2) {
        for (var i = 0; i < array1.length && i < array2.length; i += 1) {
            if (array1[i] !== array2[i]) {
                return false;
            }
        }

        return true;
    }

    function getKeyForCode(code) {
        if (code === 13) {
            return 'enter';
        } else if (code === 9) {
            return 'tab';
        } else if (code === 35) {
            return 'end';
        } else if (code === 36) {
            return 'home';
        } else if (code === 107) {
            return '+';
        } else if (code >= 96 && code <= 105) {
            code = code - 48;
        } else if (code >= 112 && code <= 120) {
            return 'f' + (code - 111);
        }

        return String.fromCharCode(code).toLowerCase();
    }

    function hideAccesskeys(preserve) {
        clearTimeout(blinkTimeout);
        $('.' + accesskeyClueClass).remove();
        if (preserve === true || preserve === undefined) {
            mode = modes.normal;
        }
    }

}(window, jQuery, esaks.utils.Logger));

/*
 * Bind events to the document. This is necessary because of some obscure binding error in ie8 which makes it impossible
 * to bind inside the correct closure. It fails silently. Remove this when IE8 support no longer is needed.
 */
(function () {
    var doc = $(document),
        ns = window.esaks.utils.accesskeys;

    doc.on('click', ns.clickEvent);
    doc.on('keydown', ns.keyEvent);
}());