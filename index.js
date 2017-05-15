"use strict";

var database;
var connect       = require('camo').connect;
var dataPath      = __dirname + '/data';
var uriConnection = 'nedb://' + dataPath;

var Territory     = require('./models/Territory');

var _             = require('underscore');
var async         = require('async');

exports.searchFromPINCode = (pincode, callback) => {
    connect(uriConnection).then(function(db) {
        database  = db;
        var res   = [];
        var query = {
            pincode : new RegExp(pincode, 'i')
        };

        Territory.find(query, { populate : false }).then(function(p) {
            async.eachOf(p, function(value, key, cb) {
                res.push(_.pick(value, 'pincode','area','district', 'city','state','country'));
                cb();
            }, function(err) {
                callback(_.sortBy(res, 'city'));
            });
        });
    }).catch(err => {
        callback(err);
});
};

exports.searchFromCity = (city, callback) => {
    connect(uriConnection).then(function(db) {
        database  = db;
        var res   = [];
        var query = {
            city : new RegExp(city, 'i')
        };

        Territory.find(query, { populate : false }).then(function(p) {
            async.eachOf(p, function(value, key, cb) {
                res.push(_.pick(value, 'pincode','area','district', 'city','state','country'));
                cb();
            }, function(err) {
                callback(_.sortBy(res, 'city'));
            });
        });
    }).catch(err => {
        callback(err);
});
};
exports.getStateData = (state, callback) => {
    connect(uriConnection).then(function(db) {
        database  = db;
        var res   = [];
        var query = {
            state : new RegExp(state, 'i')
        };

        Territory.find(query, { populate : false }).then(function(p) {
            async.eachOf(p, function(value, key, cb) {
                res.push(_.pick(value, 'pincode','area','district', 'city','state','country'));
                cb();
            }, function(err) {
                callback(_.sortBy(res, 'state'));
            });
        });
    }).catch(err => {
        callback(err);
});
};


