//Which is Greater?
//https://open.kattis.com/problems/whichisgreater

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arr = [];

rl.on('line', (line) => {
    arr.push(...line.split(" ").map((e) => parseInt(e)));
}).on('close', () => {
    if(arr[0] > arr[1]){
        console.log(1);
    }else{
        console.log(0);
    }
});