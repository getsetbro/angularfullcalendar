'use strict';

/**
 * @ngdoc overview
 * @name angularfullcalendarApp
 * @description
 * # angularfullcalendarApp
 *
 * Main module of the application.
 */
angular.module('angularfullcalendarApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ui.calendar'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/myroute', {
        templateUrl: 'views/myroute.html',
        controller: 'MyrouteCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
