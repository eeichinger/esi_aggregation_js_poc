define(['external'], function (external) {

    // put on the global 'define' queue, so the already loaded 'external' plugin gets imported into the new 'sidebar' child context below
    define("external", function () {
        return external;
    });

    require({
        context: "sidebar",
        baseUrl: "/cms/js/sidebar/",
        map: {
            '*': {
                'domReady': 'external!domReady',
                'shared': 'external!shared',
                '_': 'external!_',
                'jquery': 'external!jquery',
            }
        },
    }, ["sidebar-main"], function () {
        console.log("ok, sidebarconfig load complete");
    });
});
