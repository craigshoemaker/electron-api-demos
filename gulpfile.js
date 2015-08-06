var gulp = require('gulp');
var shell = require('shelljs');

gulp.task('install', function(){
	shell.cd('app');
	shell.exec('npm install');
	shell.exec('bower install');
});