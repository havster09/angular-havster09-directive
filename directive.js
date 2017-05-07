angular.module('havenramos.my-directive', []).
directive('havenDirective', function () {
  return {
    restrict: 'E',
    template: '<h3>Haven directive Time</h3>'
  }
});
