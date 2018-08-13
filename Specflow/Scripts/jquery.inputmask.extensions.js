(function ($) {
    //number aliases
    $.extend($.inputmask.defaults.aliases, {
        'norwegian-date': {
            mask: "99.99.9999",
            placeholder: "_",
            repeat: 1
        },
        'number' : {
            mask: '9',
            repeat: 10,
            greedy: false,
            placeholder: " "
        }       
    });
})(jQuery);