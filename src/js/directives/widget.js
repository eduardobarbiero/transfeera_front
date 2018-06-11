'use strict';

angular.module('transfeera-front.directives')
  .directive('rdWidget', function () {
    return {        
        transclude: true,
        template: '<div class="widget" ng-transclude></div>',
        restrict: 'EA'
    };
  });