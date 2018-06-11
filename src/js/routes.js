'use strict';

angular.module('transfeera-front')
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('default',{
            url: '',
            abstract: true,
            views: {
                'navigationMenu': {
                    templateUrl: 'templates/defaults/_navigationMenu.html',
                    controller: 'MasterCtrl'
                },
                'sideBarMenu':{
                    templateUrl: 'templates/defaults/_sideBarMenu.html',
                    controller: 'MasterCtrl'
                }
            }
        })      
        .state('default.states', {
            url: '/states',
            views: {
                'container@': {
                    templateUrl: 'templates/states/index.html',
                    controller: 'StatesCtrl'
                }
            }
        })      
        .state('default.cities', {
            url: '/cities',
            views: {
                'container@': {
                    templateUrl: 'templates/cities/index.html',
                    controller: 'CitiesCtrl'
                }
            }
        })  
        .state('default.ceps', {
            url: '/ceps',
            views: {
                'container@': {
                    templateUrl: 'templates/ceps/index.html',
                    controller: 'CepsCtrl'
                }
            }
        })      
});
