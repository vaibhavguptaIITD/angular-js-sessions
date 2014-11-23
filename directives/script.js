angular.module("directivesDemo",[])
.controller("DirectiveDemoCtrl", function($scope){
	//ng bind demo model
	$scope.model1 = "model1";
	$scope.changeModel1 = function(){
		$scope.model1 = Math.random();
	};

	//ng repeat demo model
	$scope.items = [
		"item1",
		"item2",
		"item3"
	]
	$scope.addItem = function(){
		$scope.items.push($scope.item1);
		$scope.item1 = "";
	};

	//ng if demo model
	$scope.showPanel = true;
	
});