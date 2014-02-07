describe("App", function () {
    describe("sum", function () {
        it('should get sum of 2 numbers', function () {
            var result = app.sum(3, 4);
            expect(result).toBe(7);
        });

        it('should return undefined if undefined passed', function () {
            var result = app.sum(3, undefined);
            expect(result).toBe(undefined);
        });

        it('should throw an error if anything other than a number is passed', function () {
            var result = app.sum(3, "a");
            expect(result).toBe(undefined);
        });

        //it('should throw an error if more or less than 2 parameterrs are passed', function () {
        //    var result = app.sum(3, 2, 4);
        //    expect(app.sum).toThrow();
        //});

    });
});