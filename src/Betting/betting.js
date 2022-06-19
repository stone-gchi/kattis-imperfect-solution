//Betting
//https://open.kattis.com/problems/betting

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n = 0;

rl.on('line', (line) => {
    n = parseInt(line);
}).on('close', () => {
    a = n;
    b = 100 - n;
    console.log(b/a + 1);
    console.log(a/b + 1);
});