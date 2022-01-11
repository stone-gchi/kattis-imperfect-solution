//Cinema Crowds 2
//https://open.kattis.com/problems/cinema2

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let arr = [];

rl.on('line', (line) => {
	arr.push(...line.split(' ').map((e) => parseInt(e)));
}).on('close', () => {

	let n = arr.shift();
	let m = arr.shift();
	let o = 0;
	let r = m;

	for (let i = 0; i < m; i++) {
		if(arr[i] > (n-o) ){
			console.log(r);
			break;
		}else{
			o += arr[i];
			r--;
		}
	}
});
