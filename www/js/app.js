// Ionic movionic App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'movionic' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'movionic.services' is found in services.js
// 'movionic.controllers' is found in controllers.js
angular.module('movionic', ['ionic', 'movionic.controllers', 'movionic.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  // put the tabs on the bottom
  $ionicConfigProvider.tabs.position('bottom');
  // striped style
  $ionicConfigProvider.tabs.style('striped');
  // title in the center
  $ionicConfigProvider.navBar.alignTitle('center');

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.movies', {
    url: '/movies',
    views: {
      'tab-movies': {
        templateUrl: 'templates/tab-movies.html',
        controller: 'MoviesCtrl'
      }
    }
  })
    .state('tab.movie-detail', {
      url: '/movies/:movieId',
      views: {
        // Why same view?
        'tab-movies': {
          templateUrl: 'templates/movie-detail.html',
          controller: 'MovieDetailCtrl'
        }
      }
    })

  .state('tab.cinemas', {
      url: '/cinemas',
      views: {
        'tab-cinemas': {
          templateUrl: 'templates/tab-cinemas.html',
        }
      }
    })

  .state('tab.top100', {
    url: '/top100',
    views: {
      'tab-top100': {
        templateUrl: 'templates/tab-top100.html',
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/movies');

});
