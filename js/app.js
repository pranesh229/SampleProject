var phonecatApp =angular.module('myApp', ['ngRoute'])
    .controller('MainController', function($scope){
        $scope.change = function(){
            $scope.nameid = "Pranesh";

        };


    });
phonecatApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/login', {
                templateUrl: 'pages/login.html',
                controller: 'MainController'
            }).
            when('signup.html', {
                templateUrl: 'pages/login.html',
                controller: 'MainController'
            }).
            otherwise({
                redirectTo: '/login'
            });
    }]);