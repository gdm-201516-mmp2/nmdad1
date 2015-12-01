var system = require('system');

if(system.args.length < 2) {
	console.log('Usage: Hello Input Application: helloinput.js <some Hello> <some integer>');
	phantom.exit();
}

var helloTxt = system.args[1], helloAmount = system.args[2];

for(var i = 0; i < parseInt(helloAmount);i++) {
	console.log(helloTxt + ' say it ' + i + ' time(s) :)');
}

phantom.exit();