/*global define: false */
define(function(require, exports, module) {
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
