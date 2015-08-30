
var phonecatApp =angular.module('myApp', ['ngRoute'])
    .controller('MainController', function($scope){
        $scope.login = function(){
            if($scope.username!="" && $scope.username != null && $scope.username != undefined ) {
                if ($scope.password != "" && $scope.password != null && $scope.password != undefined) {

                }else{
                    $(".errorPassword").css("display", "block");
                }
            } else{
                $(".errorUserId").css("display", "block");
            }

        };


    });
phonecatApp.controller('registerController',function($scope){

    $scope.register = function(){
        if($scope.usernameregister !="" || $scope.usernameregister != null){
            if($scope.passwordregister !="" || $scope.passwordregister != null){
                if($scope.passwordregisterConfirm !="" || $scope.passwordregisterConfirm != null){
                    if($scope.passwordregisterConfirm == $scope.passwordregister) {
                        if ($scope.phoneregister != "" || $scope.phoneregister != null || $scope.phoneregister.length != 10) {

                        } else {

                        }
                    }else{

                    }
                } else{

                }
            } else{

            }
        }
        else{

        }

    };
});
phonecatApp.controller('homepageController',function($scope){

    $('.section1 ul li').addClass('animated slideInLeft');
    $('.section3 h3').addClass('animated fadeIn');
    $('.section3 p').addClass('animated fadeIn');
    $('.carousel').carousel({
        interval: 2000
    });
    $("#fakeLoader").fakeLoader();
});
phonecatApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/login', {
                templateUrl: 'pages/login.html',
                controller: 'MainController'
            }).
            when('/homepage', {
                templateUrl: 'pages/homepage.html',
                controller: 'homepageController'
            }).
            when('/signup', {
                templateUrl: 'pages/register.html',
                controller: 'registerController'
            }).
            otherwise({
                redirectTo: '/homepage'
            });
    }]);
