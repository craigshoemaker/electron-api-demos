(function(module){
	
	'use strict';
	
	var Q = require('q');
	var _ = require('lodash');
	var remote = require('remote');
	var dialog = remote.require('dialog');
	
	module.showOpenFile = function(){
		var deferred = Q.defer();

		
		dialog.showOpenDialog({
			properties: [ 'openFile' ], 
			filters: [
   				{ name: 'text', extensions: ['txt'] }
		   ]
	   },
	   
	   
	   function(filePaths){
			if(_.isUndefined(filePaths)) {
				deferred.reject()
			};
			deferred.resolve();
		});
		return deferred.promise;
	};
	
}(module.exports));