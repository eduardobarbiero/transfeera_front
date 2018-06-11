'use strict';

angular.module('transfeera-front')
.controller('CepsCtrl', function ($scope, $filter, CepService, CityService, ngDialog, ConfirmationDialog, SuccessDialog, Notification) {

    $scope.ceps = [];
    $scope.cep = {};
    $scope.cities = [];
    $scope.ngDialog = ngDialog;

    $scope.index = function () {
        CepService.index().then(function (result) {
            $scope.ceps = result;
        });
    },
    
    $scope.new = function () {        
        $scope.cep = {};        
        CityService.index().then(function (result) {
            $scope.cities = result;
            ngDialog.open({
                template: 'templates/ceps/_form.html',
                className: 'ngdialog-theme-plain',
                scope: $scope
            });
        });
    },

    $scope.edit = function (cep) {
        $scope.cep = Object.assign({}, cep);
        CityService.index().then(function (result) {
            $scope.cities = result;
            ngDialog.open({
                template: 'templates/ceps/_form.html',
                className: 'ngdialog-theme-plain',
                scope: $scope
            });
        });
    },

    $scope.remove = function (cep) {        
        ConfirmationDialog("Deseja realmente deletar esse CEP?").then(function (result) {
            if (result) {                
                CepService.destroy(cep.id).then(function (result) {
                    CepService.index().then(function (result2) {
                        $scope.ceps = result2;
                        Notification.success({ message: "CEP removido com sucesso!", delay: 1000, replaceMessage: true });
                    });
                                        
                });                
            }
        });
    },

    $scope.create = function (cep) {
        CepService.create(cep).then(function (result) {
            CepService.index().then(function (result) {
                $scope.ceps = result;
                Notification.success({ message: "CEP criado com sucesso!", delay: 1000, replaceMessage: true });
                ngDialog.close();
            });
        });
    },

    $scope.update = function (cep) {
        CepService.update(cep).then(function (result) {
            CepService.index().then(function (result) {
                $scope.ceps = result;
                Notification.success({ message: "CEP atualizado com sucesso!", delay: 1000, replaceMessage: true });
                ngDialog.close();
            });
        });
    },

    $scope.init = function () {
      $scope.index();      
    };

});
