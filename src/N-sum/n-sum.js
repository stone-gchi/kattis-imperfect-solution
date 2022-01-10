//N-sum
//https://open.kattis.com/problems/nsum

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arr =[];

rl.on('line', (line) => {
    arr.push(...line.split(" ").map(e=>parseInt(e)));
}).on('close', () => {
	let sum = 0;
	for (let i = 1; i < arr.length; i++) {
		sum += arr[i];
	}
	console.log(sum);
});