/* global $ */
/// <reference path="../typings/node/node.d.ts"/>
(function (window, document, module) {

	'use strict';
	
	var ipc = require('ipc');
	
	console.log('*** This is running in the renderer process. ***');

	window.$ = window.jQuery = require.main.require('./bower_components/jquery/dist/jquery.js');
		
	require('./index.menu.js');
	require('./index.menu-context.js');

	$(function () {
		require('./index.shell.js');
		require('./index.dialogs.js');
		require('./index.browser-window.js');
		require('./index.app.js');
		require('./index.screen.js');
	});
	
	ipc.on('power', function(e){
		console.log(e.message);
	});

} (window, document, module.exports));