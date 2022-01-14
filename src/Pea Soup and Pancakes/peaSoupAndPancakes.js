//Pea Soup and Pancakes
//https://open.kattis.com/problems/peasoup

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let arr = [];
let c1 = 0;
let c2 = 0;
let printed = false;

rl.on('line', (line) => {
	arr.push(...line.split(/\r?\n/));
}).on('close', () => {
	let n = arr.shift();

	for (let i = 0; i < n; i++) {
		let m = arr.shift();
		let shop = arr.shift();

		for (let j = 0; j < m; j++) {
			if (arr[0] == 'pea soup') {
				c1++;
			}else if(arr[0] == 'pancakes'){
				c2++;
			}
			if(c1 == 1 && c2 == 1){
				console.log(shop);
				printed = true;
				break;
			}
			arr.shift();
		}
		c1 = 0;
		c2 = 0;
	}
	if (!printed) {
		console.log('Anywhere is fine I guess');
	}
});
