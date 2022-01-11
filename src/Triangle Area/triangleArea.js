//Triangle Area
//https://open.kattis.com/problems/triarea

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let arr = [];

rl.on('line', (line) => {
	arr.push(...line.split(' ').map((e) => parseInt(e)));
}).on('close', () => {
	let h = arr[0];
	let b = arr[1];
	console.log(h*b/2);
});
