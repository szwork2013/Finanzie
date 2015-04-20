'use strict';

describe('Controller: NewProductCtrl', function () {

  // load the controller's module
  beforeEach(module('finanzieApp'));

  var NewProductCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewProductCtrl = $controller('NewProductCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
