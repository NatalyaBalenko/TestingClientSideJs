/// <reference path="../App.js" />
module('module 1');

test("hello test", function () {
    ok(1 == "1");
});


module('module 2', {
    setup: function() {
        // run setup before tests are done
    },
    teardown : function() {
        // run setup before all tests are done
    }
});

test("hello test 2", function () {
    strictEqual(1, 1);
});

test("add 2 numbers", function () {
    var result = app.sum(2, 4);
    strictEqual(result, 6);
});