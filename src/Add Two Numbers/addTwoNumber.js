//Add Two Numbers
//https://open.kattis.com/problems/addtwonumbers

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let arr = [];

rl.on('line', (line) => {
	arr.push(...line.split(' ').map((e) => parseInt(e)));
}).on('close', () => {
	let sum = arr[0] + arr[1];
	console.log(sum);
});
