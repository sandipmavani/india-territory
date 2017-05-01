"use strict";

var database;
var connect       = require('camo').connect;
var dataPath      = __dirname + '/data';
var uriConnection = 'nedb://' + dataPath;


var Territory     = require('./models/Territory');

var _             = require('underscore');
var async         = require('async');

/*exports.searchFromPINCode = (pincode, callback) => {
    database  = db;
    var res   = [];
    var query = {
        pincode : new RegExp(pincode, 'i')
    };

    Territory.find(query, { populate : true }).then(function(p) {
        async.eachOf(p, function(value, key, cb) {


            res.push(value);
            cb();
        }, function(err) {
            callback(_.chain(res).sortBy('city').sortBy('pincode').value());
        });
    });
    }).catch(err => {
        callback(err);
});
};*/

exports.searchFromPINCode = (pincode, callback) => {
    connect(uriConnection).then(function(db) {
        database  = db;
        var res   = [];
        var query = {
            pincode : new RegExp(pincode, 'i')
        };

        Territory.find(query, { populate : false }).then(function(p) {
            async.eachOf(p, function(value, key, cb) {
                res.push(_.pick(value, 'pincode', 'city'));
                cb();
            }, function(err) {
                callback(_.sortBy(res, 'city'));
            });
        });
    }).catch(err => {
        callback(err);
});
};

/*connect(uriConnection).then(function(db) {
    database  = db;
    var pincode = "792056";
    var res   = [];
    var query = {
        pincode : new RegExp(pincode, 'i')
    };

    Territory.find(query, { populate : true }).then(function(p) {
        async.eachOf(p, function(value, key, cb) {


            res.push(value);
            cb();
        }, function(err) {
            callback(_.chain(res).sortBy('city').sortBy('pincode').value());
        });
    });
});*/
/*connect(uriConnection).then(function(db) {
    database = db;
    var pincode = "792056";
    var res = [];
    var query = {
        pincode: new RegExp(pincode, 'i')
    };

    Territory.find(query, {populate: true}).then(function (p) {
        async.eachOf(p, function (value, key, cb) {
          console.log(value);
            res.push(ci);
            cb();
        }, function (err) {
            callback(_.chain(res).sortBy('name').sortBy('province').value());
        });
    });
}).catch(err => {
 callback(err);
 });*/

/*connect(uriConnection).then(function(db) {
    database  = db;
    var name ="Kabupaten";
    var res   = [];
    var query = {
        name : new RegExp(name, 'i')
    };

    CityModel.find(query, { populate : true }).then(function(p) {
        async.eachOf(p, function(value, key, cb) {
            var pr      = _.pick(value, 'province');
            var ci      = _.pick(value, 'name');
            ci.province = pr.province.name;

            res.push(ci);
            cb();
        }, function(err) {
            callback(_.chain(res).sortBy('name').sortBy('province').value());
        });
    });
}).catch(err => {
    callback(err);
});*/
/*
connect(uriConnection).then(function(db) {
    database = db;

    var lassie = Territory.create({
        "territoryId" : "643c07e0cc2c2d6b5c11d125f6753cfd",
        "pincode" : "792056",
        "area" : "Lallung",
        "district" : "Changlang",
        "state" : "Arunachal Pradesh",
        "city" : "Lallung",
        "country" : "India"
    });

    lassie.save().then(function(l) {
        console.log(l._id);
    });
}).catch(err => {
    callback(err);
});*/
