'use strict';

xdescribe("CoursesController", function () {
    var scope, $controllerConstructor;

    beforeEach(module("myApp"));

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        $controllerConstructor = $controller;
    }));
    it("should set the name of the user", function () {
        var mockEvents = {};
        var ctrl = $controllerConstructor("CoursesController", { $scope: scope });

        expect(scope.user).toBe("Abhishek Jain");
    });
});



describe("PhoneCat Controllers", function () {
    var scope, ctrl, $httpBackend;

    beforeEach(module('phonecatApp'));
    // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
    // This allows us to inject a service but then attach it to a variable
    // with the same name as the service.

    describe("PhoneListCtrl", function () {

        beforeEach(inject(function ($controller, $rootScope, _$httpBackend_) {
            scope = $rootScope.$new();
            ctrl = $controller('PhoneListCtrl', { $scope: scope });
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('/App/phones/phones.json').
              respond([{ name: 'Nexus S' }, { name: 'Motorola DROID' }]);
        }));

        it('should create "phones" model with 3 phones', function () {
            
            //dump(scope.phones);
            //expect(scope.phones.length).toBe(20);

            expect(scope.phones).toBeUndefined();
            $httpBackend.flush();

            expect(scope.phones).toEqual([{ name: 'Nexus S' },
                                         { name: 'Motorola DROID' }]);
        });

        it('should set the default value of orderProp model', function () {
            expect(scope.orderProp).toBe('age');
        });
    });

    describe("PhoneDetailCtrl", function () {
        beforeEach(inject(function ($controller, $rootScope, _$httpBackend_, $routeParams) {
            scope = $rootScope.$new();
            $routeParams.phoneId = "xyz";
            ctrl = $controller('PhoneDetailCtrl', { $scope: scope });
            
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('App/phones/xyz.json').
              respond({ name: 'phone xyz' });
        }));

        it('should fetch phone detail', function () {
            
            expect(scope.phone).toBeUndefined();
            $httpBackend.flush();

            expect(scope.phone).toEqual({ name: 'phone xyz' });
        });
    });

    describe('filter', function () {

        beforeEach(module('phonecatApp'));

        describe('checkmark', function () {
            it('should convert boolean values to unicode checkmark or cross',
                inject(function (checkmarkFilter) {
                    expect(checkmarkFilter(true)).toBe('\u2713');
                    expect(checkmarkFilter(false)).toBe('\u2718');
                }));
        });
    });
});