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