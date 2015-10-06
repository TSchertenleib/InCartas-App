angular.module('InCartas', [])
	.controller('directoryController', function($scope) {
	$scope.list = [
			{name:'Thomas', age: 30},
			{name:'Adélaïde', age: 23}
	]
	});