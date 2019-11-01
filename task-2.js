var figlet = require('figlet');

figlet.text(process.argv[2], function(error, success) {
	console.log(success);
});