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
.controller('MyrouteCtrl', function ($scope, uiCalendarConfig,$modal,$log) {
  'use strict';
    /* ------------------------- */
    /* event source that contains custom events on the scope */
    $scope.allsessions = [
      {'Name':'Name of Session 1','Owner':'b','Active':true,'Grade':['K','1','2','3','4','5','6','7','8','9','10','11','12'],'Content Area':['Content Area 1'],'Audience':['Principal','Academic Dean'],'Strand':'Strand 1','Description':'Description 1','Session Aim':'Session Aim 1','Session Prework':'Session Prework 1','Prework Completion Time':'1','Materials':['Projector','Document Camera','Speakers','Internet to present as a facilitator','Internet for participants','Desks or Tables Necessary','Auditorium style could work with clipboards'],'Special Requests':'Special Requests 1','Session Documents':[{'Name':'1', 'Type':'1', 'Assigned To':'1', 'Print Instructions':'1', 'Due Date':'1', 'Status':'1'}]},
      {'Name':'Session 2','Owner':'bob','Active':true,'Grade':['K','1','2','3','4','5','6','7','8','9','10','11','12'],'Content Area':['Content Area 1'],'Audience':['Principal','Academic Dean'],'Strand':'Strand 1','Description':'Description 1','Session Aim':'Session Aim 1','Session Prework':'Session Prework 1','Prework Completion Time':'1','Materials':['Projector','Document Camera','Speakers','Internet to present as a facilitator','Internet for participants','Desks or Tables Necessary','Auditorium style could work with clipboards'],'Special Requests':'Special Requests 1','Session Documents':[{'Name':'1', 'Type':'1', 'Assigned To':'1', 'Print Instructions':'1', 'Due Date':'1', 'Status':'1'}]},
      {'Name':'Name of Session 3','Owner':'b','Active':true,'Grade':['K','1','2','3','4','5','6','7','8','9','10','11','12'],'Content Area':['Content Area 1'],'Audience':['Principal','Academic Dean'],'Strand':'Strand 1','Description':'Description 1','Session Aim':'Session Aim 1','Session Prework':'Session Prework 1','Prework Completion Time':'1','Materials':['Projector','Document Camera','Speakers','Internet to present as a facilitator','Internet for participants','Desks or Tables Necessary','Auditorium style could work with clipboards'],'Special Requests':'Special Requests 1','Session Documents':[{'Name':'1', 'Type':'1', 'Assigned To':'1', 'Print Instructions':'1', 'Due Date':'1', 'Status':'1'}]},
      {'Name':'Name of Session 4','Owner':'b','Active':true,'Grade':['K','1','2','3','4','5','6','7','8','9','10','11','12'],'Content Area':['Content Area 1'],'Audience':['Principal','Academic Dean'],'Strand':'Strand 1','Description':'Description 1','Session Aim':'Session Aim 1','Session Prework':'Session Prework 1','Prework Completion Time':'1','Materials':['Projector','Document Camera','Speakers','Internet to present as a facilitator','Internet for participants','Desks or Tables Necessary','Auditorium style could work with clipboards'],'Special Requests':'Special Requests 1','Session Documents':[{'Name':'1', 'Type':'1', 'Assigned To':'1', 'Print Instructions':'1', 'Due Date':'1', 'Status':'1'}]},
      {'Name':'Name of Session 5','Owner':'b','Active':true,'Grade':['K','1','2','3','4','5','6','7','8','9','10','11','12'],'Content Area':['Content Area 1'],'Audience':['Principal','Academic Dean'],'Strand':'Strand 1','Description':'Description 1','Session Aim':'Session Aim 1','Session Prework':'Session Prework 1','Prework Completion Time':'1','Materials':['Projector','Document Camera','Speakers','Internet to present as a facilitator','Internet for participants','Desks or Tables Necessary','Auditorium style could work with clipboards'],'Special Requests':'Special Requests 1','Session Documents':[{'Name':'1', 'Type':'1', 'Assigned To':'1', 'Print Instructions':'1', 'Due Date':'1', 'Status':'1'}]},
      {'Name':'Name of Session 6','Owner':'b','Active':true,'Grade':['K','1','2','3','4','5','6','7','8','9','10','11','12'],'Content Area':['Content Area 1'],'Audience':['Principal','Academic Dean'],'Strand':'Strand 1','Description':'Description 1','Session Aim':'Session Aim 1','Session Prework':'Session Prework 1','Prework Completion Time':'1','Materials':['Projector','Document Camera','Speakers','Internet to present as a facilitator','Internet for participants','Desks or Tables Necessary','Auditorium style could work with clipboards'],'Special Requests':'Special Requests 1','Session Documents':[{'Name':'1', 'Type':'1', 'Assigned To':'1', 'Print Instructions':'1', 'Due Date':'1', 'Status':'1'}]},
      {'Name':'Name of Session 7','Owner':'b','Active':true,'Grade':['K','1','2','3','4','5','6','7','8','9','10','11','12'],'Content Area':['Content Area 1'],'Audience':['Principal','Academic Dean'],'Strand':'Strand 1','Description':'Description 1','Session Aim':'Session Aim 1','Session Prework':'Session Prework 1','Prework Completion Time':'1','Materials':['Projector','Document Camera','Speakers','Internet to present as a facilitator','Internet for participants','Desks or Tables Necessary','Auditorium style could work with clipboards'],'Special Requests':'Special Requests 1','Session Documents':[{'Name':'1', 'Type':'1', 'Assigned To':'1', 'Print Instructions':'1', 'Due Date':'1', 'Status':'1'}]},
      {'Name':'Name of Session 8','Owner':'b','Active':true,'Grade':['K','1','2','3','4','5','6','7','8','9','10','11','12'],'Content Area':['Content Area 1'],'Audience':['Principal','Academic Dean'],'Strand':'Strand 1','Description':'Description 1','Session Aim':'Session Aim 1','Session Prework':'Session Prework 1','Prework Completion Time':'1','Materials':['Projector','Document Camera','Speakers','Internet to present as a facilitator','Internet for participants','Desks or Tables Necessary','Auditorium style could work with clipboards'],'Special Requests':'Special Requests 1','Session Documents':[{'Name':'1', 'Type':'1', 'Assigned To':'1', 'Print Instructions':'1', 'Due Date':'1', 'Status':'1'}]},
      {'Name':'Name of Session 9','Owner':'b','Active':true,'Grade':['K','1','2','3','4','5','6','7','8','9','10','11','12'],'Content Area':['Content Area 1'],'Audience':['Principal','Academic Dean'],'Strand':'Strand 1','Description':'Description 1','Session Aim':'Session Aim 1','Session Prework':'Session Prework 1','Prework Completion Time':'1','Materials':['Projector','Document Camera','Speakers','Internet to present as a facilitator','Internet for participants','Desks or Tables Necessary','Auditorium style could work with clipboards'],'Special Requests':'Special Requests 1','Session Documents':[{'Name':'1', 'Type':'1', 'Assigned To':'1', 'Print Instructions':'1', 'Due Date':'1', 'Status':'1'}]},
      {'Name':'Name of Session 12','Owner':'b','Active':true,'Grade':['K','1','2','3','4','5','6','7','8','9','10','11','12'],'Content Area':['Content Area 1'],'Audience':['Principal','Academic Dean'],'Strand':'Strand 1','Description':'Description 1','Session Aim':'Session Aim 1','Session Prework':'Session Prework 1','Prework Completion Time':'1','Materials':['Projector','Document Camera','Speakers','Internet to present as a facilitator','Internet for participants','Desks or Tables Necessary','Auditorium style could work with clipboards'],'Special Requests':'Special Requests 1','Session Documents':[{'Name':'1', 'Type':'1', 'Assigned To':'1', 'Print Instructions':'1', 'Due Date':'1', 'Status':'1'}]},
      {'Name':'Name of Session 34','Owner':'b','Active':true,'Grade':['K','1','2','3','4','5','6','7','8','9','10','11','12'],'Content Area':['Content Area 1'],'Audience':['Principal','Academic Dean'],'Strand':'Strand 1','Description':'Description 1','Session Aim':'Session Aim 1','Session Prework':'Session Prework 1','Prework Completion Time':'1','Materials':['Projector','Document Camera','Speakers','Internet to present as a facilitator','Internet for participants','Desks or Tables Necessary','Auditorium style could work with clipboards'],'Special Requests':'Special Requests 1','Session Documents':[{'Name':'1', 'Type':'1', 'Assigned To':'1', 'Print Instructions':'1', 'Due Date':'1', 'Status':'1'}]}
    ];
    $scope.addToEvent = function(e){
      $scope.sessions.push(e);
    };
    $scope.removeFromEvent = function(idx){
      $scope.sessions.splice(idx, 1);
    };
    $scope.sessions = [];
    /* ------------------------- */


    /* ------------------------- */
    $scope.eStartDate='2015-10-05';
    $scope.eEndDate='2015-10-09';

    $scope.tracks = [{title:'Track 1',defaultTrrackEventDuration: '00:60:00'}];
    $scope.addATrack = function(){
      $scope.tracks.push({title:'Track #', defaultTrrackEventDuration: '00:60:00'});
    };
    $scope.deleteTrack = function(idx){
      $scope.tracks.splice(idx, 1);
    };
    /* ------------------------- */


    /* ------------------------- */
    var esd = moment($scope.eStartDate);
    var eed = moment($scope.eEndDate);
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
            start: $scope.eStartDate + 'T00:00:00',
            end: $scope.eEndDate + 'T24:00:00',
            rendering: 'background',
            className: 'className'
          },
        ];
    $scope.events = [];


    /* alert on eventClick */
    //$scope.onEventClick = function( event, jsEvent, view){
    $scope.onEventClick = function( event, jsEvent ){
      var modalInstance = $modal.open({
        templateUrl: 'myModalContent.html',
        controller: 'ModalInstanceCtrl',
        resolve: {
          item: function () {
            return event;
          }
        }
      });

      modalInstance.result.then(function (item) {
        //closed

        if(item.delete === true){
          $(jsEvent.target).closest('[calendar]').fullCalendar( 'removeEvents', item._id );
        }
        if(item.room){
          $log.info('rerenderEvents');
          $(jsEvent.target).closest('[calendar]').fullCalendar( 'rerenderEvents');
        }
      }, function () {
        //dismissed
        //$log.info('Modal dismissed at: ' + new Date());
      });
    };


    /* cal config object */
    $scope.uiConfig = {
      calendar:{
        //allDaySlot: true,
        slotDuration: '00:30:00',
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
          left: 'eventAgenda,eventAgenda2,agendaWeek,agendaDay',
          center: '',
          right: 'prev,next'
        },
        defaultView:'eventAgenda',
        defaultTimedEventDuration: '01:00:00',
        droppable: true, // this allows things to be dropped onto the calendar
        //dropAccept: '*',
        //drop: function(moment, jqEvent, jqObj, calObj) {},
        //drop: function() {},
        defaultDate:$scope.eStartDate, //The initial date displayed when the calendar first loads.
        eventConstraint:'available',
        events: constraint,
        eventRender: function(event, element) {
          if(event.room){
            element.find('.fc-title').append('<br/>Room: '+ event.room);
          }
        },
        views: {
            eventAgenda: {
              type: 'agenda',
              duration: { days: diffed },
              buttonText: 'event'
            },
            eventAgenda2: {
              type: 'agenda',
              duration: { days: diffed },
              slotDuration: '00:60:00',
              buttonText: 'event2'
            },
            agendaWeek: {
              slotDuration: '00:60:00'
            },
            agendaDay: {
              slotDuration: '00:15:00'
            }
        },
        //,viewRender:function( view, element ){}//Triggered when a new date-range is rendered, or when the view type switches.
        //,viewDestroy:function( view, element ){}//Triggered when a rendered date-range needs to be torn down.
        //,dayRender:function( date, cell ) { }//A hook for modifying a day cell.
        //// event is an Event Object that holds the event's information (date, title, etc).
        //// jsEvent holds the native JavaScript event with low-level information such as mouse coordinates.
        //// view holds the current View Object.
        //,dayClick: function(date, jsEvent, view) {}

        //eventClick:function( event, jsEvent, view ) {
        eventClick: $scope.onEventClick
        //,eventMouseover:function( event, jsEvent, view ) { }
        //,eventMouseout:function( event, jsEvent, view ) { }

      }
    };

  //get events
  //.fullCalendar( 'clientEvents' [, idOrFilter ] ) -> Array
  //remove events
  //.fullCalendar( 'removeEvents' [, idOrFilter ] )


    $scope.tabClick = function (e, num) {
      $('.js-navtab').removeClass('active');
      $(e.target).parent().addClass('active');
      $('.js-tabpane').removeClass('active');
      var $tabpane = $('.js-tabcontent').find('>div').eq(num);
      $tabpane.addClass('active');
      $tabpane.find('.calendar').fullCalendar('render');
    };
});
/* EOF */
