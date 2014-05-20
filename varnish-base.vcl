vcl 4.0;

backend cmsserver {
   .host = "127.0.0.1";
   .port = "4001";
}

backend sampleappserver {
   .host = "127.0.0.1";
   .port = "4002";
}

sub vcl_recv {
    // always default to cmsserver
    set req.backend_hint=cmsserver;
    set req.http.x-url = req.url;
    set req.http.x-host = req.http.host;

    if (req.url ~ "^/sampleapp/")  {
        set req.backend_hint=sampleappserver;
        set req.url = regsub(req.url, "^/sampleapp/", "/");
    }
    else if (req.url ~ "^/cms/")  {
        set req.backend_hint=cmsserver;
        set req.url = regsub(req.url, "^/cms/", "/");
    }
}

sub vcl_backend_response {
    set beresp.ttl = 0s;
    set beresp.do_esi=true;
}
