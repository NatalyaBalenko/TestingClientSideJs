phonecatApp.controller("PhoneListCtrl", ["$scope", "$http", function ($scope, $http) {
    $http.get('/App/phones/phones.json').success(function (data) {
        $scope.phones = data;
    });

    $scope.orderProp = 'age';
}]);


phonecatApp.controller("PhoneDetailCtrl", ["$scope", "$routeParams", "$http", function ($scope, $routeParams, $http) {
    $http.get('App/phones/' + $routeParams.phoneId + '.json').success(function (data) {
        $scope.phone = data;
    });
}]);