'use strict';

/* Directives */

angular.module('myAppRename.directives', [])
    .directive('titleAbstract', function () {
        return {
            restrict: 'A',
            replace: 'true',
            templateUrl: '/app/components/templates/titleabstract.html'
        };
    })
    .directive('wikiDetails', function () {
        return {
            restrict: 'A',
            replace: 'true',
            templateUrl: '/app/components/templates/wikitemplate.html'
        }
    })
    .directive('ngEnter', function () {
        return function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                if (event.which === 13) {
                    scope.$apply(function () {
                        scope.$eval(attrs.ngEnter);
                    });
                    event.preventDefault();
                }
            });
        };
    })
    .directive('menuBar', function () {
        return {
            restrict: 'A',
            replace: 'true',
            templateUrl: '/app/components/templates/menubar.html'
        }
    });
