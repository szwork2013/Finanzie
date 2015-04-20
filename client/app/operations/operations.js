'use strict';

angular.module('finanzieApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('operations', {
        url: '/operations',
        templateUrl: 'app/operations/operations.html',
        controller: 'OperationsCtrl'
      });
  });