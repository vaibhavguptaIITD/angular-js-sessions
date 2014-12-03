angular.module("directiveDemo",[])
.directive("customDirective", function(){
	return {
		link: function(scope, element){
			console.log(element);
			element.html("using custom directive I have manipulated the dom");
		}
	}
})
.directive("datePicker", function(){
	return {
		link: function(scope, element){
			element.datepicker();
			// element.datepicker({
			// 	onSelect : function(dateText){
			// 		scope.$apply(function(){
			// 			scope.dob = dateText;
			// 		});
			// 	}
			// });
		}
	}
});