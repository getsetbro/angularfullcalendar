"use strict";angular.module("angularfullcalendarApp",["ngCookies","ngResource","ngRoute","ngSanitize","ui.calendar"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/myroute",{templateUrl:"views/myroute.html",controller:"MyrouteCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("angularfullcalendarApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("angularfullcalendarApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("angularfullcalendarApp").controller("MyrouteCtrl",["$scope",function(a){a.sessions=[{title:"Chang"},{title:"Raymond"},{title:"Bean"},{title:"Bright"},{title:"Sheppard"},{title:"Mcintosh"},{title:"Coffey"},{title:"Hubbard"},{title:"Berry"},{title:"Chan"},{title:"Ramsey"},{title:"Matthews"},{title:"Rios"},{title:"Whitney"},{title:"Campbell"},{title:"Gay"},{title:"Cohen"},{title:"Weaver"},{title:"Forbes"},{title:"Haynes"},{title:"Owens"},{title:"Ewing"},{title:"Kim"},{title:"Norris"},{title:"Waller"},{title:"Whitley"},{title:"Villarreal"},{title:"Trujillo"},{title:"Weber"},{title:"Scott"},{title:"Sullivan"},{title:"Bullock"},{title:"Thornton"},{title:"Camacho"},{title:"Mosley"},{title:"England"},{title:"Clarke"},{title:"Parsons"},{title:"Sandoval"},{title:"Lang"},{title:"Bass"},{title:"Patton"},{title:"Puckett"},{title:"Alvarez"},{title:"Robinson"},{title:"Weiss"},{title:"Gordon"},{title:"Hinton"},{title:"Hart"},{title:"Holloway"},{title:"Mcknight"},{title:"Wallace"},{title:"Maldonado"},{title:"Hancock"},{title:"Davidson"},{title:"Howe"},{title:"Jenkins"},{title:"Gaines"},{title:"Ingram"},{title:"Martinez"},{title:"Fuller"},{title:"Kelly"},{title:"Blake"},{title:"Sloan"},{title:"Frank"},{title:"Velasquez"},{title:"Hodges"},{title:"Becker"},{title:"Holcomb"},{title:"Walton"}];var b="2015-10-01",c="T00:00:00",d="2015-10-09",e="T24:00:00",f=moment(b),g=moment(d),h=g.diff(f,"days")+1,i=[{id:"available",title:"eventConstraint",start:b+c,end:d+e,rendering:"background",className:"className"}];a.eventSources2=[],a.uiConfig={calendar:{editable:!0,header:{left:"prev,next",center:"",right:"eventAgenda,agendaWeek,agendaDay"},defaultView:"eventAgenda",defaultTimedEventDuration:"01:00:00",droppable:!0,drop:function(){},defaultDate:b,eventConstraint:"available",events:i,views:{eventAgenda:{type:"agenda",duration:{days:h},buttonText:"event"}}}}}]),angular.module("ui.calendar",[]).constant("uiCalendarConfig",{calendars:{}}).controller("uiCalendarCtrl",["$scope","$timeout","$locale",function(a,b,c){var d=1,e=1,f=a.eventSources,g=a.calendarWatchEvent?a.calendarWatchEvent:angular.noop,h=function(a){var c;return a&&(c=function(){var c=arguments,d=this;b(function(){a.apply(d,c)})}),c};this.eventsFingerprint=function(a){return a._id||(a._id=e++),""+a._id+(a.id||"")+(a.title||"")+(a.url||"")+(+a.start||"")+(+a.end||"")+(a.allDay||"")+(a.className||"")+g(a)||""},this.sourcesFingerprint=function(a){return a.__id||(a.__id=d++)},this.allEvents=function(){for(var a=[],b=0,c=f.length;c>b;b++){var d=f[b];if(angular.isArray(d))a.push(d);else if(angular.isObject(d)&&angular.isArray(d.events)){var e={};for(var g in d)"_uiCalId"!==g&&"events"!==g&&(e[g]=d[g]);for(var h=0;h<d.events.length;h++)angular.extend(d.events[h],e);a.push(d.events)}}return Array.prototype.concat.apply([],a)},this.changeWatcher=function(a,b){var c,d=function(){for(var c,d,e=angular.isFunction(a)?a():a,g=[],h=0,i=e.length;i>h;h++)d=e[h],c=b(d),f[c]=d,g.push(c);return g},e=function(a,b){var c,d,e=[],f={};for(c=0,d=b.length;d>c;c++)f[b[c]]=!0;for(c=0,d=a.length;d>c;c++)f[a[c]]||e.push(a[c]);return e},f={},g=function(a,d){var g,h,i,j,k={},l=e(d,a);for(g=0,h=l.length;h>g;g++){var m=l[g];i=f[m],delete f[m];var n=b(i);n===m?c.onRemoved(i):(k[n]=m,c.onChanged(i))}var o=e();for(g=0,h=o.length;h>g;g++)j=o[g],i=f[j],k[j]||c.onAdded(i)};return c={subscribe:function(a,b){a.$watch(d,function(a,c){b&&b(a,c)===!1||g(a,c)},!0)},onAdded:angular.noop,onChanged:angular.noop,onRemoved:angular.noop}},this.getFullCalendarConfig=function(a,b){var c={};return angular.extend(c,b),angular.extend(c,a),angular.forEach(c,function(a,b){"function"==typeof a&&(c[b]=h(c[b]))}),c},this.getLocaleConfig=function(a){if(!a.lang||a.useNgLocale){var b=function(a){var b,c;b=[];for(c in a)b[c]=a[c];return b},d=c.DATETIME_FORMATS;return{monthNames:b(d.MONTH),monthNamesShort:b(d.SHORTMONTH),dayNames:b(d.DAY),dayNamesShort:b(d.SHORTDAY)}}return{}}}]).directive("uiCalendar",["uiCalendarConfig",function(a){return{restrict:"A",scope:{eventSources:"=ngModel",calendarWatchEvent:"&"},controller:"uiCalendarCtrl",link:function(b,c,d,e){function f(){var c,f=d.uiCalendar?b.$parent.$eval(d.uiCalendar):{};c=e.getFullCalendarConfig(f,a);var g=e.getLocaleConfig(c);angular.extend(g,c),l={eventSources:h},angular.extend(l,g),l.calendars=null;var i={};for(var j in l)"eventSources"!==j&&(i[j]=l[j]);return JSON.stringify(i)}var g,h=b.eventSources,i=!1,j=e.changeWatcher(h,e.sourcesFingerprint),k=e.changeWatcher(e.allEvents,e.eventsFingerprint),l=null;b.destroy=function(){g&&g.fullCalendar&&g.fullCalendar("destroy"),g=d.calendar?a.calendars[d.calendar]=$(c).html(""):$(c).html("")},b.init=function(){g.fullCalendar(l)},j.onAdded=function(a){g.fullCalendar("addEventSource",a),i=!0},j.onRemoved=function(a){g.fullCalendar("removeEventSource",a),i=!0},k.onAdded=function(a){g.fullCalendar("renderEvent",a)},k.onRemoved=function(a){g.fullCalendar("removeEvents",function(b){return b._id===a._id})},k.onChanged=function(a){a._start=$.fullCalendar.moment(a.start),a._end=$.fullCalendar.moment(a.end),g.fullCalendar("updateEvent",a)},j.subscribe(b),k.subscribe(b,function(){return i===!0?(i=!1,!1):void 0}),b.$watch(f,function(){b.destroy(),b.init()})}}}]),angular.module("angularfullcalendarApp").directive("draggable",function(){return{restrict:"A",link:function(a,b){b.draggable({helper:"clone",appendTo:"body"})}}});