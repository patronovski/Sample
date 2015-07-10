'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
    'services',
    'factories',
    'directives',
    'controllers',
    'ui.router',
    'angular-loading-bar',
    'ngAnimate',
    'cgBusy',
    'angularUtils.directives.dirPagination',
    'selectionModel',
]);

myApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/home");

    $stateProvider.
            state('home', {
                abstract: true,
                url: '/home',
                templateUrl: '',
            }).
            // Dashboards
            state('profile', {
                url: '/profile',
                templateUrl: 'app/views/profile.html',
                controller: 'CustomersCtrl',
            }).
            // Relaties
            state('customers', {
                url: '/customers',
                templateUrl: 'app/views/customers.html',
                controller: 'CustomersCtrl',
            }).
            // Orders
            state('orders', {
                url: '/orders',
                templateUrl: 'app/views/orders.html',
                controller: 'OrdersCtrl',
            }).
            // Inbox
            state('mailbox', {
                url: '/mailbox',
                templateUrl: 'app/views/mailbox.html',
                controller: 'MailboxCtrl',
            }).
            // Members
            state('members', {
                url: '/members',
                templateUrl: 'app/views/members.html',
                controller: 'OrdersCtrl',
            })



});


myApp.config(function (cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;


});

