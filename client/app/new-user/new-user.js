'use strict';

angular.module('finanzieApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('new-user', {
        url: '/new-user',
        templateUrl: 'app/new-user/new-user.html',
        controller: 'NewUserCtrl'
      });
  });