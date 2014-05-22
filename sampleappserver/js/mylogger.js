/**
 * Just an example for a little library that is only used by the sampleapp
 */
/*global require, define*/
define(function(require) {
    'use strict';

    return {
        info: function(text) {
            console.log("MyLogger [INFO] " + text);
        }
    };
});
