(function () {

    'use strict';

    var app = require('app');
    var mainWindow;

    console.log('**** This is running in the main process. ***');

    app.on('ready', function () {

        mainWindow = require('./index.browser-window.js').get();

        require('./index.global-shortcut.js').register(mainWindow);
        require('./index.power-monitor.js');

    });
    
    mainWindow.on('closed', function () {
        mainWindow = null;
    });

} ());