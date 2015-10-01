// script.js
angular.module('helloWorldDirective', [])
    .controller('Controller', ['$scope', function($scope) {
        $scope.who = 'World';
    }])
    .directive('myHelloWorld', function() {
        return {
            templateUrl: 'hello-world.html',
        };
    });
