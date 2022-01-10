//Building Pyramids
//https://open.kattis.com/problems/pyramids

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let num = 0;

rl.on('line', (line) => {
	num = parseInt(line);
}).on('close', () => {
	let count = 1;
	while (true) {
		//sum of square of odd numbers formula = (count*((4*count**2) - 1))/3
		if (num < (count*((4*count**2) - 1))/3 ) {
			console.log(count-1);
			break;
		} else if (num == (count*((4*count**2) - 1))/3) {
			console.log(count);
			break;
		} else {
			count++;
		}
	}
});