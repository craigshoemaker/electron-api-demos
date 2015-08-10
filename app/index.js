/* global $ */
/// <reference path="../typings/node/node.d.ts"/>
(function (window, document, module) {

	'use strict';
	
	var ipc = require('ipc');
	
	console.log('*** This is running in the renderer process. ***');

	window.$ = window.jQuery = require.main.require('./jquery.min.js');
		
	require('./menu.js');
	require('./menu-context.js');

	$(function () {
		require('./shell.js');
		require('./dialogs.js');
		require('./browser-window.js');
		require('./app.js');
		require('./screen.js');
	});
	
	ipc.on('power', function(e){
		console.log(e.message);
	});

} (window, document, module.exports));