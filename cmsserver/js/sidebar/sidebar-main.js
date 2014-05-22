define(['domReady', 'shared'], function (domReady, shared) {
    shared.inc();
    console.log("configuring sidebar - shared val is " + shared.val());

    domReady(function (doc) {
        console.log("ok, sidebar DOM configured");
    });
});
