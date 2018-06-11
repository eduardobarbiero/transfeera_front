'use strict';

angular.module('transfeera-front')
.controller('CitiesCtrl', function ($scope, $filter, StateService, CityService, ngDialog, ConfirmationDialog, SuccessDialog, Notification) {

    $scope.cities = [];
    $scope.city = {};
    $scope.states = [];
    $scope.ngDialog = ngDialog;

    $scope.index = function () {
        CityService.index().then(function (result) {
            $scope.cities = result;
        });
    },
    
    $scope.new = function () {        
        $scope.city = {};        
        StateService.index().then(function (result) {
            $scope.states = result;
            ngDialog.open({
                template: 'templates/cities/_form.html',
                className: 'ngdialog-theme-plain',
                scope: $scope
            });
        });
    },

    $scope.edit = function (city) {
        $scope.city = Object.assign({}, city);
        StateService.index().then(function (result) {
            $scope.states = result;
            ngDialog.open({
                template: 'templates/cities/_form.html',
                className: 'ngdialog-theme-plain',
                scope: $scope
            });
        });
    },

    $scope.remove = function (city) {        
        ConfirmationDialog("Deseja realmente deletar essa cidade?").then(function (result) {
            if (result) {                
                CityService.destroy(city.id).then(function (result) {
                    CityService.index().then(function (result2) {
                        $scope.cities = result2;
                        Notification.success({ message: "Cidade removida com sucesso!", delay: 1000, replaceMessage: true });
                    });
                                        
                });                
            }
        });
    },

    $scope.create = function (city) {
        CityService.create(city).then(function (result) {
            CityService.index().then(function (result) {
                $scope.cities = result;
                Notification.success({ message: "Cidade criada com sucesso!", delay: 1000, replaceMessage: true });
                ngDialog.close();
            });
        });
    },

    $scope.update = function (city) {
        CityService.update(city).then(function (result) {
            CityService.index().then(function (result) {
                $scope.cities = result;
                Notification.success({ message: "Cidade atualizada com sucesso!", delay: 1000, replaceMessage: true });
                ngDialog.close();
            });
        });
    },

    $scope.init = function () {
      $scope.index();      
    };

});
