(function($, module){
	
	'use strict';
	
	var remote = require('remote');
	var browserWindow = remote.getCurrentWindow();
	
	var $progressBarButton = $('#progress-bar-button');
	var $alwaysOnTopButton = $('#always-on-top-button');
	var $autoHideMenuButton = $('#auto-hide-menu-button');
	var $fullScreenButton = $('#full-screen-button');
	var $minimizeButton = $('#minimize-button');
	
	$progressBarButton.click(function(){
		var progress = 0;
		var timer = setInterval(function(){
			if(progress >= 1){
				clearInterval(timer);
				browserWindow.setProgressBar(0);
			}
			
			progress += .025;
			
			browserWindow.setProgressBar(progress);
		}, 100);
	});
	
	$alwaysOnTopButton.click(function(){
		browserWindow.setAlwaysOnTop(!browserWindow.isAlwaysOnTop());
	});
	
	$autoHideMenuButton.click(function(){
		var isMenuBarAutoHide = browserWindow.isMenuBarAutoHide();
		
		if (isMenuBarAutoHide) {
			browserWindow.setAutoHideMenuBar(false);
			browserWindow.setMenuBarVisibility(true);	
		} else {
			browserWindow.setAutoHideMenuBar(true);			
		}
	});
	
	$fullScreenButton.click(function(){
		browserWindow.setFullScreen(!browserWindow.isFullScreen());
	});
	
	$minimizeButton.click(function(){
		browserWindow.minimize();
	});
	
}($, module.exports));