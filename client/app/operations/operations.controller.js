'use strict';

angular.module('finanzieApp')
  .controller('OperationsCtrl', function ($scope,userService,$location) {

    userService.privatePage();

    $scope.showNew = function () {
      $location.url('new-operation');
    };

  });
