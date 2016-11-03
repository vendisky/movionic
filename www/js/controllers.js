angular.module('movionic.controllers', ['ionic'])

.controller('MoviesCtrl', function($scope, $ionicPopover, Movies) {
  
  $scope.movies = Movies.all();
  
  // filter!
  $scope.getMovies = function() {
    //Filter movies by $scope.search.
    return $scope.movies.filter(function(movie) {
      var movieDoesMatch = !$scope.search ||
        movie.name.toLowerCase().indexOf($scope.search.toLowerCase()) > -1;

      return movieDoesMatch;
    });
  };

  $scope.clearSearch = function() {
    $scope.search = '';
  };

  // pop over!
  $ionicPopover.fromTemplateUrl('templates/tab-movies-popover.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover;
  });

  // ordered by!
  $scope.order = '-name';
  $scope.reverse = true;
  $scope.setOrder = function(order) {
    if ($scope.order == order) {
      $scope.reverse = !$scope.reverse;
    }
    else {
      $scope.order = order;
      $scope.reverse = true;
    }
  };

  $scope.getOrderBackground = function(order) {
    return ($scope.order==order) ?'#33cd5f' :'white' ;
  };

  $scope.getOrderColor = function(order) {
    return ($scope.order == order) ?'white' :'' ;
  };

  $scope.getOrderIcon = function(order) {
    if ($scope.order == order) {
      if ($scope.reverse) {
        return 'ion-ios-arrow-thin-up';
      }
      else {
      	return 'ion-ios-arrow-thin-down';
      }
    }
    else {
      return '';
    }
  }; 

})

// this is for movie-detail.html
.controller('MovieDetailCtrl', function($scope, $stateParams, Movies) {
  $scope.movie = Movies.get($stateParams.movieId);
});