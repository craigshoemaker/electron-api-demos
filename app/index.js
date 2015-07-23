/// <reference path="../typings/node/node.d.ts"/>
(function(module){
	
	'use strict';
	var path = require('path');
	var dialogs = require(path.resolve(__dirname, './modules/dialogs'));
	
	dialogs.showOpenFile().then(function(){
		
		console.log('opened');
		
	});
	
}(module.exports));