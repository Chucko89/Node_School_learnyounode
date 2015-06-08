var arguments = process.argv;

var x = 0;

for (i = 2; i< arguments.length; i++) {
	x += Number(arguments[i]);
};

console.log(x)