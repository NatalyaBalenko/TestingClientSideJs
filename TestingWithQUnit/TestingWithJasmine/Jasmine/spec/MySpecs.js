/// <reference path="../src/App.js" />

describe("App", function () {
    describe("DOM", function () {
        //Create element before each test is run
        beforeEach(function () {
            $('body').append("<div id='div1'></div>");
        });

        //Delete element after each test is run
        afterEach(function () {
            $('#div1').remove();
        });

        var divId = '#div1';

        it('should populate element passed with the result', function () {
            var result = app.sum(3, 4, divId);
            expect(result).toBe(7);
            expect($(divId).html()).toBe('7');
        });

    });

    describe("Testing timeout calls", function () {
        var timerCallback;
        beforeEach(function () {
            timerCallback = jasmine.createSpy("timerCallback");
            jasmine.clock().install();
        });

        afterEach(function () {
            jasmine.clock().uninstall();
        });

        it("causes a timeout to be called synchronously", function () {
            setTimeout(function () {
                timerCallback();
            }, 100);

            expect(timerCallback).not.toHaveBeenCalled();

            jasmine.clock().tick(1001);

            expect(timerCallback).toHaveBeenCalled();
        });
    });

    describe("Math", function () {

        it("should be able to match 1 as truthy", function () {
            expect(1).toBeTruthy();
        });

        it("should be able to add 2 numbers", function () {
            var result = app.sum(3, 4);
            expect(result).toBe(7);
        });

        it("should be able to divide 2 numbers", function () {
            var result = app.divide(8, 4);
            expect(result).toBe(2);
        });

        // Put an x in front of the describe or it to skip the contained tests, example xit, xdescribe.
        it("should be able to divide any 2 rational numbers", function () {
            var result = app.divide(1, 3);
            expect(result).toBeGreaterThan(0.33);
            expect(result).toBeLessThan(0.34);
            expect(result).toBeBetween(0.33, 0.34);
        });


    });

});