/**
 * A simple 'global' counter used to demo shared access to modules across requirejs contexts
 */
/*global define*/
define(function(require) {
    'use strict';

    var value = 0;

    return {
        inc: function inc() {
            value += 1;
        },

        val: function() {
            return value;
        }
    }
});
