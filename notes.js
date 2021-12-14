const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question("Do you want to create a file (y/n)? ", (answer) => {
	if (answer == 'y') {
		rl.question("Enter some content to write in the file created : ", (answer) => {
			fs.writeFile('mynewfile.txt', answer, function (err) {
				if (err) throw err;
				console.log('Saved!');
			});

			rl.close();
		});
	} else {
		rl.close();
	}
});