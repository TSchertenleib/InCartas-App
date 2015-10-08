// create a new angular app
var app = angular.module('InCartasApp', ['ngTouch', 'ngAnimate', 'ngRoute']);

// setup router
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', { 
      templateUrl: 'views/medikamente.html'
    })
    .when('/:id', {
      templateUrl: 'views/profil.html'
    });
}]);

// set initial list items
// app.value('items',[
//   { name: 'Buy a nice dog house', finished: true },
//   { name: 'Get a dog from the pet shop', finished: false },
//   { name: 'Order some proper dog food', finished: false }
// ]);

// load controllers
require('controllers/medikamente')(app);
require('controllers/profil')(app);
