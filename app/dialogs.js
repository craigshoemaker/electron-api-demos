/* global $ */

var remote = require('remote');
var dialog = remote.require('dialog');
var fs = require('fs');

var $result = $('#result');

$('#open-file-button').click(function () {

	var options = {
		title: 'Open Markdown Files',
		properties: ['openFile'],
		filters: [{ name: 'Markdown', extensions: ['md'] }]
	};
	
	var callback = function (filePaths) {
		if (typeof filePaths === 'undefined') {
			console.log('No file paths selected');
		} else {
			var filePath = filePaths[0];
			fs.readFile(filePath, 'utf8', function (err, contents) {
				$result.text(contents);
			});
		}
	};

	dialog.showOpenDialog(options, callback);
});

$('#open-directory-button').click(function () {
	$result.html('');
	
	var dialogOptions = {
		properties: ['openDirectory', 'multiSelections']
	};

	var callback = function (directoryPaths) {
		if (typeof directoryPaths !== 'undefined') {
			directoryPaths.forEach(function (directoryPath, index) {
				$result.append('<li>' + directoryPath);
			});
		}
	};

	dialog.showOpenDialog(dialogOptions, callback);
});

$('#create-directory-button').click(function () {
	$result.html('');
	
	var dialogOptions = {
		properties: ['createDirectory']
	};

	var callback = function (directoryPath) {
		$result.append('<li>' + directoryPath);
	};
	
	dialog.showOpenDialog(dialogOptions, callback);
});

$('#save-file-button').click(function () {
	$result.html('');

	var options = {
		title: 'Save Markdown File',
		filters: [{ name: 'Markdown', extensions: ['md', 'markdown'] }]
	};

	var content = 'This is a test';
	
	var callback = function (filePath) {

		if (typeof filePath !== 'undefined') {

			fs.writeFile(filePath, content, 'utf8', function (err) {
				if (err) {
					console.log(err);
				} else {
					$result.text(filePath + ' saved');
				}
			});
		}
	};

	dialog.showSaveDialog(options, callback);
});

$('#error-button').click(function () {
	dialog.showErrorBox('Big error', 'This is a test of the emergency broadcast system.\n\nThis is a second line.');
});

$('#message-box-button').click(function () {

	var options = {
		'type': 'none',
		buttons: ['Button: Index 0', 'Button: Index 1'],
		title: 'Custom Message Box',
		message: 'Which button do you want to select?',
		detail: 'Choose wisely!',
		filters: [{ name: 'Markdown', extensions: ['md', 'markdown'] }]
	};
	
	var callback = function (buttonIndex) {
		$result.text('Button index: ' + buttonIndex);
	};

	dialog.showMessageBox(options, callback);

});