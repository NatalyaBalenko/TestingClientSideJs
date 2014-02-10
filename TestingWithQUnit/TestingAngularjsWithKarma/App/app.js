var phonecatApp = angular.module("phonecatApp", ["ngRoute"]);

phonecatApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/phones', {
        templateUrl: 'App/partials/phone-list.html',
        controller: 'PhoneListCtrl'
    }).when('/phones/:phoneId', {
        templateUrl: 'App/partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
    }).otherwise({
          redirectTo: '/phones'
      });
}]);