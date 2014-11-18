global.TEST_DATABASE = "mongodb://localhost/TestDataBase_yy1243";

var should = require("should");
var app = require("../../server/app");
var mongoose = require("mongoose");
var wiki = mongoose.model("wiki");

describe('Datalayer', function () {
    beforeEach(function (done) {
        wiki.remove({}, function () {
            var array = [];
            wiki.create(array, function (err) {
                done();
            });
        });
    });
});


