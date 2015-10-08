module.exports = function(app){
  // define controller
  app.controller('profilController', ['$scope', '$route', '$location', 'items', function($scope, $route, $location, items) {
    // assign single item
    $scope.item = items[parseInt($route.current.params.id)];

    // define save method
    $scope.save = function(){
      $location.path('/');
    }
  }]);
};
