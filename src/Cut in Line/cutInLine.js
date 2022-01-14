//Cut in Line
//https://open.kattis.com/problems/cutinline

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let arr = [];

rl.on('line', (line) => {
	arr.push(line.split(' '));
}).on('close', () => {

	let n = parseInt(arr[0]);
	let o = [];
	for (let i = 0; i < n; i++) {
		o.push(...arr[i+1]);
	}

	for (let i = n+2; i < arr.length; i++) {
		let action = arr[i][0];
		let target = arr[i][2];
		let pk = arr[i][1];
		if(action == "cut"){
			o.splice(o.indexOf(target),0,pk);
		}else if(action == "leave"){
			target = arr[i][1];
			o.splice(o.indexOf(target), 1)
		}
	}
	o.forEach(e => {
		console.log(e);
	});
});
