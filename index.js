var app = require('app');
var BrowserWindow = require('browser-window');

var mainWindow;

app.on('ready', function(){
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 800
    });
    
    mainWindow.loadUrl('file://' + __dirname + '/app/index.html');
});