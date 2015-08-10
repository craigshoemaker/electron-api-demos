var globalShortcut = require('global-shortcut');

module.exports.register = function (appWindow) {

	globalShortcut.register('CmdOrCtrl+F12', function () {
		appWindow.show();
	});
};