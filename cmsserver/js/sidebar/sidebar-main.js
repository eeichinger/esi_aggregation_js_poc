/**
 * Main scripts for handling sidebar elements
 */
/*global define*/
define(function (require) {
    'use strict';
    // instead of (potentially) long lists of deps, better use the below "CommonJS" style notation to import libs
    var domReady = require('domReady');
    var $ = require('jquery');
    var events = require('events');
    var log4js = require('log4js');

    var log = log4js.getLogger('sidebar');
    var self = this;

    events.on("query:lang", function() {
        log.info('received query:lang, sending response');
        events.trigger("change:lang", { sender: self, language: "en"});
    });

    domReady(function (doc) {
        $('.langlink').click(function() {
            var langlinkEl = $(this);
            var selectedLanguage = langlinkEl.attr('data-text');
            log.info('clicked langlink, selecting lang ' + selectedLanguage + " and notifying listeners");
            events.trigger("change:lang", { sender: self, language: selectedLanguage });
        });
        log.info("sidebar initialised DOM");
    });

    log.info("sidebar initialised");
});
