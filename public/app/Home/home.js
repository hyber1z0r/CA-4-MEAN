'use strict';

angular.module('myAppRename.Home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'app/Home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', function() {
});