
# Javascript Content Aggregation Demo with RequireJS

## Overview

Large organisations struggle finding a way to have different teams deliver parts of the organisation's website. While a certain degree of control is necessary - especially where different sections of a website interact with each other - it is desirable, that the teams can deliver their bits as independently as possible.

This POC examines a way to aggregate html+javascript content on a website and limiting the amount of coupling between different widgets on a page to a minimum.


## Context

Below is an example setup that this POC assumes.

![Context](doc/context.png)

Through various techniques (Edge Side Include, Portal, ...), the work of several independent teams gets physically mashed up on the same page. In most cases, the widgets that get aggregated by the teams should not interfere with each other. In some cases though it might be necessary that 2 widgets communicate with each other. This POC illustrates:

1. how to isolate javascript components from each other using requirejs
2. how to share javascript libraries between components
3. how to allow components to communicate by exchanging events


## Technologies used

- Edge Side Include
    for cross-team/component content aggregation
    see http://www.edge-delivery.org and https://www.varnish-cache.org/trac/wiki/ESIfeatures for more info on ESI

- RequireJS
    for Javascript modularisation, dependency- and load-context management


## Preliminaries

You need to have the following installed in order to run the demo:

- Varnish (or any other frontcontroller that understands <esi:include>
- PHP or Python (for simple static test webserver)


## Running the POC

To startup, simply execute the 'up-all.sh' script and in your browser open http://localhost:1234/sampleapp/page.html to see the result. Click on the language links in the sidebar to see the selected language be changed.

When the page gets loaded, 3 requirejs load contexts are created:

1. default page context

    ```html
    // page.html:8
    <script type="text/javascript" src="/cms/js/main-config.js"></script>
    ```

2. sidebar context

    ```html
    // sidebar.html:2
    <script type="text/javascript">
        require(['/cms/js/sidebar/sidebar-config.js']);
    </script>
    ```

3. content context

    ```html
    // page.html:26
    <script type="text/javascript">
        require(['/sampleapp/js/sampleapp-config.js']);
    </script>
    ```

__sidebar context__ and __content context__ both import shared libraries log4javascript, domReady, jquery and events from the __default context__

## Responsibilities/Requirements

[describe what minimum requirements are imposed on modules to be included using this technique]

* Provide Javascript Module Infrastructure

    The "master" layout includes RequireJS and sets up the global RequireJS context

* Each

## What's *not* demoed

* Configurable context root path for assets

Applications must allow to configure their root context path based on the deployment environment. This becomes especially important when referencing external artifacts like images or javascript files. In a development- or test-environment those scripts will be served from a different location than in production. In production it is likely e.g. that static content like scripts and images will be served via a Content Delivery Network.

E.g. in dev environments images and script urls will typically be referenced using relative urls

```
<img src="/images/logo.png" />
```

whereas in production environments the same image url will be rendered as full qualified url

```
<img src="//mycdn.provider.com/images/logo.png" />
```

