'uses strict';
define(function(require){

	require('MRDataService');

	var servicesModule =  angular.module('maaxow.services', ['maaxow.services.data'])

	return servicesModule;
});