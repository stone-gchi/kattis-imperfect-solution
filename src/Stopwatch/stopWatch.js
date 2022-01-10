//Stopwatch
//https://open.kattis.com/problems/stopwatch

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arr =[];

rl.on('line', (line) => {
    arr.push(...line.split(" ").map(e=>parseInt(e)));
}).on('close', () => {
    let n = arr.shift();

    if(n%2 != 0){
        console.log(`still running`);
    }else{
        let count = 0;
        for (let i = 0 ; i < arr.length ; i = i+2){
            count += arr[i+1] - arr[i];
        }
        console.log(count);
    }
});