angular.module("TodoApp",[])
.controller("TodoController", function($scope){
	$scope.items = data;
	$scope.newTask = "";
	$scope.removeTask = function(index){
		$scope.items.splice(index,1);
	}
	//This is heavy stuff
	$scope.getCompletedTaskCount = function(){
		var count = 0;
		angular.forEach($scope.items, function(item){
			if(item.done){
				count++;
			}
		});
		return count;
	}
	$scope.addTask = function(){
		if($scope.newTask){
			$scope.items.push({
				id: $scope.items.length,
				name: $scope.newTask,
				done : false
			});
			$scope.newTask = "";
		}
	}
});