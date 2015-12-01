var system = require('system'), 
	webPage = require('webpage').create();// Require the library: webpage

if(system.args.length < 1) {
	console.log('Usage: loadwebpage.js <some URL> <some filename prefix>');
	phantom.exit();// Stop PhantomJS
}

var url = system.args[1], fileNamePrefix = system.args[2];
var breakpoints = [320, 480, 640, 800, 960, 1024, 1280], i = 0;

function createScreenshotNexResolution(bp) {
	var start = Date.now();
	webPage = require('webpage').create();
	webPage.viewportSize = {width: bp, height: 800};
	webPage.clipRect = {
		top: 0,
		left: 0,
		width: bp,
		height: 800
	}	
	webPage.open(url, function(result) {
		if(result !== 'success') {
			console.log('Failed to load the webpage: ' + url);
		} else {
			var end =  Date.now();
			var diff = end - start;
			
			console.log('Time to load the webpage: ' + url + ' -> ' + diff + 'ms');
			
			var fileName = fileNamePrefix + '_' + end + '_' + bp +' .png';
			webPage.render(fileName);
			
		}
		
		if(i + 1 < breakpoints.length) {
			i++;
			createScreenshotNexResolution(breakpoints[i]);
		} else {
			phantom.exit();
		}
	});
}

createScreenshotNexResolution(breakpoints[0]);