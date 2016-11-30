'use strict';

angular.module('collabApp')
  .controller('QuestionsCreateCtrl', function ($scope, $http, $location, Auth) {
    if(! Auth.isLoggedIn()){
      $location.path('/login');
      $location.replace();
      return;
    }
    $scope.loadTags = function(query) {
       return $http.get('question.tags.json');
    }
    $scope.submit = function() {
      $http.post('/api/questions', $scope.question).success(function(){
        $location.path('/');
      });
    };
  });
