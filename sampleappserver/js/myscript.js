/*globals: require, define*/
define(function(require, exports, module) {
    return {
        output: function(text) {
            console.log("logged via output:" + text);
        }
    };
});
