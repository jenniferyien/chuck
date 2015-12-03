(function(){
  angular.module('chuckJokes', [])
    .controller('Ctrl', function($scope, $http) {
      $scope.fetch = function() {
        if ($scope.string == true){
          $http({
            method: "GET",
            url: "http://api.icndb.com/jokes/random?exclude=[explicit]"
            }).then(function successCallback(response){
              console.log(response.data.value)
              $scope.search = response.data.value
              },
              function errorCallback(response){
              console.log("error " + response)
            })
          } else {
          $http({
            method: "GET",
            url: "http://api.icndb.com/jokes/random"
          }).then(function successCallback(response){
            console.log(response.data.value)
            $scope.search = response.data.value
            },
            function errorCallback(response){
            console.log("error " + response)
          })
        }
      };
  });

})();
