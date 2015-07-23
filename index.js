var app = require('app');
var mainWindow;

app.on('ready', function () {

    mainWindow = require('./index.browser-window.js').get();

    require('./index.global-shortcut.js').register(mainWindow);

    require('./index.power-monitor.js');

});