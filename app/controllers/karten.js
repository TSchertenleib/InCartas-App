module.exports = function(app){
  app.controller('kartenController', ['$scope', 'meds','$timeout' , function($scope, meds, $timeout) { 
    $scope.meds = [];
    $timeout(function(){
    	$scope.meds=meds;
    }, 100);
  }]);
};