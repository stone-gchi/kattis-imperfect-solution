//Magic Trick
//https://open.kattis.com/problems/magictrick

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arr = [];
let printed = false;

rl.on('line', (line) => {
    arr.push(...line.split(""));
}).on('close', () => {
	const set = new Set();
	for (let i = 0; i < arr.length; i++) {
		if(!set.has(arr[i])){
			set.add(arr[i]);
		}else{
			printed = true;
			break;
		}
	}
	(printed)?console.log(0):console.log(1);
});