(function(module){
	
	'use strict';
	
    var powerMonitor = require('power-monitor');
     
    powerMonitor.on('suspend', function () {
        console.log('The system is going to sleep');
    });
    
    powerMonitor.on('resume', function () {
        console.log('The system is resumed from sleep');
    });
    
    powerMonitor.on('on-ac', function () {
        console.log('The machine is plugged in');
    });
    
    powerMonitor.on('on-battery', function () {
        console.log('The machine is running on battery power, yo!');
    });
	
}(module.exports));