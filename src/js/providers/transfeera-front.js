angular.module('transfeera-front-component', []);

angular.module('transfeera-front-component')
  .provider('ConfirmationDialog', function () {
    this.$get = ["ngDialog", function (ngDialog) {

      var nested_confirmation = function (message) {
        return ngDialog.openConfirm({
          template: 'templates/modals/_confirmModal.html',
          className: 'ngdialog-theme-plain',
          data: { message: message }
        });
      }

      return nested_confirmation;

    }];
  })

  .provider('SuccessDialog', function () {
    this.$get = ["ngDialog", function (ngDialog) {

      var nested_confirmation = function (message, title) {
        return ngDialog.open({
          template: 'templates/modals/_successModal.html',
          className: 'ngdialog-theme-plain',
          data: { message: message, title: title }
        });
      }

      return nested_confirmation;

    }];
  })  
  .provider('HttpActions', function () {
    this.$get = ["$http", "$q", "$httpParamSerializerJQLike", "AppConfig", "ERRORS", "Notification", "$location", function ($http, $q, $httpParamSerializerJQLike, AppConfig, ERRORS, Notification, $location) {
      var http_action = function (url, params, method) {        
        return $http({
          url: AppConfig.api_url + url,
          method: method,
          data: params,
          paramSerializer: '$httpParamSerializerJQLike',
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(successCallback, errorCallback);
      };

      function successCallback(response) {
        return response.data;
      }

      function errorCallback(error) {
        callback_verify(error);
      }

      function callback_verify(error) {
        console.log(error);
        
        if (error.status == 499) {
          if (error.data.errors.length)
            Notification.error({ message: generate_message(ERRORS[6].descricao, error.data.errors), delay: 1000, replaceMessage: true });
        } else {
          for (var i = 0; i < Object.keys(ERRORS).length; i++) {
            if (ERRORS[i].codigo == error.status) {
              Notification.error({ message: generate_message(ERRORS[i].descricao, ERRORS[i].causasProvaveis), delay: 1000, replaceMessage: true });
              return;
            }
          }
          Notification.error({ message: generate_message(ERRORS.default.descricao, ERRORS.default.causasProvaveis), delay: 1000, replaceMessage: true });
        }
      }

      function generate_message(title, content) {
        var html = '<h5 style="color: #FFF">' + title + '</h5>';
        html += '<div class="message" ng-bind-html="message"></div>';
        html += '<div class="message">';
        html += '    <ul>';
        if (content.length > 1) {
          angular.forEach(content, function (value) {
            html += '<li>' + value + '</li>';
          });
        } else {
          html += '<li>' + content + '</li>';
        }
        html += '    </ul>';
        html += '</div>';
        html += '<div class="message">';
        html += '</div>';
        return html;
      };

      return http_action;
    }];
  });
