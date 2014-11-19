'use strict';

angular.module('myAppRename.wikiList', ['ngRoute', 'ngAnimate'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/wikiList', {
            templateUrl: 'app/wikiList/wikiList.html',
            controller: 'WikiListCtrl'
        });
    }])

    .controller('WikiListCtrl', ['$scope', 'wikiFactory', '$timeout', function ($scope, wikiFactory, $timeout) {
        $scope.search = function () {
            $scope.searching = true;
            wikiFactory.findWiki($scope.searchString, function (err, data) {
                if (err) $scope.error = 'There was an error: '+ err.status;
                else if (data.length == 0) {
                    $scope.notfound = 'Nothing matched your search for: ' + $scope.searchString;
                } else {
                    $scope.error = '';
                    $scope.wikis = data;
                }
                $scope.searching = false;
            })
        };

        $scope.showIt = function (index) {
            $timeout(function () {
                $scope.hovering = index;
            }, 750);
        };
        $scope.hideIt = function (index) {
            $timeout(function () {
                $scope.hovering = index;
            }, 500);  // 500ms delay
        };

    }]);
