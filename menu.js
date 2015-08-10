var remote = require('remote');
var Menu = remote.require('menu');

var browserWindow = null;

module.exports.register = function(windowInstance){
  browserWindow = windowInstance;
};

var template = [
  {
    label: 'Electron',
    submenu: [
      {
        label: 'About Electron',
        //selector: 'orderFrontStandardAboutPanel:'
      },
      {
        type: 'separator'
      },
      {
        label: 'Services',
        submenu: []
      },
      {
        type: 'separator'
      },
      {
        label: 'Hide Electron',
        accelerator: 'CmdOrCtrl+H',
        //selector: 'hide:'
      },
      {
        label: 'Hide Others',
        accelerator: 'CmdOrCtrl+Shift+H',
        //selector: 'hideOtherApplications:'
      },
      {
        label: 'Show All',
        //selector: 'unhideAllApplications:'
      },
      {
        type: 'separator'
      },
      {
        label: 'Quit',
        accelerator: 'CmdOrCtrl+Q',
        //selector: 'terminate:'
      },
    ]
  },
  {
    label: 'Edit',
    submenu: [
      {
        label: 'Undo',
        accelerator: 'CmdOrCtrl+Z',
        //selector: 'undo:'
      },
      {
        label: 'Redo',
        accelerator: 'Shift+CmdOrCtrl+Z',
        selector: 'redo:'
      },
      {
        type: 'separator'
      },
      {
        label: 'Cut',
        accelerator: 'CmdOrCtrl+X',
        selector: 'cut:'
      },
      {
        label: 'Copy',
        accelerator: 'CmdOrCtrl+C',
        //selector: 'copy:'
      },
      {
        label: 'Paste',
        accelerator: 'CmdOrCtrl+V',
        //selector: 'paste:'
      },
      {
        label: 'Select All',
        accelerator: 'CmdOrCtrl+A',
        //selector: 'selectAll:'
      }
    ]
  },
  {
    label: 'View',
    submenu: [
      {
        label: 'Reload',
        accelerator: 'CmdOrCtrl+R',
        click: function () { browserWindow.getCurrentWindow().reload(); }
      },
      {
        label: 'Toggle DevTools',
        accelerator: 'CmdOrCtrl+Shift+I',
        click: function () { browserWindow.getCurrentWindow().toggleDevTools(); }
      },
    ]
  },
  {
    label: 'Window',
    submenu: [
      {
        label: 'Minimize',
        accelerator: 'CmdOrCtrl+M',
        //selector: 'performMiniaturize:'
      },
      {
        label: 'Close',
        accelerator: 'CmdOrCtrl+W',
        //selector: 'performClose:'
      },
      {
        type: 'separator'
      },
      {
        label: 'Bring All to Front',
        //selector: 'arrangeInFront:'
      }
    ]
  },
  {
    label: 'Help',
    submenu: []
  }
];

var menu = Menu.buildFromTemplate(template);

Menu.setApplicationMenu(menu);