'use strict';

angular.module('finanzieApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('new-product', {
        url: '/new-product',
        templateUrl: 'app/new-product/new-product.html',
        controller: 'NewProductCtrl'
      });
  });