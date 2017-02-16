/// <reference path="angular.min.js" />


var app = angular
            .module("myApp", ["ngRoute"])

            .config(function ($routeProvider) {
                $routeProvider
                    .when("/first", {
                        templateUrl: "first.html"
                    })
                    .when("/second", {
                        templateUrl: "second.html"
                    })
                    .when("/third", {
                        templateUrl: "third.html"
                    })
                    .when("/home", {
                        templateUrl: "home.html"
                    })
                     .when("/contact3", {
                        templateUrl: "contact3.html"
                    })
                     .when("/detail3", {
                        templateUrl: "detail3.html"
                    })
            })
            
             

appModule.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);