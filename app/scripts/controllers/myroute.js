'use strict';

/**
 * @ngdoc function
 * @name angularfullcalendarApp.controller:MyrouteCtrl
 * @description
 * # MyrouteCtrl
 * Controller of the angularfullcalendarApp
 */
angular.module('angularfullcalendarApp')
.controller('MyrouteCtrl', function ($scope,$compile,uiCalendarConfig) {
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    /* event source that contains custom events on the scope */
    $scope.events = [
      {title: 'All Day Event',start: new Date(y, m, 1)},
      {title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2)},
      {id: 999,title: 'Repeating Event',start: new Date(y, m, d - 3, 16, 0),allDay: false},
      {id: 999,title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false},
      {title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false},
      {type:'party',title: 'Lunch',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
      {type:'party',title: 'Lunch 2',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
      {type:'party',title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
    ];

    //$scope.eventSources2 = [$scope.calEventsExt, $scope.eventsF, $scope.events];
    $scope.eventSources2 = [$scope.events];

    /* config object */
    $scope.uiConfig = {
      calendar:{
        droppable: true,
        drop: function(date) {
            console.log( 'Dropped on ' + date.format() );
        },
        height: 450,
        editable: true,
        header:{
          //left: 'month basicWeek basicDay agendaWeek agendaDay',
          left: 'basicDay agendaDay agendaFourDay',
          center: '',
          //right: 'today prev,next'
          right: 'title'
        },
        //dayClick: $scope.alertEventOnClick,
        eventClick: $scope.alertOnEventClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize,
        eventRender: $scope.eventRender,
        defaultView: 'agendaFourDay',
        views: {
          basic: {// options apply to basicWeek and basicDay views
          },
          agenda: {// options apply to agendaWeek and agendaDay views
          },
          week: {// options apply to basicWeek and agendaWeek views
          },
          day: {// options apply to basicDay and agendaDay views
          },
          agendaFourDay: {
            type: 'agenda',
            duration: { days: 4 },
            buttonText: '4 day'
          }
        }
      }
    };

    /* alert on eventClick */
    $scope.alertOnEventClick = function( date, jsEvent, view){
        $scope.alertMessage = (date.title + ' was clicked ');
    };

    /* alert on Drop */
     $scope.alertOnDrop = function(event, delta, revertFunc, jsEvent, ui, view){
       $scope.alertMessage = ('Event Droped to make dayDelta ' + delta);
    };

    /* alert on Resize */
    $scope.alertOnResize = function(event, delta, revertFunc, jsEvent, ui, view ){
       $scope.alertMessage = ('Event Resized to make dayDelta ' + delta);
    };

    /* add custom event*/
    $scope.addEvent = function() {
      $scope.events.push({
        title: 'Open Sesame',
        start: new Date(y, m, 28),
        end: new Date(y, m, 29),
        className: ['openSesame']
      });
    };

    /* remove event */
    $scope.remove = function(index) {
      $scope.events.splice(index,1);
    };

    /* Change View */
    $scope.changeView = function(view,calendar) {
      uiCalendarConfig.calendars[calendar].fullCalendar('changeView',view);
    };

    /* Change View */
    $scope.renderCalender = function(calendar) {
      if(uiCalendarConfig.calendars[calendar]){
        uiCalendarConfig.calendars[calendar].fullCalendar('render');
      }
    };

     /* Render Tooltip */
    $scope.eventRender = function( event, element, view ) {
        element.attr({'tooltip': event.title,'tooltip-append-to-body': true});
        $compile(element)($scope);
    };

});
/* EOF */
