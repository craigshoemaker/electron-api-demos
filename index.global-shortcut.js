(function(module){
	
	'use strict';
	
	var globalShortcut = require('global-shortcut');
	
	module.register = function(appWindow){
		
		globalShortcut.register('CmdOrCtrl+F12', function(){
			appWindow.show();
		});
	};
	
}(module.exports));