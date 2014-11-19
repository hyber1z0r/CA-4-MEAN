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
    });
