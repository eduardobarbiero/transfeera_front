'use strict';

angular.module('transfeera-front.directives')
  .directive('rdWidgetFooter', function () {
    return {
        requires: '^rdWidget',
        transclude: true,
        template: '<div class="widget-footer" ng-transclude></div>',
        restrict: 'E'
    };    
});