angular
	.module('blogs')
	.controller('blogController', function($scope) {
		$scope.posts = [];

		$scope.newPost = {}

		$scope.timestamp = new Date();

		$scope.comments = [];

		$scope.newComment = {};


		$scope.addPost = function(newPost){
			var id = $scope.posts.length;
			newPost.id = id+1;
			newPost.date = $scope.timestamp;
			newPost.comments = [];
			$scope.posts.push(newPost);
			$scope.newPost = {};
		}

		$scope.modifyPost = function(oldPost) {
			$scope.editPost = true;
			$scope.existingPost = oldPost;
			$scope.addListing = false;
		}

		$scope.saveEditPost = function() {
			$scope.editPost = false;
			$scope.existingPost = {};
		}

		$scope.addComment = function(post, comment) {
			var date = new Date();
			comment.time = date.getSeconds() + ' seconds';
			post.comments.push(comment);
			$scope.newComment = {};
		}

		$scope.deletePost = function(oldPost) {
			var delPost = $scope.posts.indexOf(oldPost);
			$scope.posts.splice(delPost, 1);
			$scope.editPost = false;
			$scope.existingPost = {};
		}

	});