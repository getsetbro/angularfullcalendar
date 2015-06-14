/*global moment:false */
/*global $:false */

/**
 * @ngdoc function
 * @name angularfullcalendarApp.controller:MyrouteCtrl
 * @description
 * # MyrouteCtrl
 * Controller of the angularfullcalendarApp
 */

var glob = null;

var app = angular.module('angularfullcalendarApp');
//.controller('MyrouteCtrl', function ($scope,$compile) {
app.controller('MyrouteCtrl', function ($scope, uiCalendarConfig, $modal) {
  'use strict';


    /* ------------------------- */
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
      {'Name':'Name of Session 34','Owner':'b','Active':true,'Grade':['K','1','2','3','4','5','6','7','8','9','10','11','12'],'Content Area':['Content Area 1'],'Audience':['Principal','Academic Dean'],'Strand':'Strand 1','Description':'Description 1','Session Aim':'Session Aim 1','Session Prework':'Session Prework 1','Prework Completion Time':'1','Materials':['Projector','Document Camera','Speakers','Internet to present as a facilitator','Internet for participants','Desks or Tables Necessary','Auditorium style could work with clipboards'],'Special Requests':'Special Requests 1','Session Documents':[{'Name':'1', 'Type':'1', 'Assigned To':'1', 'Print Instructions':'1', 'Due Date':'1', 'Status':'1'}]}
    ];
    $scope.addToEvent = function(e){
      $scope.sessions.push(e);
    };
    $scope.removeFromEvent = function(idx){
      $scope.sessions.splice(idx, 1);
    };
    $scope.sessions = [
      {'Name':'Name of Session 12','Owner':'b','Active':true,'Grade':['K','1','2','3','4','5','6','7','8','9','10','11','12'],'Content Area':['Content Area 1'],'Audience':['Principal','Academic Dean'],'Strand':'Strand 1','Description':'Description 1','Session Aim':'Session Aim 1','Session Prework':'Session Prework 1','Prework Completion Time':'1','Materials':['Projector','Document Camera','Speakers','Internet to present as a facilitator','Internet for participants','Desks or Tables Necessary','Auditorium style could work with clipboards'],'Special Requests':'Special Requests 1','Session Documents':[{'Name':'1', 'Type':'1', 'Assigned To':'1', 'Print Instructions':'1', 'Due Date':'1', 'Status':'1'}]}
    ];
    /* ------------------------- */


    /* START Event Details */
    $scope.eventOwner = 'bob';

    $scope.selectedType = undefined;
    $scope.eventTypes = {'type one':1,'type two':2};

    var eStartDate = '2015-05-13';
    $scope.eventStartTime = '9:00 AM';
    var eEndDate = '2015-05-22';
    $scope.eventEndTime = '6:00 PM';

    $scope.eventStartDate = new Date(eStartDate + ' 12:00:00');
    $scope.eventEndDate = new Date(eEndDate+ ' 12:00:00');

    $scope.tracks = [{
        "title": "Track 0",
        "sessions": [[]]
      },
      {
        "title": "Track 1",
        "sessions": [[{
                "title": "Name of Session 59",
                "start": "2015-05-19T08:20:00Z"
            }, {

                "title": "10 Lit Intellectual Prep",
                "start": "2015-05-19T08:20:00Z"
            }]
        ]
    }];
    $scope.addATrack = function(){
      $scope.tracks.push({title:'Track #',sessions:[[]]});
    };
    $scope.deleteTrack = function(idx){
      $scope.tracks.splice(idx, 1);
    };
    var sources = [{
        title: 'Open a',
        start: new Date()
      },{
        title: 'Open b',
        start: new Date()
      },{
        title: 'Open c',
        start: new Date()
      }];
    $scope.addSessions = function(idx){
      // $scope.tracks[1].sessions[0].push({
      //   title: 'Open ',
      //   stick:true,
      //   start: new Date()
      //});
      // $('[calendar]').fullCalendar( 'renderEvent', {
      //   title: 'Open ',
      //   stick:true,
      //   start: new Date()
      // }, true);

      $('.calendar').fullCalendar( 'addEventSource', sources );
    };
    /* END Event Details */


    /* START Event Planner */
    var esd = moment(eStartDate);
    var eed = moment(eEndDate);
    var diffed = eed.diff(esd, 'days');

    $scope.thisUnUsed = [];

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
          $(jsEvent.target).closest('[calendar]').fullCalendar( 'rerenderEvents');
        }
      }, function () {
        //dismissed
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
        contentHeight: 425,
        //aspectRatio: 1.35, //initialize a calendar who's width is 1.35 its height
        //timezone: 'local',
        //now: '2013-12-01T00:00:00', //Explicitly sets the 'today' date normally highlighted in yellow.
        editable: true,
        header: {
          left: 'view01,view02,agendaWeek,agendaDay',
          center: '',
          right: 'prev,next'
        },
        defaultView: 'view01',
        defaultTimedEventDuration: '01:00:00',
        droppable: true, // this allows things to be dropped onto the calendar
        //dropAccept: '*',
        //drop: function(moment, jqEvent, jqObj, calObj) {},
        defaultDate: esd, //The initial date displayed when the calendar first loads.
        eventConstraint: 'eventSpan',
        events: [
          {
            //allDay:false,
            //url:'string',
            //color: //Sets an event's background and border color just like the calendar-wide eventColor option.
            //backgroundColor: //Sets an event's background color just like the calendar-wide eventBackgroundColor option.
            //borderColor: Sets an event's border color just like the the calendar-wide eventBorderColor option.
            //textColor:'',
            //className: 'className',
            id: 'eventSpan',
            title: 'eventConstraint',
            start: esd,
            end: eed,
            rendering: 'background'
          }
        ],
        eventRender: function(event, element) {
          if(event.room){
            element.find('.fc-title').append('<br/>Room: '+ event.room);
          }
        },
        views: {
            view01: {
              type: 'agenda',
              duration: { days: diffed },
              buttonText: 'View 1'
            },
            view02: {
              type: 'agenda',
              duration: { days: diffed },
              slotDuration: '00:60:00',
              buttonText: 'View 2'
            },
            agendaWeek: {
              slotDuration: '00:60:00',
              buttonText: 'Week'
            },
            agendaDay: {
              slotDuration: '00:15:00',
              buttonText: 'Day'
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
glob = uiCalendarConfig.calendars;


    $scope.tabClick = function (e, num) {
      $('.js-navtab').removeClass('active');
      $(e.target).parent().addClass('active');
      $('.js-tabpane').removeClass('active');
      var $tabpane = $('.js-tabcontent').find('>div').eq(num);
      $tabpane.addClass('active');
      $tabpane.find('.calendar').fullCalendar('render');
    };

    $scope.toEStartDate = function () {
      $('.calendar').fullCalendar( 'gotoDate', esd );
    };
});
