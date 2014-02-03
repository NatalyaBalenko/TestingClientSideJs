var app = (function ($) {
    var sum = function (a, b, element) {
        var result = a + b;
        $(element).html(result);
        return a + b;
    };

    var divide = function (a, b) {
        return a / b;
    };

    var doSomething = function () {
        //
    }

    var getValue = function () {
        return 5;
    }


    var fade = function (element, duration) {
        $(element).fadeOut(duration);
    };

    var fade2 = function (duration, callback) {
        $('#div1').fadeOut(duration, callback);
    };

    return {
        sum: sum,
        divide: divide,
        fade: fade,
        fade2: fade2,
        doSomething: doSomething,
        getValue: getValue
    };
})($);