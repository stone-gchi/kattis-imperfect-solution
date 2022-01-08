//Forced Choice
//https://open.kattis.com/problems/forcedchoice

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arr =[];

rl.on('line', (line) => {
    arr.push(line.split(" ").map(e=>parseInt(e)));
}).on('close', () => {

    let n = arr[0][0];
    let p = arr[0][1];
    let s = arr[0][2];
    arr.shift();

    for (let i = 0 ; i < s ; i++){
        if(arr[i].slice(1).includes(p)){
            console.log(`KEEP`);
        }else{
            console.log(`REMOVE`);
        }
    }
});