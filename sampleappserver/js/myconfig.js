/*globals: require, define*/
define(function(require, exports, module) {
    var domReady = require('domReady');
    var shared = require('shared');
    var myscript = require('./myscript');

    shared.inc();

    domReady(function() {
        myscript.output("yea, got myscript - DOM ready");
    });

    console.log('initialised sampleapp, shared.val is ' + shared.val());
});
