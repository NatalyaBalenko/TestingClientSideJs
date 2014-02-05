/// <reference path="../src/App2.js" />
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

    describe("Jasmine Spies", function () {


        describe("spies", function () {

            var callMyCallback = function (cb) {
                cb();
            }

            it("should spy on my callback", function () {
                var spy = jasmine.createSpy('mySpy');
                callMyCallback(spy);
                expect(spy).toHaveBeenCalled();
            });

        })

        describe("spyOn app.doSomething", function () {
            var mySpy;
            beforeEach(function () {
                mySpy = spyOn(app, 'doSomething');
                app.doSomething();
                app.doSomething();
            });


            it("should spy on app.doSomething", function () {
                expect(mySpy).toHaveBeenCalled();
            });

            it("should have called app.doSomething twice", function () {
                expect(app.doSomething.calls.count()).toEqual(2);
            });

        })

        describe("spyOn", function () {
            var mySpy;

            it("should spy on app.getValue", function () {
                mySpy = spyOn(app, 'getValue').and.returnValue(10);
                expect(app.getValue()).toEqual(10);
            });

            it("should call fake", function () {
                mySpy = spyOn(app, 'getValue').and.callFake(function () {
                    return 10;
                });
                expect(app.getValue()).toEqual(10);
            });

            it("should callThrough", function () {
                mySpy = spyOn(app, 'getValue').and.callThrough();
                app.getValue();
                app.getValue();

                expect(app.getValue()).toEqual(5);
                expect(app.getValue.calls.count()).toEqual(3);
            });

            it("should throwError", function () {
                mySpy = spyOn(app, 'getValue').and.throwError(new Error("Error"));
                var value;
                try {
                    value = app.getValue();
                } catch (ex) {
                    value = 100;
                }
                expect(value).toEqual(100);
            });

        })

    });

    describe("Sinon", function () {
        describe("Spies", function () {
            it("should spy on a callback", function () {
                var spy = sinon.spy();
                mySUT.callCallBack(spy);

                expect(spy.called).toBe(true);
            });

            it("should call a real implementation if given a real function to spy on", function () {
                var spy = sinon.spy(realCallback);
                var returnValue = mySUT.callCallBackWithReturnValue(spy);

                expect(spy.called).toBe(true);
                expect(returnValue).toBe(4);

            });


            it("should spy on a method of an object", function () {
                var spy = sinon.spy(myDep, 'someMethod');
                var returnValue = mySUT.callDependency(myDep);

                expect(spy.called).toBe(true);
                expect(returnValue).toBe(10);

            });

        })
    })
});