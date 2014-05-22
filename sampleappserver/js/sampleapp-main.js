/*global require, define*/
define(function(require) {
    'use strict';
    var domReady = require('domReady');
    var $ = require('jquery');
    var events = require('events');
    var log = require('./mylogger');

    domReady(function() {
        log.info('sending query:lang request');
        events.trigger("query:lang");
        events.on("change:lang", function(evt) {
            log.info('received change:lang notification');
            $('#sampleapp-content').find('#selectedLanguage').text(evt.language);
        });
        log.info("sampleapp initialised DOM");
    });

    log.info('sampleapp initialised');
});
