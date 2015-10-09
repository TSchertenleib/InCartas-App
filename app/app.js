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

app.value('meds', [
  { 
    name: 'ASPIRIN', 
    tag: 'Schmerzen / Fieber', 
    datum: '22.07.2017',
    bild: 'images/icons/ablaufdatum-green.png',
  }, 
  { 
    name: 'Paracetamol', 
    tag: 'Schmerzen / Fieber', 
    datum: '13.04.2016',
  }, 
  { 
    name: 'Olynth', 
    tag: 'Erkältung', 
    datum: '22.10.2015',
  }, 
  { 
    name: 'Bepanthen', 
    tag: 'Wunderkrankungen', 
    datum: '27.11.2015',
  }, 
  { 
    name: 'Voltaren', 
    tag: 'Schmerzen', 
    expired: 'Produkt ist abgelaufen!',
  }, 
  { 
    name: 'Bepanthen', 
    tag: 'Wunderkrankungen', 
    expired: 'Produkt ist abgelaufen!',
  }
]);

function widgetsController($scope, $route) {
    $scope.$route = $route;
}

// load controllers
require('controllers/karten')(app);
require('controllers/medikamente')(app);
require('controllers/profil')(app);
// require('controllers/toggleController')(app);

// load directives
// require('directives/ic-footer')(app);



