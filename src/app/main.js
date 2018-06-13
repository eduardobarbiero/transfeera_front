window.jQuery = window.$ = require("jquery");
require('core-js/es6/promise');
require('components/configs/jquery-extends');
	
require.ensure([], () => {
	require('./app');
});