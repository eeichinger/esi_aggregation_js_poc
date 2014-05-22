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
            "jquery": "jquery-private"
        },
        "jquery-private": { "jquery": "jquery" }
    },
    shim: {
        "underscore": {
//                    exports: "_",
            init: function() {
                return this._.noConflict();
            }
        },
    },
});
