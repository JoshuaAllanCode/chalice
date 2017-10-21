angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('sample', {
    url: '/page2',
    templateUrl: 'templates/sample.html',
    controller: 'sampleCtrl'
  })

  .state('login', {
    url: '/page3',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page4',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('home', {
    url: '/page1',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('menu', {
    url: '/page5',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('purchase', {
    url: '/page6',
    templateUrl: 'templates/purchase.html',
    controller: 'purchaseCtrl'
  })

  .state('aboutTheAuthor', {
    url: '/page7',
    templateUrl: 'templates/aboutTheAuthor.html',
    controller: 'aboutTheAuthorCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});