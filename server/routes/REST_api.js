var express = require('express');
var router = express.Router();
var datalayer = require('../datalayer/datalayer');

/* Gets the wiki with the given title
 * Uses queries, not params.
 * So to run this, you need to go: /wiki?title=TITLEYOUSEARCH
 * */
router.get('/wiki', function (req, res) {
    if (typeof global.mongo_error !== "undefined") return res.status(500).end('Error: ' + global.mongo_error);
    datalayer.getWiki(req.query.title, function callback(err, data) {
        if (err) return res.status(500).json({error: err.toString()});
        // if the wiki was found
        if (data) {
            res.json(data);
        } else { // if the wiki wasn't found and data is undefined
            res.status(404).json({status: 'Not found'});
        }
    })
});

/* Gets the wikis that matches the search string
 * Search is done in querys, and not params
 * e.g /findWiki?q=SEARCHSTRING
 * */
router.get('/findWiki', function (req, res) {
    if (typeof global.mongo_error !== "undefined") return res.status(500).end('Error: ' + global.mongo_error);
    datalayer.findWiki(req.query.q, function callback(err, data) {
        if (err) return res.status(500).json({error: err.toString()});
        // if the wikis was found
        if (data) {
            res.json(data);
        } else { // if the wikis wasn't found and data is undefined
            res.status(404).json({status: 'Not found'});
        }
    })
});

/* Gets all categories, if just /categories
 *   Else if you search like findWiki with ?q=SEARCHSTRING
 *   It gets all wikis with the category you searched for.
 * */
router.get('/categories', function (req, res) {
    if (typeof global.mongo_error !== "undefined") return res.status(500).end('Error: ' + global.mongo_error);
    if (req.query.q) {
        datalayer.getWikisWithCategory(req.query.q, function callback(err, data) {
            if (err) return res.status(500).json({error: err.toString()});
            // if the wikis was found
            if (data) {
                res.json(data);
            } else { // if the wikis wasn't found and data is undefined
                res.status(404).json({status: 'Not found'});
            }
        })
    } else {
        datalayer.getCategories(function callback(err, data) {
            if (err) return res.status(500).json({error: err.toString()});
            // if the categories was found
            if (data) {
                res.json(data);
            } else { // if the categories wasn't found and data is undefined
                res.status(404).json({status: 'Not found'});
            }
        })
    }
});

module.exports = router;
