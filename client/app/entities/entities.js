'use strict';

angular.module('finanzieApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('entities', {
        url: '/entities',
        templateUrl: 'app/entities/entities.html',
        controller: 'EntitiesCtrl'
      });
  });
