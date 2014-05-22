define(['external'], function(external) {

    // put on the global 'define' queue, so the already loaded 'external' plugin gets imported into the new 'sampleapp' child context below
    define('external', function() {
        return external;
    });

    require({
        context: 'sampleapp',
        baseUrl: '/sampleapp/js/',
        map: {
            '*' : {
                'domReady' : 'external!domReady',
                'shared' : 'external!shared'
            }
        }
    }, ["./myscript"], function() {
        console.log("ok, mypage loaded ");
    });
});
