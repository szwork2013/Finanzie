'use strict';

angular.module('finanzieApp')
  .controller('AdminCtrl', function ($scope, $location, userService) {

    userService.adminPage();

  });
