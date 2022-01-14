//The Trip
//https://open.kattis.com/problems/trip

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let arr = [];

rl.on('line', (line) => {
	arr.push(...line.split(/\r?\n/).map((e) => parseFloat(e)));
}).on('close', () => {

	while (true) {
		let n = arr.shift();
		if(n == 0){
			break;
		}

		let sum = 0;
		let temp = 0;;
		let tempArr = [];
		for (let i = 0; i < n; i++) {
			temp = arr.shift();
			tempArr.push(temp);
			sum += temp;
		}

		let avg = parseFloat((sum/n).toFixed(2));
		let larger = 0;
		let smaller = 0;

		for (let i = 0; i < tempArr.length; i++) {
			if(tempArr[i] > avg){
				larger += tempArr[i] - avg;
			}else{
				smaller += avg - tempArr[i];
			}
		}
		larger > smaller
			? console.log('$' + smaller.toFixed(2))
			: console.log('$' + larger.toFixed(2));
	}
});
