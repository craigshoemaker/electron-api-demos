(function(module){
	
	'use strict';
	
	var shell = require('shell');
	var path = require('path');
	var fs = require('fs');
	
	var $result = $('#result');
	var $showInFolderButton = $('#show-in-folder-button');
	var $openItemButton = $('#open-item-button');
	var $openExternalButton = $('#open-external-button');
	var $moveToTrashButton = $('#move-to-trash-button');
	var $beepButton = $('#beep-button');
	
	$showInFolderButton.click(function(){
		var fullPath = path.resolve(__dirname, 'package.json');
		shell.showItemInFolder(fullPath);
	});
	
	$openItemButton.click(function(){
		shell.openItem(path.resolve(__dirname, './package.json'));
	});
	
	$openExternalButton.click(function(){
		shell.openExternal('http://craigshoemaker.net/about')
	});
	
	$moveToTrashButton.click(function(){
		$result.html('');
		var fullPath = path.resolve(__dirname, 'electron-temp.txt');
		fs.writeFile(fullPath, 'this is trash', 'utf8', function(){
			$result.append('<li>File is created');
			shell.moveItemToTrash(fullPath);
			$result.append('<li>File is moved to recycle bin');			
		});
	});
	
	$beepButton.click(function(){
		shell.beep();
	});
	
}(module.exports));