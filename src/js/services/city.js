'use strict';

angular.module('transfeera-front.services')
    .factory('CityService', function(HttpActions, AppConfig) {
        var url = "api/cities";

        function index () {
            return HttpActions(url, null, "GET");
        }

        function create (data) {
            return HttpActions(url, data, "POST");
        }

        function update (data) {
            return HttpActions(url + '/' + data.id, data, "PUT");
        }

        function destroy (data) {
            return HttpActions(url + '/' + data, null, "DELETE");
        }

        return {
            index: index,
            create: create,
            update: update,
            destroy: destroy
        }
    });
