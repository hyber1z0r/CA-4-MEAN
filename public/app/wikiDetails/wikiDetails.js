'use strict';

angular.module('myAppRename.wikiDetail', ['ngRoute', 'ngAnimate'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/wikiDetails/:title', {
    templateUrl: 'app/wikiDetails/wikiDetails.html',
    controller: 'WikiDetailsCtrl'
  })
      .when('/wikiDetails', {
          template: '<p>Not found</p>'
      })
}])

.controller('WikiDetailsCtrl',['$scope','wikiFactory','$routeParams', function($scope, wikiFactory, $routeParams) {
        if($routeParams.title){
            wikiFactory.getWiki($routeParams.title, function (err, data) {
                $scope.wiki = data;
            })
        }
  }]);
