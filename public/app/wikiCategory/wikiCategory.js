'use strict';

angular.module('myAppRename.wikiCategory', ['ngRoute', 'ui.bootstrap'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/wikiCategory', {
            templateUrl: 'app/wikiCategory/wikiCategory.html',
            controller: 'wikiCategory'
        });
    }])

    .controller('wikiCategory', function ($scope, wikiFactory, $location, $anchorScroll, myCache) {
        var alphabet = [
            "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "#", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"
        ];
        $scope.letters = alphabet.slice(0, alphabet.length - 10);

        $scope.temp = function (letter) {
            $scope.filteredArray = allcats.filter(function (e) {
                if(letter != '#') return e.charAt(0) == letter;
                return e.charAt(0).match(new RegExp("[0-9]"));

            });
            ready();
        }

        var ready = function () {
            $scope.filteredCats;
            $scope.currentPage = 1;
            $scope.numPerPage = 10;
            $scope.maxSize = 5;

            $scope.numPages = function () {
                return Math.ceil($scope.filteredArray.length / $scope.numPerPage);
            };

            $scope.$watch('currentPage + numPerPage + filteredArray', function() {
                var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                    , end = begin + $scope.numPerPage;

                $scope.filteredCats = $scope.filteredArray.slice(begin, end);
            });
        }
        var allcats;
        $scope.loaded = false;
        var cache = myCache.get('myData');
        if (cache) {
            allcats = cache;
            $scope.loaded = true;
            $scope.temp('A');

        }
        else {
            wikiFactory.allCategories(function (err, data) {
                $scope.loaded = true;
                allcats = data.splice(1, data.length);
                myCache.put('myData', allcats);
                $scope.temp('A');

            });
        }
        
         $scope.getTitles = function (cat) {
             wikiFactory.searchCategories(cat, function (err, data) {
                 $scope.content = data;
             })
         }




    });



