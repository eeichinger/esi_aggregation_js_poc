/*global require, define*/
define(function(require) {
    'use strict';
    var domReady = require('domReady');
    var $ = require('jquery');
    var events = require('events');
    var log4js = require('log4js');

    var log = log4js.getLogger("sampleapp");

    var lang_received = false;

    function queryLanguage() {
        if (lang_received) return;

        log.info('sending query:lang request');
        events.trigger("query:lang");
        setTimeout(queryLanguage, 10);
    }

    domReady(function() {
        events.on("change:lang", function(evt) {
            log.info('received change:lang notification');
            lang_received = true;
            $('#sampleapp-content').find('#selectedLanguage').text(evt.language);
        });
        queryLanguage();
        log.info("sampleapp initialised DOM");
    });

    log.info('sampleapp initialised');
});
