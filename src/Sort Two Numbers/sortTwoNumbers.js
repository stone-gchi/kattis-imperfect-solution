//Sort Two Numbers
//https://open.kattis.com/problems/sorttwonumbers

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let arr = [];

rl.on('line', (line) => {
	arr.push(...line.split(' ').map((e) => parseInt(e)));
}).on('close', () => {
	if(arr[0] > arr[1]){
		console.log(arr[1]);
		console.log(arr[0]);
	}else{
		console.log(arr[0]);
		console.log(arr[1]);
	}
});
