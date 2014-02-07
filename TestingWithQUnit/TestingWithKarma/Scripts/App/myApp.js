var app = (function () {
    var sum = function (a, b) {

        if (a === undefined || b === undefined)
            return undefined;

        if (typeof a !== 'number' || typeof b !== 'number') {
            return undefined;
        }

        var result = a + b;
        return a + b;
    };

    var divide = function (a, b) {
        return a / b;
    };

    return {
        sum: sum,
        divide: divide
    };
})();