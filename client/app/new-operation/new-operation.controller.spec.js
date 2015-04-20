'use strict';

describe('Controller: NewOperationCtrl', function () {

  // load the controller's module
  beforeEach(module('finanzieApp'));

  var NewOperationCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewOperationCtrl = $controller('NewOperationCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
