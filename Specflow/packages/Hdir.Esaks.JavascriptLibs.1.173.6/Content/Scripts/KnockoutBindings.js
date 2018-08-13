(function (settings) {
    function padNumber(number) {
        if (number <= 9) {
            return '0' + number;
        }
        return number;
    }

    ko.bindingHandlers.createCollapsible = {
        init: function (element, valueAccessor) {
            addCollapsible(element);
        },
        update: function (element, valueAccessor, allBindingsAccessor, viewModel) {
        }
    };

    ko.bindingHandlers.slide = {
        init: function (element, valueAccessor) {
            $(element).css('display', ko.utils.unwrapObservable(valueAccessor()) ? 'block' : 'none');
        },
        update: function (element, valueAccessor, allBindingsAccessor, viewModel) {
            var el = $(element);
            if (ko.utils.unwrapObservable(valueAccessor())) {
                el.slideDown();
            } else {
                el.slideUp();
            }
        }
    };

    ko.bindingHandlers.fade = {
        init: function (element, valueAccessor) {
            $(element).css('display', ko.utils.unwrapObservable(valueAccessor()) ? 'block' : 'none');
        },
        update: function (element, valueAccessor, allBindingsAccessor, viewModel) {
            var el = $(element);
            if (ko.utils.unwrapObservable(valueAccessor())) {
                el.fadeIn();
            } else {
                el.fadeOut();
            }
        }
    };

    // Marks all text inside input-field on focus
    ko.bindingHandlers.markAllTextOnFocus = {
        init: function (element, valueAccessor) {
            var el = $(element);
            el.focus(function () {
                element.select();
            });
        }
    };

    ko.bindingHandlers.transferEffect = {
        init: function (element, valueAccessor) {
            var $fromElement = $(element),
                toSelector = ko.utils.unwrapObservable(valueAccessor());

            $fromElement.click(function () {
                var $toElement = $(toSelector);
                if ($toElement.length > 0) {
                    $fromElement.effect('transfer', { to: toSelector, className: 'ui-effects-transfer' }, 800, function () {
                        $toElement.effect('pulsate', 400);
                    });
                }
            });
        }
    };

    ko.bindingHandlers.popover = getOrientedPopover('left');

    ko.bindingHandlers.popoverRight = getOrientedPopover('right');

    function getOrientedPopover(orientation) {
        return {
            init: function (element, valueAccessor) {
                var el = $(element);

                el.popover({
                    content: valueAccessor(),
                    placement: orientation,
                    html: true,
                    trigger: 'hover'
                });
            },
            update: function (element, valueAccessor) {
                var el = $(element);
                el.popover({
                    content: valueAccessor(),
                    placement: orientation,
                    html: true,
                    trigger: 'hover'
                });
            }
        };
    }

    ko.bindingHandlers.updateAreaWith = {
        init: function (element, valueAccessor) {

        },
        update: function (element, valueAccessor, allBindingsAccessor, viewModel) {
            var el = $(allBindingsAccessor().updateArea);
            el.html(ko.utils.unwrapObservable(valueAccessor()));
        }
    };

    ko.bindingHandlers.combobox = {
        init: function (element, valueAccessor) {
            //initialize combobox
            var observableValue = ko.utils.unwrapObservable(valueAccessor());
            $(element).val(observableValue);
            $(element).chosen({ width: '100%' }).change(function (event, value) {
                if (value !== undefined && value !== null) {
                    valueAccessor()(value.selected);
                }
            });
        },
        update: function (element, valueAccessor, allBindingsAccessor, viewModel) {
            var el = $(element);
            el.val(ko.utils.unwrapObservable(valueAccessor()));
            el.trigger("liszt:updated");

            var accessKey = $(element).attr('data-accesskey');
            $(element).next().find('a:first').attr('data-accesskey', accessKey);
        }
    };

    // Both enter and click
    ko.bindingHandlers.action = {
        init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
            $(element).keypress(function (event) {
                var keyCode = (event.which ? event.which : event.keyCode);
                if (keyCode === 13) {
                    valueAccessor().call(viewModel, viewModel);
                    return false;
                }
                return true;
            });

            $(element).click(function () {
                valueAccessor().call(viewModel, viewModel);
                return false;
            });
        }
    };

    ko.bindingHandlers.number = {
        init: function (element) {
            $(element).keydown(function (keyEvent) {
                // Allow: backspace, delete, tab, escape, and enter
                if (isAllowedKeyCombination(keyEvent)) {
                    // let it happen, don't do anything
                    return;
                }
                else {
                    // stop the keypress if not a number
                    if (!isNumeric(keyEvent)) {
                        keyEvent.preventDefault();
                    }
                }
            });
        }
    };

    ko.bindingHandlers.decimalValue = {
        init: function (element, valueAccessor) {
            var underlyingObservable = valueAccessor();

            var decimalInterceptor = ko.computed({
                read: function () {
                    var underlyingValue = parseFloat(underlyingObservable());
                    if (underlyingValue) {
                        var valueWithoutDecimals = ~~underlyingValue;
                        underlyingValue = underlyingValue === valueWithoutDecimals ? valueWithoutDecimals : underlyingValue;

                        return underlyingValue.toString().replace('.', ',');
                    }
                    return '';
                },
                write: function (newValue) {
                    underlyingObservable(newValue.replace(',', '.'));
                }
            });

            $(element).keydown(function (keyEvent) {
                //Only allow one comma in the input
                if (containsDecimalSeparator($(element).val().toString()) && isCommaOrDecimalPoint(keyEvent)) {
                    keyEvent.preventDefault();
                    return;
                }
                else if (isAllowedKeyCombination(keyEvent) || isCommaOrDecimalPoint(keyEvent)) {
                    // let it happen, don't do anything
                    return;
                }
                else {
                    // stop the keypress if not a number
                    if (!isNumeric(keyEvent)) {
                        keyEvent.preventDefault();
                    }
                }
            });

            ko.applyBindingsToNode(element, { value: decimalInterceptor });

            //Nødvendig for at knockout.validation skal fungere med observable som er bundet med denne bindingen
            return ko.bindingHandlers.validationCore.init(element, valueAccessor);
        }
    };

    ko.bindingHandlers.duplicateRowKeybinding = {
        init: function (element, valueAccessor, allBindings, viewModel) {
            var underlyingCallback = valueAccessor();
            $(element).keydown(function (keyEvent) {
                // ctrl + d
                if (keyEvent.keyCode == 68 && keyEvent.ctrlKey) {
                    keyEvent.preventDefault();
                    underlyingCallback(viewModel);
                }
            });
        }
    };

    function containsDecimalSeparator(inputString) {
        return inputString.indexOf(',') !== -1 || inputString.indexOf('.') !== -1;
    }

    function isNumeric(keyEvent) {
        return (keyEvent.keyCode >= 48 && keyEvent.keyCode <= 57) || (keyEvent.keyCode >= 96 && keyEvent.keyCode <= 105);
    }

    function isCommaOrDecimalPoint(keyEvent) {
        return keyEvent.keyCode === 188 || keyEvent.keyCode === 110;
    }

    function isAllowedKeyCombination(keyEvent) {
        // Allow: backspace, delete, tab, escape or enter
        return keyEvent.keyCode === 46 || keyEvent.keyCode === 8 || keyEvent.keyCode === 9 || keyEvent.keyCode === 27 || keyEvent.keyCode === 13 ||
               // Allow: Ctrl shortcuts
               keyEvent.ctrlKey === true ||
               // Allow: home, end, left, right
               (keyEvent.keyCode >= 35 && keyEvent.keyCode <= 39);
    }

    ko.bindingHandlers.accesskey = {
        init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {

        },
        update: function (element, valueAccessor, allBindingsAccessor, viewModel) {
            var el = $(element);
            var accesskeys = ko.utils.unwrapObservable(valueAccessor()) + "";

            var tokens = accesskeys.split(' ');
            for (var i in tokens) {
                var accesskey = tokens[i];
                if (!isNaN(accesskey) && parseInt(accesskey) >= 10) {
                    el.attr('data-accesskey-not-accessable', 'true');
                    return;
                }

                if (accesskey === 'parent') {
                    var closest = el.closest('[data-accesskey][data-accesskey!=""], [data-accesskey-not-accessable][data-accesskey-not-accessable!=""]');
                    if (closest.attr('data-accesskey-not-accessable') !== undefined) {
                        return;
                    }

                    if (closest.size() === 0 || closest.attr('data-accesskey-not-accessable') == true) {
                        return;
                    }

                    tokens[i] = closest.attr('data-accesskey');
                }
            }

            el.attr('data-accesskey', tokens.join(' ').replace(/^\s+|\s+$/g, ''));
        }
    };

    ko.bindingHandlers.masked = {
        init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
            var mask = allBindingsAccessor().mask || {};
            var el = $(element);
            el.inputmask(mask, {
                "oncomplete": function () {
                    viewModel[valueAccessor()]($(element).val());
                },
                "onincomplete": function () {
                    var value = el.val(),
                        date = viewModel[valueAccessor()];

                    if (mask === 'norwegian-date') {
                        if (value === undefined || value === null) {
                            return;
                        }

                        // Add 20 before year if year only has two digits
                        if (value.substring(value.length - 2) === '__' && value.substring(value.length - 4) !== '____') {
                            date(value.substr(0, 6) + '20' + value.substr(6, 2));
                        }

                        // Todays date
                        if (value.substring(0, 2) === 'dd') {
                            var now = new Date();
                            date(padNumber(now.getDate()) + '.' + padNumber(now.getMonth() + 1) + '.' + padNumber(now.getFullYear()));
                        }

                        // Previous date
                        if (value.substr(0, 2) === 'fd' && allBindingsAccessor().listName !== undefined && bindingContext.$index() !== 0) {
                            var listname = allBindingsAccessor().listName,
                                previousIndex = bindingContext.$index() - 1,
                                previousDate = bindingContext.$parent[listname]()[previousIndex][valueAccessor()]();

                            date(previousDate);
                        };
                    }
                }
            });
        },
        update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
            var value = ko.utils.unwrapObservable(viewModel[valueAccessor()]);
            $(element).val(value);
        }
    };

    ko.bindingHandlers.addTakstValidation = {
        init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
            var el = $(element);
            el.validate({
                errorPlacement: function (error, element) {

                },
                onkeyup: false,
                onfocusout: function (element) {
                    if (!this.checkable(element) && (element.name in this.submitted || !this.optional(element))) {
                        var currentObj = this;
                        var currentElement = element;
                        currentElement.className += " error";

                        var delay = function () { currentObj.element(currentElement); };

                        setTimeout(delay, 0);
                    }
                },
                rules: {
                    BehandlingsDato: {
                        date: true,
                        required: true
                    },
                    TakstId: "required",
                    Antall: {
                        required: true,
                        digits: true
                    },
                    Refusjonstakst: {
                        number: true,
                    },
                    GodkjentEgenandel: {
                        number: true,
                    },
                    Honorartakst: {
                        number: true,
                    }
                },
                messages: {
                    BehandlingsDato: "Dato er ikke gyldig",
                    TakstId: "Takst er ikke gyldig",
                    Antall: "Antall er ikke gyldig",
                    Refusjonstakst: "Refusjonstakstbeløpet må være et tall",
                    GodkjentEgenandel: "Godkjent egenandel-beløpet må være et tall",
                    Honorartakst: "Honorartakstbeløpet må være et tall"
                },
            });
        },
    };

    ko.bindingHandlers.autocomplete = {
        init: function (element, valueAccessor, allBindings) {

            var $element = $(element),
                           options;
            allBindings = allBindings();

            function validateOptions() {
                if (!allBindings.autocompleteOptions) {
                    throw 'autocompleteOptions mangler' + (element.id ? ' for felt ' + element.id : '');
                }

                options = ko.utils.unwrapObservable(allBindings.autocompleteOptions);

                if (!options.url) {
                    throw 'autocompleteOptions.url mangler' + (element.id ? ' for felt ' + element.id : '');
                }
            }

            validateOptions();

            var subscription = valueAccessor().subscribe(function (data) {
                if (data && data.text) {
                    $element.typeahead('setQuery', data.text);
                }
                else if (data && typeof data === 'string') {
                    $element.typeahead('setQuery', data);
                }
                else if (options.enableObservableSubscription) { //Investigate what the reasoning behind this was :/
                    $element.typeahead('setQuery', '');
                }
                if (!options.enableObservableSubscription) { //Investigate what the reasoning behind this was :/
                    subscription.dispose();
                }
            });

            function setValueAccessor(value) {
                var observableValue = valueAccessor();
                observableValue(value);
            }

            var autocomplete = new esaks.utils.Autocomplete($element, options, setValueAccessor);

            setValueAccessor(valueAccessor()());
        },
        update: function (element, valueAccessor) {
            var $element = $(element);
            var value = ko.utils.unwrapObservable(valueAccessor());

            if (!value) {
                $element.typeahead('setQuery', '');
            }
        }
    };

    ko.bindingHandlers.showModal = {
        update: function (element, valueAccessor) {
            var value = valueAccessor();
            if (ko.utils.unwrapObservable(value)) {
                displayModal($(element));
            }
            else {
                $(element).modal('hide');
            }
        }
    };

    ko.bindingHandlers.bootstrapModalOnClick = {
        init: function (element, valueAccessor) {
            $(element).on('click', function () {
                var targetId = '#' + ko.utils.unwrapObservable(valueAccessor());
                displayModal($(targetId));
            });
        }
    };

    ko.bindingHandlers.deferredBootstrapModalOnClick = {
        init: function (element, valueAccessor) {
            $(element).on('click', function () {
                var args = ko.utils.unwrapObservable(valueAccessor()),
                    id = args.id,
                    loadData = args.loadData,
                    loadDataArg = args.loadDataArg;

                if (id && $.isFunction(loadData)) {
                    var deferred = loadData(loadDataArg);
                    deferred.done(function () {
                        displayModal($('#' + id));
                    });
                }
            });
        }
    };

    function displayModal($element, css) {
        if ($element.parent()[0].tagName.toLowerCase() !== 'body') { //Sorry :(
            $('body').append($element);
        }

        $element.modal({
            show: true,
            keyboard: false,
            backdrop: 'static'
        });

        $('input[type="text"], textarea', $element).focus();
    }

    ko.bindingHandlers.datepicker = {
        init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {

            var keySequenceCommands = [];

            getPreviousDateKeySequenceCommand();

            esaks.utils.Datepicker(element, keySequenceCommands);

            function getPreviousDateKeySequenceCommand() {
                var previousDate,
                    previousDateList = ko.utils.unwrapObservable(allBindingsAccessor().previousDateList),
                    previousDateProperty = ko.utils.unwrapObservable(allBindingsAccessor().previousDateProperty);

                if (previousDateList && previousDateProperty) {
                    keySequenceCommands.push(new esaks.utils.Datepicker.KeySequanceCommand(function () {
                        if (bindingContext.$index() !== 0) {
                            var previousIndex = bindingContext.$index() - 1,
                                listItem = ko.utils.unwrapObservable(previousDateList[previousIndex]);
                            previousDate = ko.utils.unwrapObservable(listItem[allBindingsAccessor().previousDateProperty]);
                        } else {
                            previousDate = '';
                        }
                        return previousDate;
                    }, 'fd'));
                }
            }
        }
    };

    ko.bindingHandlers.selectPicker = {
        init: function (element, valueAccessor, allBindingsAccessor) {
            var nonSelectedValue = allBindingsAccessor().selectPickerNonSelectedText || 'Alle',
                accesskeyAttr = 'data-accesskey',
                $element = $(element);

            if ($element.is('select')) {
                if (ko.isObservable(valueAccessor())) {
                    if ($element.prop('multiple') && $.isArray(ko.utils.unwrapObservable(valueAccessor()))) {
                        // in the case of a multiple select where the valueAccessor() is an observableArray, call the default Knockout selectedOptions binding
                        ko.bindingHandlers.selectedOptions.init(element, valueAccessor, allBindingsAccessor);
                    }
                    else {
                        // regular select and observable so call the default value binding
                        ko.bindingHandlers.value.init(element, valueAccessor, allBindingsAccessor);
                    }
                }

                $element.addClass('selectpicker').selectpicker({
                    noneSelectedText: nonSelectedValue
                });

                $('[data-id=' + $element.attr('id') + ']')
                  .attr(accesskeyAttr, $element.attr(accesskeyAttr));
            }
        },
        update: function (element, valueAccessor, allBindingsAccessor) {
            if ($(element).is('select')) {
                var selectPickerOptions = allBindingsAccessor().selectPickerOptions;
                if (typeof selectPickerOptions !== 'undefined' && selectPickerOptions !== null) {
                    var options = selectPickerOptions.options,
                        optionsText = selectPickerOptions.optionsText,
                        optionsValue = selectPickerOptions.optionsValue,
                        optionsCaption = selectPickerOptions.optionsCaption,
                        isDisabled = selectPickerOptions.disabledCondition || false,
                        resetOnDisabled = selectPickerOptions.resetOnDisabled || false;
                    if (ko.utils.unwrapObservable(options).length > 0) {
                        // call the default Knockout options binding
                        ko.bindingHandlers.options.update(element, options, ko.observable({ optionsText: optionsText, optionsValue: optionsValue, optionsCaption: optionsCaption }));
                    }
                    if (isDisabled && resetOnDisabled) {
                        // the dropdown is disabled and we need to reset it to its first option
                        $(element).selectpicker('val', $(element).children('option:first').val());
                    }
                    $(element).prop('disabled', isDisabled);
                }
                if (ko.isObservable(valueAccessor())) {
                    if ($(element).prop('multiple') && $.isArray(ko.utils.unwrapObservable(valueAccessor()))) {
                        // in the case of a multiple select where the valueAccessor() is an observableArray, call the default Knockout selectedOptions binding
                        ko.bindingHandlers.selectedOptions.update(element, valueAccessor);
                    }
                    else {
                        // call the default Knockout value binding
                        ko.bindingHandlers.value.update(element, valueAccessor);
                    }
                }

                $(element).selectpicker('refresh');
            }
        }
    };

    ko.bindingHandlers.norwegianCurrency = {
        init: function (element, valueAccessor) {
            var value = ko.utils.unwrapObservable(valueAccessor());
            value = formatNorwegianCurrencyForDisplay(value);
            ko.bindingHandlers.text.update(element, ko.observable(value));
        },
        update: function (element, valueAccessor) {
            var value = ko.utils.unwrapObservable(valueAccessor());
            value = formatNorwegianCurrencyForDisplay(value);
            ko.bindingHandlers.text.update(element, ko.observable(value));
        }
    }

    function removeTrailingZeros(value) {
        if (value.indexOf(',00', value.length - 3) !== -1) {
            return value.slice(0, value.length - 3);
        }

        return value;
    }

    function formatNorwegianCurrencyForDisplay(number) { //put on number's prototype?
        if (number) {
            number = number.toFixed(2).replace(/\./, ',');
            return removeTrailingZeros(number.replace(/\B(?=(\d{3})+(?!\d))/g, ' '));
        }
        return '0';
    }

    ko.bindingHandlers.ignoreBinding = {
        init: function () {
            return { controlsDescendantBindings: true };
        }
    };

    ko.bindingHandlers.deactivatedContact = {
        update: function (element, valueAccessor) {
            if (!element) {
                return;
            }

            var jqElement = $(element);
            var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());
            var deactivated = valueUnwrapped === false;
            if (deactivated && !jqElement.hasClass('deaktivert-kontakt')) {
                jqElement.addClass('deaktivert-kontakt');
            } else if (!deactivated && jqElement.hasClass('deaktivert-kontakt')) {
                jqElement.removeClass('deaktivert-kontakt');
            }
        }
    }
})(esaks.utils.settings);


