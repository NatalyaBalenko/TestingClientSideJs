var app = (function ($) {
    var sum = function(a, b) {
        return a + b;
    };

    var fade = function(duration) {
        $('#div1').fadeOut(duration);
    };
    
    var fade2 = function (duration, callback) {
        $('#div1').fadeOut(duration, callback);
    };

    return {        
        sum: sum,
        fade: fade,
        fade2: fade2
    };
})($);