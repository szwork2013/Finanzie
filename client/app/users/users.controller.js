'use strict';

angular.module('finanzieApp')
  .controller('UsersCtrl', function ($scope, $location, userService) {
    userService.adminPage();

    $scope.showNew = function () {
      $location.url('new-user');
    };

  });
