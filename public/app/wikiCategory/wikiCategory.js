'use strict';

angular.module('myAppRename.wikiCategory', ['ngRoute', 'ui.bootstrap'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/wikiCategory', {
            templateUrl: 'app/wikiCategory/wikiCategory.html',
            controller: 'wikiCategory'
        });
    }])

    .controller('wikiCategory', function ($scope, wikiFactory, $location, $anchorScroll) {
        var alphabet = [
            "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "#", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"
        ];

        $scope.letters = alphabet.slice(0, alphabet.length - 10);

        $scope.loaded = false;
        wikiFactory.allCategories(function (err, data) {
            $scope.loaded = true;
            var allcats = data.splice(1, data.length);
            var result = [];
            for (var i = 0; i < alphabet.length; i++) {
                var arr = allcats.filter(function (e) {
                    return e.charAt(0) == alphabet[i];
                });
                result.push(arr);
            }
            $scope.cats = result;
        });

        $scope.scrollTo = function(id) {
            var old = $location.hash();
            $location.hash(id);
            $anchorScroll();
            //reset to old to keep any additional routing logic from kicking in
            $location.hash(old);
        };

        $scope.filteredCats;
        $scope.currentPage = 1;
        $scope.numPerPage = 10;
        $scope.maxSize = 5;

        $scope.numPages = function () {
            return Math.ceil($scope.cats.length / $scope.numPerPage);
        };

        $scope.$watch('currentPage + numPerPage', function() {
            var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                , end = begin + $scope.numPerPage;

            $scope.filteredCats = $scope.cats.slice(begin, end);
        });
    });



