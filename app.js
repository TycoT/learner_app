var app = angular.module('learnerApp', []);

app.controller('MainCtrl', ['$scope',function($scope){
  	$scope.test = 'Hello world!';

  	$scope.posts = [];

  	$scope.addPost = function(){

  		var d = new Date();

  		$scope.posts.push({
			title: $scope.title,
			content: $scope.content,
			tags: $scope.tags,
			date: d.toString()
  		});
  	}
}]);