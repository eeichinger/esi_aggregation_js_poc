/**
 * At a minimum we need to obtain a reference to the "external" plugin to pull 'global' libs into our private child context.
 * We don't want to load all required libs now, but be able to if we need to.
 */
/*global define,require*/
define(['external'], function (external) {
    'use strict';

    // put on the global 'define' queue, so the already loaded 'external' plugin gets imported into the new 'sampleapp' child context below
    define('external', function () {
        return external;
    });

    require({
        context: "sidebar",
        baseUrl: "/cms/js/sidebar/",
        map: {
            '*': {
                'domReady': 'external!domReady',
                'counter': 'external!counter',
            }
        },
    }, ["sidebar-main"], function () {
        console.log("ok, sidebarconfig load complete");
    });
});
