var app = angular.module('InCartas', [])
	.controller('directoryController', function($scope) {
	$scope.list = [
			{name:'Aspirin', tag: 'Schmerzen'},
			{name:'Voltaren', tag: 'Wunderkrankungen'}
	]
	});