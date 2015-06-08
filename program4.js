var fs = require('fs');

var contents = fs.readFile(process.argv[2].toString(), function (err, data){
	array = data.toString().split("\n")
	console.log(array.length - 1)
});