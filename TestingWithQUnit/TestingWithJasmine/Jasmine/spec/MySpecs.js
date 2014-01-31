/// <reference path="../src/App.js" />

describe("App", function () {
    describe("UI", function () {
       
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

        it("should be able to divide any 2 rational numbers", function () {
            var result = app.divide(1, 3);
            expect(result).toBeGreaterThan(0.33);
            expect(result).toBeLessThan(0.34);
            expect(result).toBeBetween(0.33, 0.34);
        });


    });

});