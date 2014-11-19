global.TEST_DATABASE = "mongodb://localhost/TestDataBase_yy1243";

var should = require("should");
var app = require("../../server/app");
var mongoose = require("mongoose");
var wiki = mongoose.model("wiki");
var supertest = require('supertest');
var testdata = require('./testdb');

describe('REST API', function () {

    /* Inserts test wikis in the test db */
    beforeEach(function (done) {
        testdata.insertWikis(function () {
            done();
        });
    });

    describe('for /wiki?title=', function () {
        it('Should get 1 wiki; "Abu Dhabi"', function (done) {
            supertest(app)
                .get('/api/wiki?title=Abu+Dhabi')
                .end(function (err, res) {
                    var w = JSON.parse(res.text);
                    w.title.should.equal('Abu Dhabi');
                    w.should.have.property('url');
                    w.should.have.property('abstract');
                    w.should.have.property('categories');
                    w.should.have.property('headings');
                    w.should.have.property('links');
                    done();
                });
        });

        it('Should return with status 404 when not found', function (done) {
            supertest(app)
                .get('/api/wiki?title=ThisWillNotBeFound_XaSeWQsDEqSd')
                .end(function (err, res) {
                    res.statusCode.should.equal(404);
                    var nf = JSON.parse(res.text);
                    nf.status.should.equal('Not found');
                    done();
                });
        });
    });

    describe('for /findWiki?q=', function () {
        it('Should return with status 404 when nothing found', function (done) {
            supertest(app)
                .get('/api/findWiki?q=EOWQPOQJWEONQPWENOQP')
                .end(function (err, res) {
                    res.statusCode.should.equal(404);
                    var nf = JSON.parse(res.text);
                    nf.status.should.equal('Not found');
                    done();
                });
        });

        it('Should return 2 documents', function (done) {
            supertest(app)
                .get('/api/findWiki?q=science')
                .end(function (err, res) {
                    var ws = JSON.parse(res.text);
                    ws.length.should.equal(2);
                    ws[0].should.have.property('title');
                    ws[0].should.not.have.property('url');
                    ws[0].should.have.property('abstract');
                    ws[0].should.not.have.property('categories');
                    ws[0].should.not.have.property('headings');
                    ws[0].should.not.have.property('links');
                    done();
                });
        });
    });

    describe('for /categories and /categories?q=', function () {
        it('Should return all categories (17)', function (done) {
            supertest(app)
                .get('/api/categories')
                .end(function (err, res) {
                    var cats = JSON.parse(res.text);
                    cats.length.should.equal(17);
                    done();
                });
        });

        it('Should return two wikis objects', function (done) {
           supertest(app)
               .get('/api/categories?q=Austro-Asiatic+languages')
               .end(function (err, res) {
                   var ws = JSON.parse(res.text);
                   ws.length.should.equal(2);
                   done();
               });
        });

        it('Should return with status 404 when nothing found', function (done) {
            supertest(app)
                .get('/api/categories?q=SADKAJDSAKL')
                .end(function (err, res) {
                    res.statusCode.should.equal(404);
                    var nf = JSON.parse(res.text);
                    nf.status.should.equal('Not found');
                    done();
                });
        });

        it('Should return all categories when search query is empty', function (done) {
            supertest(app)
                .get('/api/categories?q=')
                .end(function (err, res) {
                    res.statusCode.should.equal(200);
                    var cats = JSON.parse(res.text);
                    cats.length.should.equal(17);
                    done();
                });
        });

    });
});
