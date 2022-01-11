//Join Strings
//https://open.kattis.com/problems/joinstrings

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let arr = [];

rl.on('line', (line) => {
	arr.push(line.split(' '));
}).on('close', () => {
	let n = parseInt(arr.shift());
	let unfinished = true;

	if(n == 1){
		console.log(...arr[0]);
		unfinished = false;
	}

	while (unfinished) {
		let map1 = new Map();

		for (let i = 0; i < arr.length - n + 1; i++) {
			map1.set(parseInt(i + 1), ...arr[i]);
		}

		for (let i = n; i < arr.length; i++) {
			let sum = map1
				.get(parseInt(arr[i][0]))
				.concat(map1.get(parseInt(arr[i][1])));
			map1.set(parseInt(arr[i][0]), sum);
			if (i == arr.length - 1) {
				console.log(map1.get(parseInt(arr[i][0])));
				unfinished = false;
			}
		}
	}

});
