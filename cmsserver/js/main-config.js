/**
 * config of the default requirejs load context. Don't load via AMD/define() to ensure it gets initialised before any
 * other scripts execute.
 *
 * sets the base url and configures all "global" libs as noConflict() versions (i.e. removes $ and _ from the global namespace)
 * to avoid conflicts
 */
/*global require*/
'use strict';
require.config({
    baseUrl: '/cms/js/lib/',
    map: {
        "*": {
            "jquery": "jquery-private",
        },
        "jquery-private": { "jquery": "jquery" }
    },
    shim: {
        "log4javascript": {
//            exports: 'log4javascript',
            init: function() {
                log4javascript.getRootLogger().addAppender(new log4javascript.BrowserConsoleAppender());
                log4javascript.setEnabled(true);
                return log4javascript;
            }
        },
        "underscore": {
//                    exports: "_",
            init: function() {
                return this._.noConflict();
            }
        },
    },
});
