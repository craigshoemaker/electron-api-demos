(function (module) {

	'use strict';
	
	/*
	 *
	 * A lightweight wrapper around the native dialog API
	 * in order to make a more explicit, promise-based API.
	 * 
	 */

	var Q = require('q');
	var _ = require('lodash');
	var fs = require('fs');

	var remote = require('remote');
	var dialog = remote.require('dialog');

	module.openFile = function (options) {
		var deferred = Q.defer();

		var dialogOptions = {
			properties: ['openFile']
		};
		
		if(!_.isUndefined(options)){
			dialogOptions = _.defaults(dialogOptions, options);
		}

		var callback = function (filePaths) {
			if (_.isUndefined(filePaths)) {
				deferred.reject()
			} else {
				var filePath = filePaths[0];
				fs.readFile(filePath, 'utf8', function (err, contents) {
					if (err) deferred.reject(err);
					deferred.resolve(contents);
				});
			}
		};

		dialog.showOpenDialog(dialogOptions, callback);

		return deferred.promise;
	};

	module.openDirectory = function (options) {
		var deferred = Q.defer();

		var dialogOptions = {
			properties: ['openDirectory', 'multiSelections']
		};
		
		if(!_.isUndefined(options)){
			dialogOptions = _.defaults(dialogOptions, options);
		}

		var callback = function (directoryPaths) {
			directoryPaths = (_.isUndefined(directoryPaths)) ? [] : directoryPaths;
			deferred.resolve(directoryPaths);
		};

		dialog.showOpenDialog(dialogOptions, callback);

		return deferred.promise;
	};
	
	module.createDirectory = function(options){
		var deferred = Q.defer();

		var dialogOptions = {
			properties: ['createDirectory']
		};
		
		if(!_.isUndefined(options)){
			dialogOptions = _.defaults(dialogOptions, options);
		}

		var callback = function (directoryPath) {
			deferred.resolve(directoryPath);
		};

		dialog.showOpenDialog(dialogOptions, callback);

		return deferred.promise;
	};
	
	module.saveFile = function(content, options, defaultExtension){
		var deferred = Q.defer();

		var dialogOptions = {};
		
		if(!_.isUndefined(options)){
			dialogOptions = _.defaults(dialogOptions, options);
		}

		var callback = function (filePath) {
			if(!_.isUndefined(defaultExtension)){
				filePath = (_.endsWith(filePath, defaultExtension))? filePath : filePath + '.' + defaultExtension;
			}
			fs.writeFile(filePath, content, 'utf8', function(err){
				if(err){
					deferred.reject(err);
				} else {
					deferred.resolve(filePath);
				}			
			});
		};

		dialog.showSaveDialog(dialogOptions, callback);

		return deferred.promise;
	};
	
	module.messageBox = function(options){
		var deferred = Q.defer();

		var dialogOptions = {};
		
		if(!_.isUndefined(options)){
			dialogOptions = _.defaults(dialogOptions, options);
		}

		var callback = function (buttonIndex) {
			deferred.resolve(buttonIndex);
		};

		dialog.showMessageBox(dialogOptions, callback);

		return deferred.promise;
	};
	
	module.error = function(title, content){
		dialog.showErrorBox(title, content);
	};

} (module.exports));