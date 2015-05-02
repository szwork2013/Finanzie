'use strict';

angular.module('finanzieApp')
  .controller('StatsCtrl', function ($scope, $location, userService) {

    userService.adminPage();

  });
