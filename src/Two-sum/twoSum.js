//Two-sum
//https://open.kattis.com/problems/twosum

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.on('line', (line) => {
	nums = line.split(" ")
	console.log(parseInt(nums[0])+parseInt(nums[1]));
});
