/* global $, angular */

/* Angular Application */
var app = angular.module('app', []);

/* Controllers */
app.controller('appCtrl', ['$scope', function($scope) {
  
  $scope.sortType = 'serializeId';
  $scope.sortReverse = false;
  $scope.searchDweller = '';

  $scope.load = function() {
 	    
    var file = document.getElementById('file').files[0];
    var reader = new FileReader();
    
    reader.onloadend = function(event) {
      var data = JSON.parse(event.target.result);
      $scope.resource = data;
    };
    
    reader.readAsText(file);
  };
  
  $scope.show = function() {
    $scope.dwellers = $scope.resource.dwellers.dwellers;
  };
}]);