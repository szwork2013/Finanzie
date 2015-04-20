'use strict';

angular.module('finanzieApp')
  .controller('OperationsCtrl', function ($scope,userService) {

    userService.privatePage();

  });
