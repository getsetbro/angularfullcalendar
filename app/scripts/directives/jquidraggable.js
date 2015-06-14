'use strict';

/**
 * @ngdoc directive
 * @name angularfullcalendarApp.directive:jquidraggable
 * @description
 * # jquidraggable
 */

// This makes any element draggable
// Usage: <div dragonfly>Foobar</div>
angular.module('angularfullcalendarApp')
.directive('dragonfly', function() {
  return {
    //The link function is responsible for registering DOM listeners as well as updating the DOM.
    link: function(scope, element, attrs) {
      element.draggable({
        //revert: true,      // immediately snap back to original position
        //revertDuration: 0  //
        helper:'clone',
        appendTo: 'body'
      });

      //put data-attributes into the data event obj
      var eventObj = {
        stick: true,
        title: attrs.ttl
      };
      //unique id
      //var timestamp = new Date().getUTCMilliseconds();
      //eventObj.id = attrs.eid || timestamp;
      if (attrs.duration) {
          eventObj.duration = attrs.duration;
      }

      eventObj.backgroundColor = '#378006';
      eventObj.borderColor = '#257e4a';
      eventObj.className = 'SessionEvent';
      element.data('event', eventObj);

    }
  };
});
