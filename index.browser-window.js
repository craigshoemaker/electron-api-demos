(function(module){
	
	'use strict';
    
	var BrowserWindow = require('browser-window');

	var appWindow = new BrowserWindow({
        width: 1000,
        height: 800,
        title: 'Electron API Demos'
    });
    
    appWindow.show();
    appWindow.openDevTools();
    
    appWindow.loadUrl('file://' + __dirname + '/app/index.html');
    
    module.get = function(){
        return appWindow;
    };
	
}(module.exports));