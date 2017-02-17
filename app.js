(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {

  $scope.fontStyle = {};
  $scope.borderStyle = {};
  $scope.turnGreen = function (){
    $scope.fontStyle.style = {"color":"green"};
    $scope.borderStyle.style = {"border-color":"green"};
  }
  $scope.turnRed = function() {
    $scope.fontStyle.style = {"color":"red"};
    $scope.borderStyle.style = {"border-color":"red"};
  }


  $scope.lunchList = "";

  $scope.checkLunchList = function () {
    var lunchArray = $scope.lunchList.split(',');
    lunchArray = lunchArray.filter(e => String(e).trim());
    if (lunchArray.length === 0){
        $scope.message = "Please enter data first";
        $scope.turnRed();
    }else if (lunchArray.length <= 3){
        $scope.message = "Enjoy !";
        $scope.turnGreen();
    }else{
        $scope.message = "Too much !"
        $scope.turnGreen();
      }
  }



}

})();
