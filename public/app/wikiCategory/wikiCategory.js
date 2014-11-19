'use strict';

angular.module('myAppRename.wikiCategory', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/wikiCategory', {
    templateUrl: 'app/wikiCategory/wikiCategory.html',
    controller: 'wikiCategory'
  });
}])

.controller('wikiCategory', function ($scope, $http) {
    $http({
      method: 'GET',
      url: 'api/user'
    }).
      success(function (data, status, headers, config) {
        $scope.users = data;
      }).
      error(function (data, status, headers, config) {
        $scope.error = data;
      });

      $scope.letters = [
        "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
      ]
});



