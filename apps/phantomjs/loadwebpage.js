var system = require('system'), 
	webPage = require('webpage').create();// Require the library: webpage

if(system.args.length < 1) {
	console.log('Usage: loadwebpage.js <some URL>');
	phantom.exit();// Stop PhantomJS
}

var url = system.args[1];// Get the URL From the input arguments

var start = Date.now();// Get the starttime sinds 1970
webPage.open(url, function(result) {
	if(result !== 'success') {
		console.log('Failed to load the webpage: ' + url);
	} else {
		var end =  Date.now();
		var diff = end - start;
		
		console.log('Time to load the webpage: ' + url + ' -> ' + diff + 'ms');
	}
	phantom.exit();// Stop PhantomJS
});