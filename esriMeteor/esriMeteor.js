if (Meteor.isClient) {
  // counter starts at 0
    Session.setDefault('counter', 0);
    Template.newRoute.created = function() {
        Modernizr.load([{
            // Load common resorces
            load: ['http://js.arcgis.com/3.11/'],
            complete: function () {
                require([
                    "esri/urlUtils", "esri/map", "esri/dijit/Directions",
                    "dojo/parser",
                    "dijit/layout/BorderContainer", "dijit/layout/ContentPane", "dojo/domReady!"
                ], function (Map) {
                    //parser.parse();
                    ////all requests to route.arcgis.com will proxy to the proxyUrl defined in this object.
                    //urlUtils.addProxyRule({
                    //    urlPrefix: "route.arcgis.com",
                    //    proxyUrl: "/proxy/"
                    //});
                    //urlUtils.addProxyRule({
                    //    urlPrefix: "traffic.arcgis.com",
                    //    proxyUrl: "/proxy/"
                    //});

                    var map = new Map("map", {
                        basemap: "streets",
                        center: [-98.56, 39.82],
                        zoom: 4
                    });

                    //var directions = new Directions({
                    //    map: map
                    //}, "dir");
                    //directions.startup();

                });
            }
        }]);
    };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
