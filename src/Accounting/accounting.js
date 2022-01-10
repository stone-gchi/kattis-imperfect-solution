//Accounting
//https://open.kattis.com/problems/bokforing

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let n;
let q;
let arr = [];

rl.on('line', (line) => {
	arr.push(line.split(' '));
}).on('close', () => {
	n = arr[0][0];
	q = arr[0][1];
	let map = new Map();
	let reset = 0;

	for (let i = 1; i < arr.length; i++) {
		if(arr[i][0] == "SET"){
			map.set(arr[i][1], arr[i][2]);
		}else if(arr[i][0] == "PRINT"){
			if (map.get(arr[i][1]) == undefined){
				console.log(reset);
			}else{
				console.log(map.get(arr[i][1]));
			}
		}else if(arr[i][0] == 'RESTART'){
			reset = arr[i][1];
			map.clear();
		}
	}
});
