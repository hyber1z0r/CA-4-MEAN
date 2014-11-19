'use strict';


/* Factories */
var app = angular.module('wikiFactory', []);

app.factory('WikiFactory', function ($http) {

    var getWiki = function (title, callback) {
        $http.get("http://localhost:3000/api/wiki?title=" + title)
            .success(function (data) {
                callback(null, data);
            })
            .error(function (err) {
                return callback(err);
            });

    };

    var findWiki = function (search, callback) {
        $http.get("http://localhost:3000/api/findWiki?q=" + search)
            .success(function (data) {
                callback(null, data);
            })
            .error(function (err) {
                return callback(err);
            });

    };

    var allCategories = function (callback) {
        $http.get("http://localhost:3000/api/categories")
            .success(function (data) {
                callback(null, data);
            })
            .error(function (err) {
                return callback(err);
            });

    };

    var searchCategories = function (search, callback) {
            $http.get("http://localhost:3000/api/categories?q=" + search)
                .success(function (data) {
                    callback(null, data);
                })
                .error(function (err) {
                    return callback(err);
                });

    };




    return {
        getWiki: getWiki,
        findWiki: findWiki,
        allCategories: allCategories,
        searchCategories: searchCategories
    }
  });