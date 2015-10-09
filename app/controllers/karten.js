module.exports = function(app){
  app.controller('kartenController', ['$scope', 'meds', function($scope, meds) { 
    $scope.meds = meds;
  }]);
};