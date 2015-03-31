'use strict';

/**
 * @ngdoc directive
 * @name angularfullcalendarApp.directive:jquidraggable
 * @description
 * # jquidraggable
 */

// This makes any element draggable
// Usage: <div draggable>Foobar</div>
angular.module('angularfullcalendarApp')
.directive('draggable', function() {
  return {
    // A = attribute, E = Element, C = Class and M = HTML Comment
    restrict:'A',
    //The link function is responsible for registering DOM listeners as well as updating the DOM.
    //link: function(scope, element, attrs) {
    link: function(scope, element) {
      element.draggable({
        //revert: true,      // immediately snap back to original position
        //revertDuration: 0  //
        helper:'clone',
        appendTo: 'body'
      });
    }
  };
});
