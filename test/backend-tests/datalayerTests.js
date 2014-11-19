global.TEST_DATABASE = "mongodb://localhost/TestDataBase_yy1243";

var should = require("should");
var app = require("../../server/app");
var mongoose = require("mongoose");
var wiki = mongoose.model("wiki");
var dataLayer = require('../../server/datalayer/datalayer');
var testdata = require('./testdb');

describe('Datalayer', function () {

    /* Inserts test wikis in the test db */
    beforeEach(function (done) {
        testdata.insertWikis(function () {
            done();
        });
    });


    describe('getWikis', function () {
        it('Should return a whole Wiki object', function (done) {
            var title = 'An American in Paris';
            dataLayer.getWiki(title, function callback(err, document) {
                should.not.exist(err);
                document.title.should.equal(title);
                document.should.have.property('url');
                document.should.have.property('abstract');
                document.should.have.property('categories');
                document.should.have.property('headings');
                document.should.have.property('links');
                done();
            });
        });

        it('Should be undefined, when not found', function (done) {
            var title = 'ajksdalkjdlaksjdaskjda';
            dataLayer.getWiki(title, function callback(err, document) {
                should.not.exist(err);
                (typeof document).should.equal('undefined');
                done();
            });
        });
    });

    describe('findWiki', function () {
        it('Should find 2 documents', function (done) {
            var search = 'science';
            dataLayer.findWiki(search, function callback(err, documents) {
                should.not.exist(err);
                documents.length.should.equal(2);
                done();
            });
        });

        it('Should find 2 documents (Case insensitive)', function (done) {
            var search = 'scIeNCe';
            dataLayer.findWiki(search, function callback(err, documents) {
                should.not.exist(err);
                documents.length.should.equal(2);
                done();
            });
        });

        it('Should be undefined when not found', function (done) {
            var search = 'asdasdadasdadasdasdasdasdadad';
            dataLayer.findWiki(search, function callback(err, documents) {
                should.not.exist(err);
                (typeof documents).should.equal('undefined');
                done();
            });
        });
    });

    describe('getCategories', function () {
        it('Should find 17 categories', function (done) {
            dataLayer.getCategories(function callback(err, documents) {
                should.not.exist(err);
                documents.length.should.equal(17);
                done();
            });
        });
    });

    describe('getWikisWithCategory', function () {
        it('Should return 2 wiki objects', function (done) {
            var category = 'Austro-Asiatic languages';
            dataLayer.getWikisWithCategory(category, function callback(err, documents) {
                should.not.exist(err);
                documents.length.should.equal(2);
                done();
            });
        });

        it('Should return undefined when no documents found', function (done) {
            var category = 'ASDJIOPQWEJDKOPAJSEasd';
            dataLayer.getWikisWithCategory(category, function callback(err, documents) {
                should.not.exist(err);
                (typeof documents).should.equal('undefined');
                done();
            });
        });
    });
});


