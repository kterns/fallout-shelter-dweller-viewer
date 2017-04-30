/* global $, angular */

/* Angular Application */
var app = angular.module('app', []);

/* Controllers */
app.controller('appCtrl', ['$scope', function($scope) {
  
  var fields = [
    { "name" : "serializeId", "displayName" : "ID" },
    { "name" : "name", "displayName" : "Firstname" },
    { "name" : "lastName", "displayName" : "Lastname" },
    { "name" : "experience.currentLevel", "displayName" : "Level" },
    { "name" : "stats.stats[1].value", "displayName" : "S" },
    { "name" : "stats.stats[2].value", "displayName" : "P" },
    { "name" : "stats.stats[3].value", "displayName" : "E" },
    { "name" : "stats.stats[4].value", "displayName" : "C" },
    { "name" : "stats.stats[5].value", "displayName" : "I" },
    { "name" : "stats.stats[6].value", "displayName" : "A" },
    { "name" : "stats.stats[7].value", "displayName" : "L" },
    { "name" : "rarity", "displayName" : "Rarity" },
    { "name" : "health.maxHealth", "displayName" : "Max Health" }
  ];
  
  var roomDetails = [
    { "name" : "NukaCola", "displayName" : "Nuka-Cola Bottler" },
    { "name" : "Energy2", "displayName" : "Nuclear Reactor" },
    { "name" : "LivingQuarters", "displayName" : "Living Quarters" },
    { "name" : "pg", "displayName" : "Power Generator" },
    { "name" : "Cafeteria", "displayName" : "Diner" },
    { "name" : "WaterPlant", "displayName" : "Water Treatment" },
    { "name" : "Storage", "displayName" : "Storage Room" },
    { "name" : "MedBay", "displayName" : "Medbay" },
    { "name" : "ScienceLab", "displayName" : "Science Lab" },
    { "name" : "Radio", "displayName" : "Radio Station" },
    { "name" : "Hydroponic", "displayName" : "Garden" },
    { "name" : "Water2", "displayName" : "Water Purification" },
    { "name" : "Gym", "displayName" : "Weight Room" },
    { "name" : "Armory", "displayName" : "Armory" },
    { "name" : "SuperRoom2", "displayName" : "Fitness Room" },
    { "name" : "Bar", "displayName" : "Lounge" },
    { "name" : "Classroom", "displayName" : "Classroom" },
    { "name" : "Dojo", "displayName" : "Athletics Room" },
    { "name" : "Casino", "displayName" : "Game Room" },
    { "name" : "OutfitFactory", "displayName" : "Outfit Factory" },
    { "name" : "WeaponFactory", "displayName" : "Weapon Factory" },
    { "name" : "DesignFactory", "displayName" : "Theme Workshop" }
  ];
  
  $scope.sortType = 'serializeId';
  $scope.sortReverse = false;
  $scope.searchDweller = '';
  $scope.noFile = true;
  
  $scope.results = false;

  $scope.load = function() {
 	    
    var file = document.getElementById('file').files[0];
    var reader = new FileReader();
    
    reader.onloadend = function(event) {
      $scope.$apply(function() {
        var data = JSON.parse(event.target.result);
        $scope.resource = data;
        $scope.noFile = false;
      });
    };
    
    reader.readAsText(file);
  };
  
  // $scope.getRoom = function(roomId) {
  //   return $scope.rooms.indexOf(roomId);
  // };
  
  $scope.getRoom = function(roomId) {
    
    if(roomId == -1) return "Exploring";
    
    var room = $scope.rooms.filter(
      function(data) {
        return data.deserializeID == roomId;
      }
    );
    
    var roomName = roomDetails.filter(
      function(data) {
        return data.name == room[0].type;
      }
    );
    
    if(roomName.length > 0) {
      return roomName[0].displayName;
    }
    else {
      return room[0].type;
    }
    
    // return roomId != -1 ? room[0].type : "Exploring";
  };
  
  $scope.getRoomLevel = function(roomId) {
    var room = $scope.rooms.filter(
      function(data) {
        return data.deserializeID == roomId;
      }
    );
    
    return room[0].level;
  }
  
  $scope.show = function() {
    $scope.dwellers = $scope.resource.dwellers.dwellers;
    
    $scope.rooms = $scope.resource.vault.rooms;
    
    // $scope.cols = Object.keys($scope.dwellers[0]);
  };
}]);