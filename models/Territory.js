/**
 * Created by sandipmavani on 01/05/17.
 */
"use strict";

var Document = require('camo').Document;

class Territory extends Document {
    constructor() {
        super();

        this.pincode   = String;
        this.area    = String;
        this.district   = String;
        this.state    = String;
        this.city   = String;
        this.country    = String;
    }

    static collectionName() {
        return 'territory';
    }
}

module.exports = Territory;
