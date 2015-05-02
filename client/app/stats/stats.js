'use strict';

angular.module('finanzieApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('stats', {
        url: '/stats',
        templateUrl: 'app/stats/stats.html',
        controller: 'StatsCtrl'
      });
  });
