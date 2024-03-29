﻿/// <reference path="../src/App2.js" />
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

            var spy = sinon.spy(app, "divide");

            var result = app.divide(1, 3);
            expect(result).toBeGreaterThan(0.33);
            expect(result).toBeLessThan(0.34);
            expect(result).toBeBetween(0.33, 0.34);

            expect(sinon.assert.calledWithMatch(spy, sinon.match.number));
            expect(sinon.assert.calledWithMatch(spy, sinon.match(function (value1, value2) {
                return value1 >= 1 && value1 < 10;
            }, "between 1 and 2")));
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

        describe("Assertions", function () {

            xit("should use a built-in assert", function () {
                var spy = sinon.spy();
                //mySUT.callCallBack(spy);
                expect(spy.called).toBe(true);
            });

            xit("should use a sinon assert", function () {
                var spy = sinon.spy();
                //mySUT.callCallBack(spy);
                sinon.assert.called(spy);
            })
        });

        describe("Stubs", function () {

            describe("Combat attack", function () {
                it("should damage the defender if the hit is successful", function () {
                    var combat = new Combat();
                    var defender = sinon.stub(new Character());
                    var attacker = sinon.stub(new Character());
                    attacker.damage = 5;
                    attacker.calculateHit.returns(true);

                    combat.attack(attacker, defender);

                    expect(defender.takeDamage.called).toBe(true);
                    expect(defender.takeDamage.getCall(0).calledWith(5)).toBe(true);
                })
            });

        });

        describe("Mocks", function () {
            describe("Combat attack", function () {
                it("should damage the defender if the hit is successful", function () {
                    var combat = new Combat();
                    var defender = new Character();
                    var mockDefender = sinon.mock(defender);
                    var expectation = mockDefender.expects("takeDamage").once().withArgs(5);

                    var attacker = sinon.stub(new Character());
                    attacker.damage = 5;
                    attacker.calculateHit.returns(true);

                    combat.attack(attacker, defender);

                    expectation.verify();
                })
            });
        });


        describe("Facking Timers", function () {
            var myClass, spy, clock;
            beforeEach(function () {
                myClass = {
                    doTimeout: function (cb) {
                        setTimeout(cb, 1000);
                    },
                    hide: function () {
                        $('#hideMe').fadeOut();
                    }
                };

                $('#hideMe').show();
                spy = sinon.spy(cb);
            });

            afterEach(function () {
                if (clock)
                    clock.restore();
            })

            var cb = function () {
                console.log('cb called');
            };

            it("should be able to handle timeouts", function () {
                clock = sinon.useFakeTimers();

                myClass.doTimeout(spy);
                clock.tick(1010);
                expect(spy.called).toBe(true);
            })

            it("should be able to handle animations", function () {
                clock = sinon.useFakeTimers();

                myClass.hide();
                clock.tick(1010);
                expect($('#hideMe').is(':visible')).toBe(false);
            })

            it("should be able to fake dates", function () {
                var initialDate = 1357423755011;

                // set the clock to this date
                clock = sinon.useFakeTimers(initialDate);

                var date1 = Date.now();
                console.log(date1);
                clock.tick(1010);

                var date2 = Date.now();
                console.log(date2);

                clock.restore();

                var date3 = Date.now();
                console.log(date3);

            })
        });

    })
});