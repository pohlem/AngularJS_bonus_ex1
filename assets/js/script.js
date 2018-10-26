var app = angular.module('mailApp', []);

app.controller('emailCtrl', function($scope) {
  	$scope.checkMail = function(value){
  		console.log(value);
  		if(value.includes('@')){
  			$scope.color = 'green';
  		} else {
  			$scope.color = 'red';
  		}
  	}
});