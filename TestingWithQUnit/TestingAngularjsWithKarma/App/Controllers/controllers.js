phonecatApp.controller("PhoneListCtrl", ["$scope", "$http", function ($scope, $http) {
    $http.get('/App/phones/phones.json').success(function (data) {
        $scope.phones = data;
    });

    $scope.orderProp = 'age';
}]);