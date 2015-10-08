module.exports = function(app){
  // define controller
  app.controller('medikamenteController', ['$scope', '$location', 'items', function($scope, $location, items) {
    // set items on scope
    $scope.items = items;

    // add new item to list
    $scope.add = function(){
      items.push({
        name: '...',
        finished: false
      });
    };

    // watch items
    $scope.$watchCollection('items', function() {
      if(items.length == 0) {
        items.push({
          name: "Are you sure there isn't something to work on?",
          finished: false
        });
      }
    });

    // edit item
    $scope.edit = function(item) {
      $location.path(items.indexOf(item));
    };

    // swiep left (revives item)
    $scope.left = function(item){
      if(item.finished) {
        item.finished = false;
      }
    };

    // swipe right (removes item in 2 steps)
    $scope.right = function(item){
      if(!item.finished) {
        item.finished = true;
      } else {
        items.splice(items.indexOf(item), 1);
      }
    }
  }]);
};

