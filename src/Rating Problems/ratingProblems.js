//Rating Problems
//https://open.kattis.com/problems/ratingproblems

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let arr = [];

rl.on('line', (line) => {
	arr.push(...line.split(' ').map((e) => parseInt(e)));
}).on('close', () => {

	let num = arr[0]-arr[1];
	let sum = 0;
	for (let i = 2; i < arr.length; i++) {
		sum += arr[i];
	}
	console.log((sum+(num*-3))/arr[0]);
	console.log((sum+(num*3))/arr[0]);
});
