var mongoose = require('mongoose');
var wiki = mongoose.model('wiki');

/* Returns a Wiki object that matched the title, otherwise undefined */
function getWiki(title, callback) {
    wiki.find({title: title}, function (err, wiki) {
        if (err) {
            callback(err);
        }
        else {
            callback(null, wiki[0]);
        }

    });
}

/* Returns all Wiki objects that matched the searchString, - searches in all properties. Otherwise undefined */
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
                callback(err);
            } else if (wikis.length == 0) {
                callback();
            }
            else {
                callback(null, wikis);
            }
        }
    );
}

/* Gets all distinct categories, otherwise undefined */
function getCategories(callback) {
    wiki.find().distinct('categories', function (err, categories) {
        if (err) {
            callback(err);
        } else if (categories.length == 0) {
            callback();
        } else {
            callback(null, categories);
        }
    })
}

/* Returns all Wiki objects that matches the category you searched for, otherwise undefined */
function getWikisWithCategory(category, callback) {
    wiki.find({categories: {$in: [category]}}, 'title abstract', function (err, wikis) {
        if (err) {
            callback(err);
        } else if (wikis.length == 0) {
            callback();
        } else {
            callback(null, wikis);
        }
    });
}

/* Exported functions */
module.exports.getWiki = getWiki;
module.exports.findWiki = findWiki;
module.exports.getCategories = getCategories;
module.exports.getWikisWithCategory = getWikisWithCategory;