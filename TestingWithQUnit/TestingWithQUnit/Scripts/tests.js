/// <reference path="../App.js" />
module('module 1');

test("hello test", function () {
    ok(1 == "1");
});

test("expect", 2, function () {

    // or you can use the below statement to expect 2 asserts
    //expect(2);
    ok(1 == "1");
    ok(1 === 1);
});


module('module 2', {
    setup: function () {
        // run setup before tests are done
    },
    teardown: function () {
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

module('Async Tests');

test("asysn test", function () {
    stop();
    setTimeout(function () {
        ok(true);
        start();
    }, 100);
});

test("asysn test 2", function () {
    // stop 2 times indicating that it has to stop for 2 asysn timeouts
    stop(2);
    setTimeout(function () {
        ok(true);
        start();
    }, 200);

    setTimeout(function () {
        ok(true);
        start();
    }, 100);
});

asyncTest("better asysn test", function () {
    // No need for stop, as it is an asysn Test
    // But still doesn't work if there are 2 timeouts
    setTimeout(function () {
        ok(true);
        start();
    }, 100);
});

module("DOM Tests");

test("jQuery loaded", function () {
    ok($);
});

asyncTest("app.fade", function () {
    app.fade(500);
    setTimeout(function () {
        ok(!$('#div1').is(':visible'));
        start();
    }, 600);
});

asyncTest("app.fade2 - better way", function () {
    app.fade2(500, function () {
        ok(!$('#div1').is(':visible'));
        start();
    }, 600);
});