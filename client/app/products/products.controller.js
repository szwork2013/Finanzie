'use strict';

angular.module('finanzieApp')
  .controller('ProductsCtrl', function ($scope, userService) {

    userService.adminPage();

    $scope.showNew = function () {
      $location.url('new-product');
    };

  });
