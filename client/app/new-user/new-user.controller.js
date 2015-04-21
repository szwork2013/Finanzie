'use strict';

angular.module('finanzieApp')
  .controller('NewUserCtrl', function ($scope, $location, userService) {
    userService.adminPage();

    $scope.back = function () {
      $location.url('users');
    };
  });
