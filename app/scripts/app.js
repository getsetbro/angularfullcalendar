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

app.run(function ($rootScope, $state, $stateParams) {
    // It's very handy to add references to $state and $stateParams to the $rootScope
    // so that you can access them from any scope within your applications.For example,
    // <li ng-class='{ active: $state.includes('contacts.list') }'> will set the <li>
    // to active whenever 'contacts.list' or one of its decendents is active.
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

});

app.config(function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.when('', '/')
    //.when('/event/:eventId', '/event/:eventId/details')
    .otherwise('/');

    $stateProvider
      .state('home', {
          url: '/',
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
      })
      .state('about', {
          url: '/about',
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
      })
      .state('myroute', {
          url: '/myroute',
          templateUrl: 'views/myroute.html',
          controller: 'MyrouteCtrl'
      })
      .state('myroute.sessions', {
          //url: '/sessions',
          templateUrl: 'views/myroute3.html',
          controller: 'MyrouteCtrl3'
      }
    );
});

app.directive('popoverHtmlUnsafePopup', function () {
    return {
      restrict: 'EA',
      replace: true,
      scope: { title: '@', content: '@', placement: '@', animation: '&', isOpen: '&' },
      template: '<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title" ng-bind="title" ng-show="title"></h3><div class="popover-content" bind-html-unsafe="content"></div></div></div>'
    };
  })

  .directive('popoverHtmlUnsafe', [ '$tooltip', function ($tooltip) {
    return $tooltip('popoverHtmlUnsafe', 'popover', 'click');
  }]);
