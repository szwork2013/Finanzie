'use strict';

angular.module('finanzieApp')
  .controller('NewProductCtrl', function ($scope, $location, userService) {
    userService.adminPage();

    $scope.back = function () {
      $location.url('products');
    };

  });
