var app = angular.module('app', ['ui.router']);

app.config(['$stateProvider', function($stateProvider){
	$stateProvider
	.state('firstMessage', {
		url: '/first-msg',
		templateUrl: 'msg1.htm',
		controller: 'msg1'
	});
}]);

app.controller('msg1', ['$scope', function($scope){
	$scope.a = 10;
	$scope.b = 20;
}]);