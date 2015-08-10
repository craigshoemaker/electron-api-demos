var appScreen = require('screen');

var $result = $('#result');

$('#screen-info-button').click(function () {

	var members = [
		'id',
		'rotation',
		'scaleFactor',
		'touchSupport'
	];

	var display = appScreen.getPrimaryDisplay();

	var $table = $('<table>');
	$table.addClass('table table-striped');

	var $row;

	$row = $('<tr>');
	$row.append('<th>Member</th><th>Value</th>');
	$table.append($row);

	var addData = function (cell1, cell2) {
		$row = $('<tr>');
		$row.append('<td>' + cell1 + '</td><td>' + cell2 + '</td>');
		$table.append($row);
	};

	members.forEach(function (member) {
		addData(member, display[member]);
	});

	addData('width', display.workAreaSize.width);
	addData('height', display.workAreaSize.height);

	$result.html('');
	$result.append($table);

});