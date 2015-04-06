/*global moment:false */
/*global $:false */
/**
 * @ngdoc function
 * @name angularfullcalendarApp.controller:MyrouteCtrl
 * @description
 * # MyrouteCtrl
 * Controller of the angularfullcalendarApp
 */
angular.module('angularfullcalendarApp')
//.controller('MyrouteCtrl', function ($scope,$compile) {
.controller('MyrouteCtrl', function ($scope, uiCalendarConfig) {
  'use strict';

    /* event source that contains custom events on the scope */
    $scope.sessions = [{'title': 'Chang'},{'title': 'Raymond'},{'title': 'Bean'},{'title': 'Bright'},{'title': 'Sheppard'},{'title': 'Mcintosh'},{'title': 'Coffey'},{'title': 'Hubbard'},{'title': 'Berry'},{'title': 'Chan'},{'title': 'Ramsey'},{'title': 'Matthews'},{'title': 'Rios'},{'title': 'Whitney'},{'title': 'Campbell'},{'title': 'Gay'},{'title': 'Cohen'},{'title': 'Weaver'},{'title': 'Forbes'},{'title': 'Haynes'},{'title': 'Owens'},{'title': 'Ewing'},{'title': 'Kim'},{'title': 'Norris'},{'title': 'Waller'},{'title': 'Whitley'},{'title': 'Villarreal'},{'title': 'Trujillo'},{'title': 'Weber'},{'title': 'Scott'},{'title': 'Sullivan'},{'title': 'Bullock'},{'title': 'Thornton'},{'title': 'Camacho'},{'title': 'Mosley'},{'title': 'England'},{'title': 'Clarke'},{'title': 'Parsons'},{'title': 'Sandoval'},{'title': 'Lang'},{'title': 'Bass'},{'title': 'Patton'},{'title': 'Puckett'},{'title': 'Alvarez'},{'title': 'Robinson'},{'title': 'Weiss'},{'title': 'Gordon'},{'title': 'Hinton'},{'title': 'Hart'},{'title': 'Holloway'},{'title': 'Mcknight'},{'title': 'Wallace'},{'title': 'Maldonado'},{'title': 'Hancock'},{'title': 'Davidson'},{'title': 'Howe'},{'title': 'Jenkins'},{'title': 'Gaines'},{'title': 'Ingram'},{'title': 'Martinez'},{'title': 'Fuller'},{'title': 'Kelly'},{'title': 'Blake'},{'title': 'Sloan'},{'title': 'Frank'},{'title': 'Velasquez'},{'title': 'Hodges'},{'title': 'Becker'},{'title': 'Holcomb'},{'title': 'Walton'}];

    var eStartDate='2015-10-01';
    var eStartTime='T00:00:00';
    var eEndDate='2015-10-09';
    var eEndTime='T24:00:00';

    var esd = moment(eStartDate);
    var eed = moment(eEndDate);
    var diffed = eed.diff(esd, 'days') + 1;
    var constraint = [
          {
            //allDay:false,
            //url:'string',
            //color: //Sets an event's background and border color just like the calendar-wide eventColor option.
            //backgroundColor: //Sets an event's background color just like the calendar-wide eventBackgroundColor option.
            //borderColor: Sets an event's border color just like the the calendar-wide eventBorderColor option.
            //textColor:'',
            id: 'available',
            title: 'eventConstraint',
            start: eStartDate + eStartTime,
            end: eEndDate + eEndTime,
            rendering: 'background',
            className: 'className'
          },
        ];
    $scope.events = [];
    //$scope.eventSources = [$scope.events, $scope.eventSource, $scope.eventsF];
    $scope.events1 = [];
    $scope.events2 = [];
    $scope.events3 = [];
    /* config object */
    $scope.uiConfig = {
      calendar:{
        //allDaySlot: true,
        //slotDuration: '00:30:00',
        //snapDuration:'00:30:00',
        //scrollTime: '06:00:00',
        //minTime: '00:00:00',
        //maxTime: '24:00:00',
        //lang: 'en',
        //height: 'auto',
        //contentHeight: 'auto',
        //aspectRatio: 1.35, //initialize a calendar who's width is 1.35 its height
        timezone: 'local',
        //now: '2013-12-01T00:00:00', //Explicitly sets the 'today' date normally highlighted in yellow.
        editable: true,
        header: {
          left: 'prev,next',
          center: '',
          right: 'eventAgenda,agendaWeek,agendaDay'
        },
        defaultView:'eventAgenda',
        defaultTimedEventDuration: '01:00:00',
        droppable: true, // this allows things to be dropped onto the calendar
        //drop: function(moment, jqEvent, jqObj, calObj) {},
        //drop: function() {},
        defaultDate:eStartDate, //The initial date displayed when the calendar first loads.
        eventConstraint:'available',
        events: constraint,

        views: {
            eventAgenda: {
              type: 'agenda',
              duration: { days: diffed },
              buttonText: 'event'
            }
            // ,zoom: {
            //   type: 'agenda',
            //   duration: { days: diffed },
            //   buttonText: 'zoom',
            //   slotDuration: '00:60:00'
            // }
        }
        //,viewRender:function( view, element ){}//Triggered when a new date-range is rendered, or when the view type switches.
        //,viewDestroy:function( view, element ){}//Triggered when a rendered date-range needs to be torn down.
        //,dayRender:function( date, cell ) { }//A hook for modifying a day cell.
        //// event is an Event Object that holds the event's information (date, title, etc).
        //// jsEvent holds the native JavaScript event with low-level information such as mouse coordinates.
        //// view holds the current View Object.
        //,dayClick: function(date, jsEvent, view) {}
        //,eventClick:function( event, jsEvent, view ) { }
        //,eventMouseover:function( event, jsEvent, view ) { }
        //,eventMouseout:function( event, jsEvent, view ) { }

      }
    };

  //get events
  //.fullCalendar( 'clientEvents' [, idOrFilter ] ) -> Array
  //remove events
  //.fullCalendar( 'removeEvents' [, idOrFilter ] )
});
/* EOF */
