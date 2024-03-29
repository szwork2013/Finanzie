'use strict';

angular.module('finanzieApp')
  .controller('ProductsCtrl', function ($scope, $rootScope, $location, userService) {

    userService.adminPage();

    $scope.productType = 'SIN';

    $rootScope.productList = [
      {
        type : 'SIN',
        term : 3,
        interest : 0,
        discount : 1.57,
        commission : 0,
        open: 0,
        close: 0.5
      },
      {
        type : 'SIN',
        term : 6,
        interest : 0,
        discount : 2.72,
        commission : 0,
        open: 0,
        close: 0.5
      },
      {
        type : 'SIN',
        term : 9,
        interest : 0,
        discount : 3.85,
        commission : 0,
        open: 0,
        close: 0.5
      },
      {
        type : 'SIN',
        term : 12,
        interest : 0,
        discount : 4.71,
        commission : 0,
        open: 0,
        close: 0.5
      },
      {
        type : 'SIN',
        term : 18,
        interest : 0,
        discount : 6.80,
        commission : 0,
        open: 0,
        close: 0.5
      },
      {
        type : 'SIN',
        term : 24,
        interest : 0,
        discount : 8.80,
        commission : 0,
        open: 0,
        close: 0.5
      },
      {
        type : 'SIN',
        term : 36,
        interest : 0,
        discount : 12.70,
        commission : 0,
        open: 0,
        close: 0.5
      },
      {
        type : 'CON',
        term : 3,
        interest : 16,
        discount : 0,
        commission : 1.5,
        open: 0,
        close: 0.5
      },
      {
        type : 'CON',
        term : 6,
        interest : 16,
        discount : 0,
        commission : 1.5,
        open: 0,
        close: 0.5
      },
      {
        type : 'CON',
        term : 9,
        interest : 16,
        discount : 0,
        commission : 1.5,
        open: 0,
        close: 0.5
      },
      {
        type : 'CON',
        term : 12,
        interest : 16,
        discount : 0,
        commission : 1.5,
        open: 0,
        close: 0.5
      },
      {
        type : 'CON',
        term : 18,
        interest : 16,
        discount : 0,
        commission : 1.5,
        open: 0,
        close: 0.5
      },
      {
        type : 'CON',
        term : 24,
        interest : 16,
        discount : 0,
        commission : 1.5,
        open: 0,
        close: 0.5
      },
      {
        type : 'CON',
        term : 36,
        interest : 16,
        discount : 0,
        commission : 1.5,
        open: 0,
        close: 0.5
      },
      {
        type : 'CON',
        term : 48,
        interest : 16,
        discount : 0,
        commission : 1.5,
        open: 0,
        close: 0.5
      },
      {
        type : 'CON',
        term : 60,
        interest : 16,
        discount : 0,
        commission : 1.5,
        open: 0,
        close: 0.5
      },
      {
        type : 'HIBRIDO',
        term : 24,
        interest : 7.99,
        discount : 2,
        commission : 0,
        open: 0,
        close: 0.5
      },
      {
        type : 'HIBRIDO',
        term : 36,
        interest : 7.99,
        discount : 3.55,
        commission : 0,
        open: 0,
        close: 0.5
      },
      {
        type : 'HIBRIDO',
        term : 48,
        interest : 7.99,
        discount : 4.75,
        commission : 0,
        open: 0,
        close: 0.5
      },
      {
        type : 'HIBRIDO',
        term : 60,
        interest : 7.99,
        discount : 6.75,
        commission : 0,
        open: 0,
        close: 0.5
      }
    ];

    $scope.showNew = function () {
      $location.url('new-product');
    };

  });
