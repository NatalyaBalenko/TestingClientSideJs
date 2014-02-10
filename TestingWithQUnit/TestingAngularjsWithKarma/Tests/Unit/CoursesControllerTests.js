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
    beforeEach(module('phonecatApp'));
    describe("PhoneListCtrl", function () {
        it('should create "phones" model with 4 phones', inject(function ($controller, $rootScope) {
            var scope = $rootScope.$new(),
                ctrl = $controller('PhoneListCtrl', { $scope: scope });
            expect(scope.phones.length).toBe(4);
        }));
    });
});