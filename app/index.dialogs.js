/* global $ */

(function (module) {

	'use strict';

	var dialogs = require.main.require('./modules/dialogs');

	var $result = $('#result');
	var $openFileButton = $('#open-file-button');
	var $openDirectoryButton = $('#open-directory-button');
	var $createDirectoryButton = $('#create-directory-button');
	var $saveFileButton = $('#save-file-button');
	var $errorButton = $('#error-button');
	var $messageBox = $('#message-box-button');


	$openFileButton.click(function () {

		var options = {
			title: 'Open Markdown Files',
			filters: [{ name: 'Markdown', extensions: ['md'] }]
		};

		dialogs.openFile(options).then(function (contents) {
			$result.text(contents);
		});
	});

	$openDirectoryButton.click(function () {
		$result.html('');
		dialogs.openDirectory().then(function (directoryPaths) {
			directoryPaths.forEach(function (directoryPath, index) {
				$result.append('<li>' + directoryPath);
			});
		});
	});

	$createDirectoryButton.click(function () {
		dialogs.createDirectory().then(function (directoryPath) {
			$result.append('<li>' + directoryPath);
		});
	});

	$saveFileButton.click(function () {
		var options = {
			title: 'Save Markdown File',
			filters: [{ name: 'Markdown', extensions: ['md', 'markdown'] }]
		};

		var content = 'This is a test';

		dialogs.saveFile(content, options, 'md').then(function (directoryPath) {
			$result.text('File saved');
		});
	});

	$errorButton.click(function () {
		dialogs.error('Big error', 'This is a test of the emergency broadcast system.\n\nThis is a second line.');
	});

	$messageBox.click(function () {

		var options = {
			'type': 'none',
			buttons: ['Button: Index 0', 'Button: Index 1'],
			title: 'Custom Message Box',
			message: 'Which button do you want to select?',
			detail: 'Choose wisely!',
			filters: [{ name: 'Markdown', extensions: ['md', 'markdown'] }]
		};

		dialogs.messageBox(options).then(function (buttonIndex) {
			$result.text('Button index: ' + buttonIndex);
		});
	});

} (module.exports));