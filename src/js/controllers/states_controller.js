'use strict';

angular.module('transfeera-front')
.controller('StatesCtrl', function ($scope, $filter, StateService, ngDialog, ConfirmationDialog, SuccessDialog, Notification) {

    $scope.states = [];
    $scope.state = {};
    $scope.ngDialog = ngDialog;

    $scope.index = function () {
        StateService.index().then(function (result) {
            $scope.states = result;
        });
    },
    
    $scope.new = function () {        
        $scope.state = {};
        ngDialog.open({
            template: 'templates/states/_form.html',
            className: 'ngdialog-theme-plain',
            scope: $scope
        });
        /*GarrisonService.index().then(function (result) {
            $scope.garrisons = result;
            ngDialog.open({
                template: 'templates/states/_form.html',
                className: 'ngdialog-theme-plain',
                scope: $scope
            });
        });*/
    },

    $scope.edit = function (state) {
        $scope.state = Object.assign({}, state);
        ngDialog.open({
            template: 'templates/states/_form.html',
            className: 'ngdialog-theme-plain',
            scope: $scope
        });
    },    

    $scope.remove = function (state) {        
        ConfirmationDialog("Deseja realmente deletar esse estado?").then(function (result) {
            if (result) {                
                StateService.destroy(state.id).then(function (result) {
                    StateService.index().then(function (result2) {
                        $scope.states = result2;
                        Notification.success({ message: "Estado removido com sucesso!", delay: 1000, replaceMessage: true });
                    });
                                        
                });                
            }
        });
    },

    $scope.create = function (state) {
        StateService.create(state).then(function (result) {
            StateService.index().then(function (result) {
                $scope.states = result;
                Notification.success({ message: "Estado criado com sucesso!", delay: 1000, replaceMessage: true });
                ngDialog.close();
            });
        });
    },

    $scope.update = function (state) {
        StateService.update(state).then(function (result) {
            StateService.index().then(function (result) {
                $scope.states = result;
                Notification.success({ message: "Estado atualizado com sucesso!", delay: 1000, replaceMessage: true });
                ngDialog.close();
            });
        });
    },

    $scope.init = function () {
      $scope.index();      
    };

});
