'use strict';

describe('Controller: OperationsCtrl', function () {

  // load the controller's module
  beforeEach(module('finanzieApp'));

  var OperationsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OperationsCtrl = $controller('OperationsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
