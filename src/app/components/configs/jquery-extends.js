function _ajax_request(url, data, callback, type, method) {
	if (jQuery.isFunction(data)) {
		callback = data;
		data = {};
    }
        
	return jQuery.ajax({
		type: method,
		url: url,
		data: data,
		success: callback,
		dataType: type
	});
}

jQuery.extend({
	get: function (url, data, callback, type) {
		return _ajax_request(url, data, callback, type, 'GET');
	},
	post: function (url, data, callback, type) {
		return _ajax_request(url, data, callback, type, 'POST');
	},
	put: function (url, data, callback, type) {
		return _ajax_request(url, data, callback, type, 'PUT');
	},
	delete: function (url, data, callback, type) {
		return _ajax_request(url, data, callback, type, 'DELETE');
	},
	patch: function (url, data, callback, type) {
		return _ajax_request(url, data, callback, type, 'PATCH');
	}
});