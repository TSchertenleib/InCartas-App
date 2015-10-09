module.exports = function(app){
  app.controller('medikamenteController', ['$scope', '$element', function($scope, $element) {
    $scope.medClass = ''

    $scope.toggleMed = function(){
      if($scope.medClass == '') {
        $scope.medClass = 'active';
      } else {
        $scope.medClass = '';
      }
    }
  }]);
};
