'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('controllers', []);


myApp.controller('CustomersCtrl', function ($scope, $http, MyService) {

    $scope.customers = [];
    $scope.selectedItems = [];


    function getEmployees() {
        $http.get('data/customers.json').
                success(function (data, status, headers, config) {
                    $scope.customers = data;
                }).
                error(function (data, status, headers, config) {
                    // log error
                });


    }
    getEmployees();

    $scope.add = function () {
        var item = {
            "name": null,
            "city": null,
            "email": null,
            "phone": null
        };
        $scope.customers.push(item);
    };
    $scope.add2 = function (item) {
        var last_element = $scope.customers[$scope.customers.length - 1];
        if (item === last_element) {
            $scope.add();
        }
    };

    $scope.remove = function (item) {
        var index = $scope.customers.indexOf(item);
        $scope.customers.splice(index, 1);
    };



    $scope.test = function (item) {
        console.log("Current selected: " + item.name);
    };

    $scope.save = function (success) {

        $scope.savePromise = MyService.save(success).then(function (data) {
            $scope.deferredTimerResult = "Successfully finished: " + data.message;
            printSummary();

        }, function (data) {
            $scope.deferredTimerResult = "Failed: " + data.message;
        });
    };


    function printSummary() {
        angular.forEach($scope.customers, function (item) {
            console.log(item.name);
        });
        console.log("TOTALL: " + $scope.customers.length);

    }


});

myApp.controller('OrdersCtrl', function ($scope, $http, MyService) {

    $scope.orders = [];
    $scope.selectedItems = [];


    function getCustomers() {
        $http.get('data/orders.json').
                success(function (data, status, headers, config) {
                    $scope.orders = data;
                }).
                error(function (data, status, headers, config) {
                    // log error
                });


    }
    getCustomers();

    $scope.add = function () {
        var item = {
            "selected": false,
            "name": null,
            "city": null,
            "email": null,
            "phone": null
        };
        $scope.orders.push(item);
    };
    $scope.add2 = function (item) {
        var last_element = $scope.orders[$scope.orders.length - 1];
        if (item === last_element) {
            $scope.add();
        }
    };

    $scope.remove = function (item) {
        var index = $scope.orders.indexOf(item);
        $scope.orders.splice(index, 1);
    };



    $scope.test = function (item) {
        console.log("Current selected: " + item.name);
    };

    $scope.save = function (success) {

        $scope.savePromise = MyService.save(success).then(function (data) {
            $scope.deferredTimerResult = "Successfully finished: " + data.message;
            printSummary();

        }, function (data) {
            $scope.deferredTimerResult = "Failed: " + data.message;
        });
    };


    function printSummary() {
        angular.forEach($scope.orders, function (item) {
            console.log(item.name);
        });
        console.log("TOTALL: " + $scope.orders.length);

    }


});

myApp.controller('MailboxCtrl', function ($scope, $http, MyService) {

    $scope.emails = [];
    $scope.selectedItems = [];

    function getEmails() {
        $http.get('data/emails.json').
                success(function (data, status, headers, config) {
                    $scope.emails = data;
                }).
                error(function (data, status, headers, config) {
                    // log error
                });


    }
    getEmails();

    $scope.add = function () {
        var item = {
            "selected": false,
            "name": null,
            "message": null,
            "time": null,
        };
        $scope.emails.push(item);
    };

    $scope.add2 = function (item) {
        var last_element = $scope.emails[$scope.emails.length - 1];
        if (item === last_element) {
            $scope.add();
        }
    };

    $scope.remove = function (item) {
        var index = $scope.emails.indexOf(item);
        $scope.emails.splice(index, 1);
    };



    $scope.test = function (item) {
        if (item.selected) {
            console.log("Current selected: " + item.name);
        }
    };

    $scope.selectAll = function () {
        if ($scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
        angular.forEach($scope.emails, function (item) {
            item.selected = $scope.selectedAll;
        });
    };

    $scope.save = function (success) {

        $scope.savePromise = MyService.save(success).then(function (data) {
            $scope.deferredTimerResult = "Successfully finished: " + data.message;
            printSummary();

        }, function (data) {
            $scope.deferredTimerResult = "Failed: " + data.message;
        });
    };


    function printSummary() {
        angular.forEach($scope.selectedItems, function (item) {
            console.log("Selected: " + item.name);
        });
        console.log("TOTALL SELECTED: " + $scope.selectedItems.length);

    }


});