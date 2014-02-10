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
    var scope, $controllerConstructor;

    beforeEach(module('phonecatApp'));
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        $controllerConstructor = $controller;
    }));
    describe("PhoneListCtrl", function () {
        it('should create "phones" model with 3 phones', function () {
            var ctrl = $controllerConstructor('PhoneListCtrl', { $scope: scope });
            expect(scope.phones.length).toBe(3);
        });

        it('should set the default value of orderProp model', function () {
            var ctrl = $controllerConstructor('PhoneListCtrl', { $scope: scope });
            expect(scope.orderProp).toBe('age');
        });
    });
});