var mongoose = require('mongoose');
var wiki = mongoose.model('wiki');

/* GET A User From The DataBase */
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

function getCategories(callback) {
    wiki.find().distinct('categories', function (err, categories) {
        if (err){
            callback();
        }else {
            callback(categories);
        }
    })
}


module.exports.getWiki = getWikiTitle;
module.exports.findWiki = findWiki;

