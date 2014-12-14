angular.module("TodoApp",[])
.config(function(TodoServiceProvider){
	TodoServiceProvider.setUrl("http://localhost:2403/items");
})
.controller("TodoController", function($scope, TodoService){

	TodoService.getItems().then(function(items){
		$scope.todos = items;
	});

	$scope.updateItem = function(item){
		TodoService.editItem(item);
	}

	$scope.removeItem = function(item){
		TodoService.removeItem(item);
	}

	$scope.addNewItem = function(){
		if($scope.newItem){
			TodoService.addItem($scope.newItem);
			$scope.newItem = "";	
		}
	}
	
})
.provider("TodoService", function(){

	var url, http;
	
	var items = null;

	var getItems = function(){
		return http.get(url).then(function(resp){
			items = resp.data;
			return items;
		});
	}

	var addItem = function(itemName){
		var item = {
			name: itemName,
			done : false
		}
		return http.post(url, item).then(function(response){
			items.push(response.data);
		});
	}

	var editItem = function(item){
		var editUrl = url + "/" + item.id;
		return http.put(editUrl, item);
	}

	var removeItem = function(item){
		var deleteUrl = url + "/" + item.id;
		return http.delete(deleteUrl).then(function(){
			items.splice(items.indexOf(item), 1);
		});
	}

	this.setUrl = function(Url){
		url = Url;
	}

	this.$get = function($http){
		http = $http;
		return {
			getItems : getItems,
			editItem : editItem,
			removeItem : removeItem,
			addItem : addItem
		};	
	}

	
});