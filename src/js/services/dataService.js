'use strict';
define(function(require) {
  var dataService = angular.module('maaxow.services.data', [])

    .service('$data', function($q) {

    return {
    	getExperiences : function(){
    		$http.get('data/experiences.json').then(function(data){
    			console.log("On a recup l'XP ?", data);
    		});
    	}
    };
  });

  return dataService;
});
