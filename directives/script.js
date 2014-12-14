angular.module("directiveDemo",[])
.controller("DemoController", function($scope){
	$scope.employee = {
		name: "Vaibhav Gupta"
	};
	$scope.changeEmployeeName = function(){
		$scope.employee.name = "Vaibhav Gupta " + _.random(0, 100);
	};
	$scope.addHyphen = function(){
		$scope.employee.name += "- -";
	};
})
.directive("contentarea", function($timeout){
	return {
		require: "ngModel",
		link : function(scope, element, attrs, ngModelCtrl){
			//Time out is required because prior to digest cycle the following code shows $viewValue, $modelValue as NaN
			
			// //This will be called when model changes
			 ngModelCtrl.$render = function(){
				element.html(ngModelCtrl.$viewValue);
			 }

			  element.on('blur keyup change', function() {
        		ngModelCtrl.$setViewValue(element.html());
       		 });
		}
	}
})
.directive("unhyphenate", function(){
	return {
		require: "ngModel",
		link : function(scope, element, attrs, ngModelCtrl){
			function removeHyphen(value){
				return value.replace(/\-/g, "");
			};
			ngModelCtrl.$formatters.push(function(value){
				value = removeHyphen(value);
				console.log("formatter value", value);
				return value;
			});
		}
	}
});