var system = require('system'), 
	webPage = require('webpage').create();// Require the library: webpage

if(system.args.length < 1) {
	console.log('Usage: loadwebpage.js <some URL>');
	phantom.exit();// Stop PhantomJS
}

var url = system.args[1];// Get the URL From the input arguments

var start = Date.now();// Get the starttime sinds 1970
webPage.viewPort = {width: 480, height: 800};
webPage.clipRect = {
	top: 0,
	left: 0,
	width: 480,
	height: 800
}
webPage.open(url, function(result) {
	if(result !== 'success') {
		console.log('Failed to load the webpage: ' + url);
	} else {
		var end =  Date.now();
		var diff = end - start;
		
		console.log('Time to load the webpage: ' + url + ' -> ' + diff + 'ms');
		
		var title = webPage.evaluate(function() {
			return document.title;
		});
		
		console.log('Title of the webpage: ' + title + '.');
		
		var fileName = end + '.png';
		
		webPage.render(fileName);
		
	}
	phantom.exit();// Stop PhantomJS
});