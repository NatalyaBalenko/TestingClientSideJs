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
    var scope, $controllerConstructor, $httpBackend;

    beforeEach(module('phonecatApp'));
    // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
    // This allows us to inject a service but then attach it to a variable
    // with the same name as the service.
    beforeEach(inject(function ($controller, $rootScope, _$httpBackend_) {
        scope = $rootScope.$new();
        $controllerConstructor = $controller;
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('/App/phones/phones.json').
          respond([{ name: 'Nexus S' }, { name: 'Motorola DROID' }]);
    }));

    describe("PhoneListCtrl", function () {
        it('should create "phones" model with 3 phones', function () {
            var ctrl = $controllerConstructor('PhoneListCtrl', { $scope: scope });
            //dump(scope.phones);
            //expect(scope.phones.length).toBe(20);

            expect(scope.phones).toBeUndefined();
            $httpBackend.flush();

            expect(scope.phones).toEqual([{ name: 'Nexus S' },
                                         { name: 'Motorola DROID' }]);
        });

        it('should set the default value of orderProp model', function () {
            var ctrl = $controllerConstructor('PhoneListCtrl', { $scope: scope });
            expect(scope.orderProp).toBe('age');
        });
    });
});