var shell = require('shell');
var path = require('path');
var fs = require('fs');

var $result = $('#result');

$('#show-in-folder-button').click(function () {
	var fullPath = path.resolve(__dirname, 'package.json');
	shell.showItemInFolder(fullPath);
});

$('#open-item-button').click(function () {
	shell.openItem(path.resolve(__dirname, './package.json'));
});

$('[data-about-link]').click(function () {
	shell.openExternal('http://craigshoemaker.net/about')
});

$('#move-to-trash-button').click(function () {
	$result.html('');
	var fullPath = path.resolve(__dirname, 'electron-temp.txt');
	fs.writeFile(fullPath, 'this is trash', 'utf8', function () {
		$result.append('<li>File is created');
		shell.moveItemToTrash(fullPath);
		$result.append('<li>File is moved to recycle bin');
	});
});

$('#beep-button').click(function () {
	shell.beep();
});