//Parking
//https://open.kattis.com/problems/parking

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let arr = [];

rl.on('line', (line) => {
	arr.push(...line.split(' ').map((e) => parseInt(e)));
}).on('close', () => {
	let a = arr.shift();
	let b = arr.shift();
	let c = arr.shift();
	let count = new Array(101).fill(0);
	for (let i = 0; i < 3; i++) {
		let c1 = arr.shift();
		let c2 = arr.shift();
		for (let j = c1; j < c2; j++) {
			count[j] += 1;
		}
	}

	let sum = 0;
	for (let i = 0; i < count.length; i++) {
		if(count[i] == 1){
			sum += a;
		}else if(count[i] == 2){
			sum += b*2;
		}else if(count[i] == 3){
			sum += c*3;
		} 
	}
	console.log(sum);
});
