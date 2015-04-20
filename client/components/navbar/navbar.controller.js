'use strict';

angular.module('finanzieApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {

    $scope.menu = [
      {
        'title': 'Operaciones',
        'link': '/operations'
      },
      {
        'title': 'Productos',
        'link': '/products'
      }
    ];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
