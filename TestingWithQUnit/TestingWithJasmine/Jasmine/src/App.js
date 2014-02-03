var app = (function ($) {
    var sum = function (a, b, element) {
        var result = a + b;
        $(element).html(result);
        return a + b;
    };

    var divide = function (a, b) {
        return a / b;
    };


    var fade = function (duration) {
        $('#div1').fadeOut(duration);
    };

    var fade2 = function (duration, callback) {
        $('#div1').fadeOut(duration, callback);
    };

    return {
        sum: sum,
        divide: divide,
        fade: fade,
        fade2: fade2
    };
})($);