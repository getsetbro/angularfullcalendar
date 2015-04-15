'use strict';
/**
 * @ngdoc overview
 * @name angularfullcalendarApp
 * @description
 * # angularfullcalendarApp
 *
 * Main module of the application.
 */
var app = angular.module('angularfullcalendarApp', ['ngCookies', 'ngResource', 'ngSanitize', 'ui.bootstrap', 'ui.calendar', 'ui.router']);

app.config(function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.when('', '/')
    //.when('/event/:eventId', '/event/:eventId/details')
    .otherwise('/');
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    }).state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
    }).state('myroute', {
        url: '/myroute',
        templateUrl: 'views/myroute.html',
        controller: 'MyrouteCtrl'
    }).state('myroute.details', {
        url: '/details',
        templateUrl: 'views/myroute1.html'
        //,controller: 'MyrouteCtrl'
    }).state('myroute.sessions', {
        url: '/sessions',
        templateUrl: 'views/myroute2.html'
        //,controller: 'MyrouteCtrl'
    }).state('myroute.planner', {
        url: '/planner',
        templateUrl: 'views/myroute3.html'
        //,controller: 'MyrouteCtrl'
    });
});
