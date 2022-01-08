//Odd Echo
//https://open.kattis.com/problems/oddecho

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let arr = [];

rl.on('line', (line) => {
	arr.push(...line.split(' '));
}).on('close', () => {
	for (let i = 0; i < arr.length; i++) {
		if(i%2 == 1){
			console.log(arr[i]);
		}
	}
});
