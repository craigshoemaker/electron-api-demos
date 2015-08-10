var app = require('app');
var mainWindow;

console.log('**** This is running in the main process. ***');

app.on('ready', function () {

    mainWindow = require('./browser-window.js');

    require('./menu.js').register(mainWindow);
    require('./global-shortcut.js').register(mainWindow);
    require('./power-monitor.js').register(mainWindow);

    mainWindow.on('closed', function () {
        mainWindow = null;
    });

});