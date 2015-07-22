document.write('The current version is ' + process.version);

var fs = require('fs');
var path = require('path');

var fullPath = path.resolve(__dirname, '../package.json');

var pkg = fs.readFileSync(fullPath, 'utf8');
alert(pkg);