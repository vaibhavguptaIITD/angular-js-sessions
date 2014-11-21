angular.module("scopeDemoApp", [])
.controller("Controller1", function($scope){
	$scope.model = "Controller1Model";
})
.controller("Controller2", function($scope){
	$scope.model = "Controller2Model";
})
.controller("Controller3", function($scope){
	$scope.model = "Controller3Model";
})