//Grading
//https://open.kattis.com/problems/grading

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let arr = [];

rl.on('line', (line) => {
	arr.push(...line.split(' ').map((e) => parseInt(e)));
}).on('close', () => {
	if(arr[5] >= arr[0]){
		console.log("A");
	}else if(arr[5] >= arr[1]){
		console.log("B");
	}else if(arr[5] >= arr[2]){
		console.log("C");
	}else if(arr[5] >= arr[3]){
		console.log("D");
	}else if(arr[5] >= arr[4]){
		console.log("E");
	}else{
		console.log("F");
	}
});
