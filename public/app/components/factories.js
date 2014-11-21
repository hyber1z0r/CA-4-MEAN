'use strict';


/* Factories */
var app = angular.module('Factories', []);

app.factory('wikiFactory', function ($http) {

    var getWiki = function (title, callback) {
        $http.get("http://localhost:3000/api/wiki?title=" + title)
            .success(function (data) {
                callback(null, data);
            })
            .error(function (err) {
                callback(err);
            });
    };

    var findWiki = function (search, callback) {
        $http.get("http://localhost:3000/api/findWiki?q=" + search)
            .success(function (data) {
                callback(null, data);
            })
            .error(function (err) {
                callback(err);
            });
    };

    var allCategories = function (callback) {
        $http.get("http://localhost:3000/api/categories")
            .success(function (data) {
                callback(null, data);
            })
            .error(function (err) {
                callback(err);
            });
    };

    var searchCategories = function (search, callback) {
        $http.get("http://localhost:3000/api/categories?q=" + search)
            .success(function (data) {
                callback(null, data);
            })
            .error(function (err) {
                callback(err);
            });
    };

    return {
        getWiki: getWiki,
        findWiki: findWiki,
        allCategories: allCategories,
        searchCategories: searchCategories
    }
});

app.factory('myCache', function ($cacheFactory) {
    return $cacheFactory('myData');
});