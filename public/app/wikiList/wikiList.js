'use strict';

angular.module('myAppRename.wikiList', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/wikiList', {
    templateUrl: 'app/wikiList/wikiList.html',
    controller: 'WikiListCtrl'
  });
}])

.controller('WikiListCtrl',['$scope','InfoFactory','InfoService', function($scope,InfoFactory,InfoService) {
    $scope.infoFactory = InfoFactory.getInfo();
    $scope.infoService = InfoService.getInfo();
  }]);
