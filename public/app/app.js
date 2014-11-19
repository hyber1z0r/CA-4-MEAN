'use strict';

// Declare app level module which depends on views, and components
angular.module('myAppRename', [
  'ngRoute',
  'myAppRename.controllers',
  'myAppRename.directives',
  'myAppRename.services',
  'Factories',
  'myAppRename.filters',
  'myAppRename.Home',
  'myAppRename.wikiList',
  'myAppRename.wikiCategory'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/Home'});
}]);
