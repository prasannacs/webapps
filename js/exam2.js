var app2 = angular.module('app2',[]);

app2.controller('ctrl1', function($scope){

	$scope.randomNum1 = Math.floor((Math.random() *10)+1)

});

app2.controller('ctrl2', function($scope){

	$scope.randomNum2 = Math.floor((Math.random() *10)+1)

});