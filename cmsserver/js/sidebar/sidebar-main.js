/**
 * Main scripts for handling sidebar elements
 */
/*global define*/
define(function (require) {
    'use strict';
    // instead of (potentially) long lists of deps, better use the below "CommonJS" style notation to import libs
    var domReady = require('domReady');
    var counter = require('counter');

    counter.inc();
    console.log("configuring sidebar - counter val is " + counter.val());

    domReady(function (doc) {
        console.log("ok, sidebar DOM configured");
    });
});
