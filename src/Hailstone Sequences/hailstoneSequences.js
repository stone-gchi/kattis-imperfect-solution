//Hailstone Sequences
//https://open.kattis.com/problems/hailstone2

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let num;
let count = 1;

rl.on('line', (line) => {
	num = parseInt(line);
}).on('close', () => {
	for (let i = 0; i < 1349; i++) {
		if(num == 1){
			console.log(count);
			break;
		}

		if(num%2==0){
			num = num/2;
			count++;
		}else{
			num = (3*num) + 1;
			count++;
		}
	}
});
