/* global $ */
/// <reference path="../typings/node/node.d.ts"/>
(function (window, document, module) {

	'use strict';

	window.$ = window.jQuery = require.main.require('./bower_components/jquery/dist/jquery.js');
		
	require('./index.menu.js');
	require('./index.menu-context.js');

	$(function () {
		require('./index.shell.js');
		require('./index.dialogs.js');
	});

} (window, document, module.exports));