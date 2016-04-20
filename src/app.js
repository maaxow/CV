define(function(require){'use strict';

	require('translate');
	require('uiRouter');
	//require('ngRoute');
	require('deferredBootstrap');
	require('ngAria');
	require('ngAnimate');
	require('ngMaterial');
	require('MRControllers');
	require('MRServices');
	var angular = require('angular');

	var app = angular.module('maaxow.app', ['pascalprecht.translate', 'ui.router',
	                                        'ngAria', 'ngAnimate', 'ngMaterial',
	                                        'maaxow.controllers'/*,'maaxow.services'*/]);
	app.constant('Constants', {
		templatesUrl : 'js/directives/templates/',
		views : 'views/',
	})
	app.config(['$translateProvider', function($translateProvider){

		$translateProvider.translations('fr', {
			'LANG' : 'fr',
			'SWITCH_LANG' : "Anglais",
			'DAYS' : 'Jours',
			'MONTHS' : 'Mois',
			'YEARS' : 'Années',
			'HOURS' : 'Heures',
			'MINUTES' : 'Minutes',
			'FROM' : 'De ',
			'TO' : 'A',
		});

		$translateProvider.translations('en', {
			'LANG' : 'en',
			'SWITCH_LANG' : "Français",
			'DAYS' : 'Days',
			'MONTHS' : 'Months',
			'YEARS' : 'Years',
			'HOURS' : 'Hours',
			'MINUTES' : 'Minutes',
			'FROM' : 'From',
			'TO' : 'To',
		});

		$translateProvider.use('fr');
		$translateProvider.useSanitizeValueStrategy('escaped');
	}])
	app.config(function($locationProvider, $stateProvider, $urlRouterProvider, Constants) {
					$stateProvider
					.state('home', {
						url: "/home",
						templateUrl: Constants.views + 'home.html',
						controller : 'HomeController'
					})
					.state('cv', {
						url: "/cv",
//						parent : 'home',
						templateUrl: Constants.views + 'cv.html',
						controller : 'CVController'
					});

					// For invalid route
					$urlRouterProvider.otherwise('home');
					// use the HTML5 History API
					$locationProvider.html5Mode(true);
	});

	app.init = function(){
		deferredBootstrapper.bootstrap({
			element: document.body,
			module: 'maaxow.app',
		});
	};

	return app;
});
