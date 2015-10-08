module.exports = function(app){
  app.controller('kartenController', ['$scope', function($scope) { 
    $scope.products = [
    { 
      name: 'ASPIRIN', 
      tag: 'Schmerzen / Fieber', 
      datum: '22.07.2017',
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
    ];
  }]);
};