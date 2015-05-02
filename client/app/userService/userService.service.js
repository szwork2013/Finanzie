'use strict';

angular.module('finanzieApp')
  .service('userService', function ($state,$rootScope,$http,$window,Auth) {

    return {

      publicPage:function(){
        Auth.isLoggedInAsync(function(){
          if(Auth.isLoggedIn())
          {
            document.location.href='/';
          }
          else
          {
            document.location.href='/login';
          }
        });
      },
      privatePage:function(){
        Auth.isLoggedInAsync(function(){
          if(!Auth.isLoggedIn())
          {
            document.location.href='/login';
          }
        });
      },
      adminPage:function() {
        Auth.isLoggedInAsync(function () {
          if (!Auth.isAdmin()) {
            document.location.href = '/';
          }
        });
      }

    }
  });
