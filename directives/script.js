angular.module("directiveDemo",[])
.controller("DemoController", function($scope){
	$scope.fruits = ["Apple","Oranges","Banana","Peach"];
})
.directive("listFruits", function(){
	return {
		restrict: 'AE', 
		templateUrl : "/listFruits.html",
		replace: true
	}
});