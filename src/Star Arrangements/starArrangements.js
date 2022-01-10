//Star Arrangements
//https://open.kattis.com/problems/stararrangements

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let num;

rl.on('line', (line) => {
    num = parseInt(line);
}).on('close', () => {
    console.log(`${num}:`);
    for (let i = 2 ; i < num ; i++){
        let a = i;
        let b = i-1;
        if(num%(a+b) == 0){
            console.log(`${a},${b}`);
        }if(num%(a+b) - a == 0){
            console.log(`${a},${b}`);
        }if(num%a == 0){
            console.log(`${a},${a}`);
        }
    }
});