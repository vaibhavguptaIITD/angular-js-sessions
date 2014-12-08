angular.module("directiveDemo",[])
.controller("DemoController", function($scope){
	$scope.fruits = ["Apple","Oranges","Banana","Peach"];
})
.directive("listFruits", function(){
	return {
		templateUrl : "/listFruits.html"
	}
});