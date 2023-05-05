var myApp = angular.module('myApp',[]);

myApp.controller('mainController', function($scope) {
    $scope.name = 'Lalo';
    $scope.title = "dev";
    $scope.getTitle = function() {
        console.log($scope.title);
    }
    console.log($scope);
    $scope.getTitle();
});

var searchPeople = function searchPeople(firstName, lastName, height, age, occupation){
    return 'Django';
}

console.log(angular.injector().annotate(searchPeople));