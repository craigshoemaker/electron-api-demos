var remote = require('remote');
var browserWindow = remote.getCurrentWindow();

$('#progress-bar-button').click(function () {
	var progress = 0;
	var timer = setInterval(function () {
		if (progress >= 1) {
			clearInterval(timer);
			browserWindow.setProgressBar(0);
		}

		progress += .025;

		browserWindow.setProgressBar(progress);
	}, 100);
});

$('#always-on-top-button').click(function () {
	browserWindow.setAlwaysOnTop(!browserWindow.isAlwaysOnTop());
});

$('#auto-hide-menu-button').click(function () {
	var isMenuBarAutoHide = browserWindow.isMenuBarAutoHide();

	if (isMenuBarAutoHide) {
		browserWindow.setAutoHideMenuBar(false);
		browserWindow.setMenuBarVisibility(true);
	} else {
		browserWindow.setAutoHideMenuBar(true);
	}
});

$('#full-screen-button').click(function () {
	browserWindow.setFullScreen(!browserWindow.isFullScreen());
});

$('#minimize-button').click(function () {
	browserWindow.minimize();
});