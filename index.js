var app = require('app');
var mainWindow;

app.on('ready', function () {
    
    require('./index.power-monitor.js');

    mainWindow = require('./index.main-window.js');

});