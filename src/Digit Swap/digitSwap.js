//Digit Swap
//https://open.kattis.com/problems/digitswap

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let num = 0;

rl.on('line', (line) => {
	num = parseInt(line);
}).on('close', () => {
	let first = (num%10)*10;
	let second = Math.floor(num/10);
	let sum = first+second;
	console.log(sum);
});
