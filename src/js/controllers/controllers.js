'uses strict';
define(function(require){

	require('MRCV');

	var controllersModule =  angular.module('maaxow.controllers', ['maaxow.controllers.cv'])

	return controllersModule;
});