'use strict';

angular.module('myAppRename.wikiList', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/wikiList', {
    templateUrl: 'app/wikiList/wikiList.html',
    controller: 'WikiListCtrl'
  });
}])

.controller('WikiListCtrl',['$scope','wikiFactory', function($scope, wikiFactory) {
       $scope.search = function () {
            wikiFactory.findWiki($scope.searchTitle, function (err, data) {
                $scope.wikis = data;
                $scope.hasBeenSearched = true;
            })
        }


  }]);