// Sorting
// TODO: Put this in own file
(function (settings) {

    var CSS_CLASSES = {
        main: 'sortable',
        currentSort: 'sortable-current',
        currentSortAsc: 'sortable-current-asc',
        currentSortDesc: 'sortable-current-desc'
    },
        SORT_SETTING_PREFIX = 'sort.'
    SORT_PROPERTY = '__sortProperty__',
    DATE_PATTERN = /\d\d\.\d\d\.\d\d\d\d$/i,
    SAK_PATTERN = /\d+\/\d+$/i;

    function parseField(value) {
        if (value === null || value === undefined) {
            return '';
        }
        else if (value !== '' && DATE_PATTERN.test(value)) {
            var dateFormat = settings.getSetting('dateFormat', 'DD.MM.YYYY');
            return moment(value, dateFormat).valueOf();
        }
        else if (SAK_PATTERN.test(value)) {
            var saksNr = value.split('/');
            return (+saksNr[0]) * 100000000 + +(saksNr[1]);
        }
        else {
            return value.toLowerCase ? value.toLowerCase() : value;
        }
    }

    function compare(leftValue, rightValue) {
        if (leftValue === rightValue) {
            return 0;
        } else if (leftValue > rightValue) {
            return -1;
        } else {
            return 1;
        }
    }

    function sort(left, right, ascending, propertyName, thenByPropertyName) {
        function parseArray(array, property) {
            return parseField(ko.utils.unwrapObservable(array[property]));
        }

        var leftValue = parseArray(left, propertyName);
        var rightValue = parseArray(right, propertyName);

        if (thenByPropertyName && leftValue === rightValue) {
            leftValue = parseArray(left, thenByPropertyName);
            rightValue = parseArray(right, thenByPropertyName);

            return ascending ? compare(leftValue, rightValue) : compare(rightValue, leftValue);
        }

        return ascending ? compare(leftValue, rightValue) : compare(rightValue, leftValue);
    }

    ko.bindingHandlers.sort = {
        init: function (element, valueAccessor, allValuesAccessor, viewModel) {
            var ascending = true;

            var sortProperties = valueAccessor();
            var modelSortProperty = addSortPropertyToModel()

            var storedKey = sortProperties.storedKey;
            var dataArray = sortProperties.dataArray;
            var propertyName = sortProperties.propertyName;
            var thenByProperty = sortProperties.thenBy;

            checkForSavedSort();

            element.classList.add(CSS_CLASSES.main);
            element.addEventListener('click', doSort);

            function doSort() {
                if (!dataArray || dataArray().length === 0) {
                    return;
                }

                ascending = !ascending;

                dataArray.sort(function (left, right) {
                    return sort(left, right, ascending, propertyName, thenByProperty);
                });

                if (storedKey) {
                    var sortObject = ko.toJSON({
                        propertyName: propertyName,
                        ascending: ascending
                    });

                    settings.setSetting(SORT_SETTING_PREFIX + storedKey, sortObject);
                }

                modelSortProperty.currentSortProperty(propertyName);
                modelSortProperty.currentSortDirection(ascending);
            }

            function checkForSavedSort() {
                if (storedKey) {
                    var sortSetting = settings.getSetting(SORT_SETTING_PREFIX + storedKey);
                    var sortObj = ko.utils.parseJson(sortSetting);

                    if (sortObj && sortObj.propertyName == propertyName) {
                        ascending = !sortObj.ascending;
                        doSort();
                    }
                }
            }

            function addSortPropertyToModel() {
                viewModel[SORT_PROPERTY] = viewModel[SORT_PROPERTY] || {
                    currentSortProperty: ko.observable(),
                    currentSortDirection: ko.observable()
                };

                viewModel[SORT_PROPERTY].currentSortProperty.subscribe(setCss);
                viewModel[SORT_PROPERTY].currentSortProperty.subscribe(resetSortDirection);
                viewModel[SORT_PROPERTY].currentSortDirection.subscribe(setCss);

                return viewModel[SORT_PROPERTY];
            }

            function resetSortDirection() {
                if (modelSortProperty.currentSortProperty() !== propertyName) {
                    ascending = true;
                }
            }

            function setCss() {
                var classList = element.classList;

                if (modelSortProperty.currentSortProperty() === propertyName) {
                    classList.add(CSS_CLASSES.currentSort);

                    if (!ascending) {
                        classList.remove(CSS_CLASSES.currentSortDesc);
                        classList.add(CSS_CLASSES.currentSortAsc);
                    } else {
                        classList.remove(CSS_CLASSES.currentSortAsc);
                        classList.add(CSS_CLASSES.currentSortDesc);
                    }
                } else {
                    classList.remove(CSS_CLASSES.currentSort);
                    classList.remove(CSS_CLASSES.currentSortAsc);
                    classList.remove(CSS_CLASSES.currentSortDesc);
                }

            }
        }
    };
})(esaks.utils.settings);