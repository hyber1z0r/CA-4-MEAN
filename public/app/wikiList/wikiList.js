'use strict';

angular.module('myAppRename.wikiList', ['ngRoute', 'ngAnimate'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/wikiList', {
    templateUrl: 'app/wikiList/wikiList.html',
    controller: 'WikiListCtrl'
  });
}])

.controller('WikiListCtrl',['$scope','wikiFactory','$timeout', function($scope, wikiFactory, $timeout) {
       $scope.search = function () {
            wikiFactory.findWiki($scope.searchTitle, function (err, data) {
                $scope.wikis = data;
                $scope.hasBeenSearched = true;
            })
        }

        $scope.showIt = function (index) {
            $timeout(function(){
                $scope.hovering = index;
            }, 750);
        };
        $scope.hideIt = function (index) {
            $timeout(function() {
                $scope.hovering = index;
            }, 500);  // 500ms delay
        };

  }]);
