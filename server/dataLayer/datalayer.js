var mongoose = require('mongoose');
var wiki = mongoose.model('wiki');

/* Get a wikit title function */
function getWikiTitle(title, callback) {
    wiki.find({title: title}, function (err, wiki) {
        if (err) {
            callback();
        }
        else {
            callback(wiki);
        }

    });
}

/* findWiki function*/
function findWiki(searchString, callback) {
    wiki.find({$all: new RegExp('^'+searchString+'$', "i")}, 'title abstract', function (err, wikis) {
        if (err) {
            callback();
        } else {
            console.log(wikis);
            callback(wikis);
        }
    })
}

/* Categories function*/
function getCategories(callback) {
    wiki.find().distinct('categories', function (err, categories) {
        if (err){
            callback();
        }else {
            callback(categories);
        }
    })
}

/* Getwikiswithcategory function is made */
function getWikisWithCategory(category, callback) {
    wiki.find({categories: {$all:category}}, 'title abstract', function (err, wikis){
        if (err){
            callback();
        }else{
            callback(wikis);
        }
    })
}


/* Modules */
module.exports.getWiki = getWikiTitle;
module.exports.findWiki = findWiki;
module.exports.getCategories = getCategories;
module.exports.getWikisWithCategory = getWikisWithCategory;

/* Geeks Joke : The test doesn't work. Its Karma.... */