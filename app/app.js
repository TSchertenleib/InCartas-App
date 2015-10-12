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
    typ: 'gruen',
    name: 'ASPIRIN', 
    tag: 'Schmerzen / Fieber', 
    exp: 'Exp. Date',
    datum: '22.07.2017',
    icon: 'images/icons/ablaufdatum-green.png',
    bild: 'images/meds/aspirin.jpg',
    beschreibung: 'ASPIRIN enthält Acetylsalicsäure. Dieser hat schmerzstillende, fiebersenkende und entzündungshemmende Wirkung.'
  }, 
  { 
    typ: 'gruen',
    name: 'Paracetamol', 
    tag: 'Schmerzen / Fieber', 
    exp: 'Exp. Date',
    datum: '13.04.2016',
    icon: 'images/icons/ablaufdatum-green.png',
    bild: "images/meds/Paracetamol.jpg"
  }, 
  { 
    typ: 'orange',
    name: 'Olynth', 
    tag: 'Erkältung', 
    exp: 'Exp. Date',
    datum: '22.10.2015',
    icon: 'images/icons/ablaufdatum-orange.png',
    bild: 'images/meds/Olynth.jpg'
  }, 
  { 
    typ: 'orange',
    name: 'Bepanthen', 
    tag: 'Wunderkrankungen', 
    exp: 'Exp. Date',
    datum: '27.11.2015',
    icon: 'images/icons/ablaufdatum-orange.png',
    bild: 'images/meds/bepanthen.jpg'
  }, 
  { 
    typ: 'red',
    name: 'Diclofenac', 
    tag: 'Schmerzen', 
    expired: 'Produkt ist abgelaufen!',
    icon: 'images/icons/ablaufdatum-red.png',
    expab: 'Produkt ist abgelaufen!',
    bild: 'images/meds/diclofenac.jpg'
  }, 
  { 
    typ: 'red',
    name: 'Voltaren', 
    tag: 'Wunderkrankungen', 
    expired: 'Produkt ist abgelaufen!',
    icon: 'images/icons/ablaufdatum-red.png',
    expab: 'Produkt ist abgelaufen!',
    bild: 'images/meds/voltaren.jpg'
  }
]);



function widgetsController($scope, $route) {
    $scope.$route = $route;
}

// load controllers
require('controllers/karten')(app);
require('controllers/medikamente')(app);
require('controllers/profil')(app);
// require('controllers/mediHeaderController')(app);


