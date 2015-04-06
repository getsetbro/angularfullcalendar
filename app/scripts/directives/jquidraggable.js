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
    //The link function is responsible for registering DOM listeners as well as updating the DOM.
    link: function(scope, element, attrs) {
      element.draggable({
        //revert: true,      // immediately snap back to original position
        //revertDuration: 0  //
        helper:'clone',
        appendTo: 'body'
      });
      element.data('event', {title: attrs.ttl, id: attrs.eid, stick: true});
    }
  };
});
