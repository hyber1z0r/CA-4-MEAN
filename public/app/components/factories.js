'use strict';


/* Factories */
var app = angular.module('Factories', []);

app.factory('wikiFactory', function ($http) {

    var getWiki = function (title, callback) {
        $http.get("/api/wiki?title=" + title)
            .success(function (data) {
                callback(null, data);
            })
            .error(function (err) {
                callback(err);
            });
    };

    var findWiki = function (search, callback) {
        $http.get("/api/findWiki?q=" + search)
            .success(function (data) {
                callback(null, data);
            })
            .error(function (err) {
                callback(err);
            });
    };

    var allCategories = function (callback) {
        $http.get("/api/categories")
            .success(function (data) {
                callback(null, data);
            })
            .error(function (err) {
                callback(err);
            });
    };

    var searchCategories = function (search, callback) {
        $http.get("/api/categories?q=" + search)
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