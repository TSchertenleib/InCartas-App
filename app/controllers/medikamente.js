module.exports = function(app){
  app.controller('medikamenteController', ['$scope','$rootScope', '$element', function($scope, $rootScope,  $element) {
   
   var bewegung = $scope.medClass = ''

    $scope.toggleMed = function(){
      if($scope.medClass == '') {
        $scope.medClass = 'active';
      } else {
        $scope.medClass = '';
      }
    }


    
  }]);
};

