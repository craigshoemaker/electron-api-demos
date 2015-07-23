(function(module){
	
	'use strict';
    
	var BrowserWindow = require('browser-window');

	module = new BrowserWindow({
        width: 1000,
        height: 800
    });
    
    module.loadUrl('file://' + __dirname + '/app/index.html');
	
}(module.exports));