//Echo Echo Echo
//https://open.kattis.com/problems/echoechoecho

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let word;

rl.on('line', (line) => {
	word = line;
}).on('close', () => {
	for (let i = 0; i < 3; i++) {
		console.log(word);
	}
});
