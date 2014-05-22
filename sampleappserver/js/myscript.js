/*globals: require, define*/
define(function(require) {
    var domReady = require('domReady');
    var shared = require('shared');
    var mylogger = require('./mylogger');

    shared.inc();

    domReady(function() {
        mylogger.info("yea, got myscript - DOM ready and shared.val is " + shared.val());
    });

    console.log('initialise sampleapp complete');
});
