//'use strict';
define(function(require){

	var cv = angular.module('maaxow.controllers.cv', [/*'maaxow.services.data'*/])
		.controller('CVController', function($scope){
				$scope.message = "YEEEEES";
//				console.log("data :", $data);
		})
		.controller('HomeController', function($scope){
			$scope.home = "On est sur home !";
			console.log("on est sur home controller");
		});
	return cv;
}
);
