(function () {
  var app = angular.module('githubViewer');

  var MainController = function ($scope, $interval,  $location) {
   
    var decrementCountdown = function () {
      $scope.countdown -= 1;
      if ($scope.countdown < 1) {
        $scope.search($scope.username);
      }
    };

    // using $interval service
    var countdownInterval = null;
    var startCountdown = function () {
      countdownInterval = $interval(decrementCountdown, 1000, 5);
    };

    $scope.search = function (username) {
      if (countdownInterval) {
        // para que o evento do timer seja cancelado, caso o usuario clique antes do tempo limite
        $interval.cancel(countdownInterval);
        // oculta o contador de tempo
        $scope.countdown = null;
      }
      $location.path("/user/" + username);
    };

    $scope.username = "angular";
    $scope.countdown = 5;
    startCountdown();
  };

  app.controller('MainController', MainController);
})();
