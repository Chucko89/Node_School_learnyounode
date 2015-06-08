var fs = require('fs');
var path = require('path');

 var directory = process.argv[2]
 var fileEx = process.argv[3]

 fs.readdir(directory, function(err, list){

 		list.forEach(function(file){
 			if (path.extname(file) === "." + fileEx) {
 				console.log(file);
 			}
 		});
 });