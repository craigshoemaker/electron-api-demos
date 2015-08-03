/* global $ */

(function ($, module) {

	'use strict';

	var dialogs = require.main.require('./modules/dialogs');

	var $result = $('#result');

	$('#open-file-button').click(function () {

		var options = {
			title: 'Open Markdown Files',
			filters: [{ name: 'Markdown', extensions: ['md'] }]
		};

		dialogs.openFile(options).then(function (contents) {
			$result.text(contents);
		});
	});

	$('#open-directory-button').click(function () {
		$result.html('');
		dialogs.openDirectory().then(function (directoryPaths) {
			directoryPaths.forEach(function (directoryPath, index) {
				$result.append('<li>' + directoryPath);
			});
		});
	});

	$('#create-directory-button').click(function () {
		$result.html('');
		dialogs.createDirectory().then(function (directoryPath) {
			$result.append('<li>' + directoryPath);
		});
	});

	$('#save-file-button').click(function () {
		$result.html('');

		var options = {
			title: 'Save Markdown File',
			filters: [{ name: 'Markdown', extensions: ['md', 'markdown'] }]
		};

		var content = 'This is a test';

		dialogs.saveFile(content, options, 'md')
			.then(function (filePath) {
				$result.text(filePath + ' saved');
			})
			.catch(function(error){
				$result.text(error);
			});
	});

	$('#error-button').click(function () {
		dialogs.error('Big error', 'This is a test of the emergency broadcast system.\n\nThis is a second line.');
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

		dialogs.messageBox(options).then(function (buttonIndex) {
			$result.text('Button index: ' + buttonIndex);
		});
	});

} ($, module.exports));