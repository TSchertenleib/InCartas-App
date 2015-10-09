// create a new angular app
var app = angular.module('InCartasApp', ['ngTouch', 'ngAnimate', 'ngRoute']);

// setup router
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', { 
      templateUrl: 'views/medikamente.html'
    })
    .when('/profil', {
      templateUrl: 'views/profil.html'
    })   
    .when('/scan', {
      templateUrl: 'views/scan.html'
    });
}]);


// load controllers
require('controllers/medikamente')(app);
require('controllers/profil')(app);

// load directives
// require('directives/ic-footer')(app);




