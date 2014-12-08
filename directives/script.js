angular.module("directiveDemo",[])
.directive("sibling1", function(){
	return {
		controller: function($scope){
			this.methodA = function(){
				console.log("in method A of sibling1");
			}
		}
	}
})
.directive("sibling2", function(){
	return {
		require : "sibling1",
		link : function(scope, element, attrs, sibling1Controller){
			sibling1Controller.methodA();
		}
	}
})
.directive("parent", function(){
	return {
		controller : function(){
			this.methodA = function(){
				console.log("in methodA of parent");
			};
		}
	}
})
.directive("child", function(){
	return {
		require : "^parent",
		link: function(scope, element, attrs, parentController){
			parentController.methodA();
		}
	}
})
.directive("optionalDirective", function(){
	return {
		controller : function(){
			this.methodA = function(){
				console.log("in methodA of optionalDirective");
			};
		}
	}
})
.directive("directive1", function(){
	return {
		require: "?optionalDirective",
		link: function(scope, element, attrs, optionalDirectiveController){
			if(optionalDirectiveController){
				optionalDirectiveController.methodA();
			}
		}
	}
})
.controller("DemoController", function(){

});