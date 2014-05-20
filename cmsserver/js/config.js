/*global require: false, define: false, requirejs: false,
 window: false, clearInterval: false, document: false,
 self: false, setInterval: false */

require.config({
    context: "global"
    , baseUrl: "/cms/js/"
    , paths: {
        'domReady': '/cms/js/domReady',
        'text': '/cms/js/text',
        'init': '/cms/js/init'
    }
});

console.log('initialised global');
