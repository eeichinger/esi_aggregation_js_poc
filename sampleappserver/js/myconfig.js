/*globals: require, define*/
define(['require', 'domReady', './myscript'], function(require, domReady, myscript) {

    domReady(function() {
        myscript.output("yea, got myscript");
    });

    console.log('initialised sampleapp');
});
