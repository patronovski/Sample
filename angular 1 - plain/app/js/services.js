/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var myApp = angular.module('services', []);

myApp.service('MyService', function ($q, $timeout) {

    // Method 1
    this.save = function (success) {
        var deferred = $q.defer();

        $timeout(function () {
            if (success) {
                deferred.resolve({message: "This is great!"});
            } else {
                deferred.reject({message: "Really bad"});
            }
        }, 2000);

        return deferred.promise;
    }

    // Method 2
    this.method2 = function () {
        //..
    }
});