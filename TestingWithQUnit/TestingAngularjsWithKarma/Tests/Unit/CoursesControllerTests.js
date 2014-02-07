'use strict';

describe("CoursesController", function () {
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