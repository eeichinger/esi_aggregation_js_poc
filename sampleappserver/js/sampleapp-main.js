/*global require, define*/
define(function(require) {
    'use strict';
    var domReady = require('domReady');
    var counter = require('counter');
    var mylogger = require('./mylogger');

    counter.inc();

    domReady(function() {
        mylogger.info("yea, got myscript - DOM ready and counter.val is " + counter.val());
    });

    console.log('initialise sampleapp complete');
});
