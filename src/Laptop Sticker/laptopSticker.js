//Laptop Sticker
//https://open.kattis.com/problems/laptopsticker

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let arr = [];

rl.on('line', (line) => {
	arr.push(...line.split(' ').map((e) => parseInt(e)));
}).on('close', () => {
	if(arr[0] >= arr[2]+2 && arr[1] >= arr[3]+2){
		console.log("1");
	}else{
		console.log("0");
	}
});

