<<<<<<< HEAD
var phonecatApp =angular.module('myApp', ['ngRoute'])
    .controller('MainController', function($scope){
        $scope.change = function(){
            $scope.nameid = "Pranesh";

        };


    });
phonecatApp.controller('registerController',function($scope){

    $scope.register = function(){
        alert("sgf");

    };
});
phonecatApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/login', {
                templateUrl: 'pages/login.html',
                controller: 'MainController'
            }).
            when('/signup', {
                templateUrl: 'pages/register.html',
                controller: 'registerController'
            }).
            otherwise({
                redirectTo: '/login'
            });
    }]);
=======
angular.module('myApp', [])
    .controller('MainController', function($scope){
        $scope.change = function(){
            $scope.nameid = "Pranesh";
            changetextContent();
        }

    });
function changetextContent(){
    $("#text1").val("string");
}
>>>>>>> e054fcf0232b5cf232ef9ed423cd6c6da3f6fae9
