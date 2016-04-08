'use_strict';
/**
 * all angular source code : https://code.angularjs.org/1.5.0-rc.1/
 */

// only change the boolean variable if you want to disable webjars to the path
var testEnv = false,
webjars = testEnv ? "" : "webjars/";

require.config({
    baseUrl: webjars + 'ittb/imports',
    paths: {
    	ittb: "../ittb",
        angular: "angular/angular",
        jQuery:  "jQuery/jquery-2.2.0",
        uiGrid :  "ui-grid/ui-grid",
        translate:  "i18n/angular-translate",
        ittbUi: "../ittbUi/ittb-ui",
        ittbUtil:  "../ittbUtil/ittb-util",
        autotab:  "jQuery/jquery-autotab", // need jQuery
        ngMessage:  "angular-messages/angular-messages",
        datePicker:  "angular-datepiker/angular-datepicker",
        moment:  "moment/moment",
        filters:  "angular-filter/angular-filter",
        uiBootstrap: "ui-bootstrap/ui-bootstrap-tpls-1.1.0",
        ngAria: "angular-aria/angular-aria.min",
        ngAnimate: "angular-animate/angular-animate.min",
        ngMaterial : "angular-material/angular-material",
        lodash : "lodash/lodash",
        appTest: "../../test/app",

    },
    shim :{
    	angular : {
    		exports: 'angular'
    	},
        jQuery: {
            exports: '$'
        },
        lodash : {
        	exports: '_'
        },
        uiGrid :{
        	deps: ['angular']
        },
        translate: {
            deps : ['angular']
        },
        ngMessage : {
            deps : ['angular']
        },
        datePicker : {
            deps : ['angular', 'moment']
        },
        autotab : {
            deps : ['jQuery']
        },
        ittb : {
        	deps: ['angular']
        },
        ittbUtil : {
        	deps : ['angular']
        },
        ittbUi : {
        	deps : ['angular']
        },
        filters : {
            deps : ['angular']
        },
        uiBootstrap: {
        	deps : ['angular']
        },
        ngAria: {
        	deps : ['angular']
        },
        ngAnimate: {
        	deps : ['angular']
        },
        ngMaterial: {
        	deps : ['angular']
        },
        appTest: {
        	deps : ['angular']
        }
    }
});

require.loadCss = function (url) {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
};

require(['ittb'], function(){
	require.loadCss(webjars + 'ittb/imports/css/main.css');
    require.loadCss(webjars + 'ittb/imports/css/angular-material/angular-material.css');
    require.loadCss(webjars + 'ittb/imports/css/angular-material/angular-material-icons.css');
    require.loadCss(webjars + 'ittb/imports/css/date-picker/date-picker.css');
    require.loadCss(webjars + 'ittb/imports/css/ui-grid/ui-grid.css');
    require.loadCss(webjars + 'ittb/imports/bootstrap/css/bootstrap.min.css');
});

if(testEnv){
	require(['appTest'], function(app){
		app.init();
	});
}