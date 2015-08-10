var remote = require('remote');
var app = remote.require('app');

var $result = $('#result');

$('#app-info-button').click(function () {

	var appMethods = [
		'getVersion',
		'getName',
		'getAppPath'
	];

	var $table = $('<table>');
	var $row;

	$table.addClass('table table-striped');

	$row = $('<tr>');
	$row.append('<th>API</th><th>Result</th>');
	$table.append($row);

	appMethods.forEach(function (method) {
		$row = $('<tr>');
		$row.append('<td>' + method + '</td><td>' + app[method]() + '</td>');
		$table.append($row);
	});

	var pathArgs = [
		'home',
		'appData',
		'userData',
		'cache',
		'userCache',
		'temp',
		'userDesktop',
		'exe',
		'module'
	];

	pathArgs.forEach(function (arg) {
		$row = $('<tr>');
		$row.append('<td>getPath(\'' + arg + '\')</td><td>' + app.getPath(arg) + '</td>');
		$table.append($row);
	});

	$result.html('');
	$result.append($table);

});

$('#close-button').click(function () {
	var quit = confirm('Are you sure you want to close this application?');
	if (quit) {
		app.quit();
	}
});