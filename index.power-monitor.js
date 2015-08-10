var appWindow = null;
var webContents = null;

var powerMonitor = require('power-monitor');

powerMonitor.on('suspend', function () {
    webContents.send('power', {
        message: 'The system is going to sleep'
    });
});

powerMonitor.on('resume', function () {
    webContents.send('power', {
        message: 'The system is resumed from sleep'
    });
});

powerMonitor.on('on-ac', function () {
    webContents.send('power', {
        message: 'The machine is plugged in'
    });
});

powerMonitor.on('on-battery', function () {
    webContents.send('power', {
        message: 'The machine is running on battery power, yo!'
    });
});

module.exports.register = function (appWindowInstance) {
    appWindow = appWindowInstance;
    webContents = appWindow.webContents;
};