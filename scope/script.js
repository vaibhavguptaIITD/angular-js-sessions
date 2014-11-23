var CommonModel = {
	commonFunction : function(){

	}
}

angular.module("scopeDemoApp", [])
.controller("CommonCtrl", function($scope){
	$scope.commonModel = "commonModel";
})
.controller("Controller1", function($scope){
	angular.extend($scope, CommonModel);
	$scope.model = "Controller1Model";
	$scope.model1 = "model1";
})
.controller("Controller2", function($scope){
	$scope.model = "Controller2Model";
})
.controller("Controller3", function($scope){
	$scope.model = "Controller3Model";
})