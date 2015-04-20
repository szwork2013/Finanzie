'use strict';

angular.module('finanzieApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('new-operation', {
        url: '/new-operation',
        templateUrl: 'app/new-operation/new-operation.html',
        controller: 'NewOperationCtrl'
      });
  });