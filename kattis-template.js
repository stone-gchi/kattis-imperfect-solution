//
//

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arr =[];

rl.on('line', (line) => {
    arr.push(...line.split(/\r?\n/).map((e) => parseInt(e)));
}).on('close', () => {

});