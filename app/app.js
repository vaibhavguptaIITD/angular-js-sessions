angular.module("FilterApp",[])
.controller("FilterController", function($scope){
	$scope.employee = {};
})
.filter('reverse', function() {
  return function(input, uppercase) {
  	return reverseString(input, uppercase);
  };
});

function reverseString(input, uppercase){
	input = input || '';
    var out = "";
    for (var i = 0; i < input.length; i++) {
      out = input.charAt(i) + out;
    }
    if (uppercase) {
      out = out.toUpperCase();
    }
    return out;
}