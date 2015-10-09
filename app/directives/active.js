var app = angular.module("InCartas",[]);

app.controller("InCartas",function($scope){
    
    $scope.class = "red";
    
    $scope.changeClass = function(){
        if ($scope.class === "red")
            $scope.class = "blue";
         else
            $scope.class = "red";
    };
});