'use strict';

angular.module('finanzieApp')
  .controller('ProductsCtrl', function ($scope, $location, userService) {

    userService.adminPage();

    $scope.showNew = function () {
      $location.url('new-product');
    };

  });
