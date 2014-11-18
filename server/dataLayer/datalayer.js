var mongoose = require('mongoose');
var wiki = mongoose.model('wiki');
var async = require('async');

/* GET A User From The DataBase */
function getWikiTitle(title, callback) {
    wiki.find({title: title}, function (err, wiki) {
        if (err) {
            callback();
        }
        else {
            callback(wiki[0]);
        }

    });
}

function findWiki(searchString, callback) {
    wiki.find(
        {
            $or: [
                {title: {"$in": [new RegExp(searchString, "i")]}},
                {url: {"$in": [new RegExp(searchString, "i")]}},
                {abstract: {"$in": [new RegExp(searchString, "i")]}},
                {categories: {"$in": [new RegExp(searchString, "i")]}},
                {links: {"$in": [new RegExp(searchString, "i")]}},
                {headings: {"$in": [new RegExp(searchString, "i")]}}
            ]
        }, 'title abstract', function (err, wikis) {
            if (err) {
                callback();
            } else if (wikis.length == 0) {
                callback();
            }
            else {
                callback(wikis);
            }
        }
    );
}

function getCategories(callback) {
    wiki.find().distinct('categories', function (err, categories) {
        if (err) {
            callback();
        } else {
            callback(categories);
        }
    })
}

function getWikisWithCategory(category, callback) {
    wiki.find({categories: {$in: [category]}}, 'title abstract', function (err, wikis) {
        if (err) {
            callback();
        } else {
            callback(wikis);
        }
    })
}

module.exports.getWiki = getWikiTitle;
module.exports.findWiki = findWiki;
module.exports.getCategories = getCategories;
module.exports.getWikisWithCategory = getWikisWithCategory;

