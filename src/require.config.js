'use_strict';
/**
 * all angular source code : https://code.angularjs.org/1.5.0-rc.1/
 */
var pathToJs = '../js/';
require.config({
    baseUrl: 'imports',
    paths: {
    	app: "../app",
        angular: "angular/angular",
        jQuery:  "jQuery/jquery-2.2.0",
        translate:  "i18n/angular-translate",
        ngMessage:  "angular-messages/angular-messages",
        ngAria: "angular-aria/angular-aria",
        ngAnimate: "angular-animate/angular-animate",
        ngMaterial : "angular-material/angular-material",
        lodash : "lodash/lodash",
        uiRouter : 'angular-ui-router/angular-ui-router',
        deferredBootstrap : 'deferred-bootstrap/deferred-bootstrap',
        ngRoute : 'angular-route/angular-route',

        // Mine controllers
        MRControllers : pathToJs + 'controllers/controllers',
        MRCV : pathToJs + 'controllers/cv',

        // Mine directives
        MRDirectives : pathToJs + 'directives/directives',

        // Mine services
        MRServices : pathToJs + 'services/services',
        MRDataService : pathToJs + 'services/dataService'

    },
    shim :{
    	angular : {
    		exports: 'angular'
    	},
        jQuery : {
            exports: '$'
        },
        lodash : {
        	exports: '_'
        },
        translate : {
            deps : ['angular']
        },
        ngMessage : {
            deps : ['angular']
        },
        ngAria : {
        	deps : ['angular']
        },
        ngAnimate : {
        	deps : ['angular']
        },
        ngMaterial : {
        	deps : ['angular']
        },
        uiRouter : {
        	deps : ['angular']
        },
        deferredBootstrap : {
        	deps : ['angular']
        },
        // Mine
        app : {
        	deps: ['angular']
        },
        MRControllers : {
        	deps: ['angular']
        },
        MRCV : {
        	deps: ['angular']
        },
        MRDirectives : {
        	deps: ['angular']
        },
        MRServices : {
        	deps: ['angular']
        },
        MRDataService : {
        	deps: ['angular']
        }
    }
});

//require.loadCss = function (url) {
//    var link = document.createElement("link");
//    link.type = "text/css";
//    link.rel = "stylesheet";
//    link.href = url;
//    document.getElementsByTagName("head")[0].appendChild(link);
//};

require(['../app'], function(app){
	app.init();
//	require.loadCss('imports/css/main.css');
//    require.loadCss('imports/css/angular-material/angular-material.css');
//    require.loadCss('imports/css/angular-material/angular-material-icons.css');
});