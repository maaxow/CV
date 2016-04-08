define(function(require){
	require('ittbUi');
	require('ittbUtil');
	
	var app = angular.module('ittb.app',['ittb.ui','ittb.util'])
	.constant('ittbConstants', {
		templatesUrl : webjars + 'ittb/imports/templates/', // var webjars is initialize in require.config.js:8
	})
	.config(['$translateProvider', function($translateProvider){
		
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
	}]);
	
	return app;
});