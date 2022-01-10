//Damaged Equation
//https://open.kattis.com/problems/damagedequation
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arr =[];

rl.on('line', (line) => {
    arr.push(...line.split(" ").map(e=>parseInt(e)));
}).on('close', () => {
    let a = arr[0];
    let b = arr[1];
    let c = arr[2];
    let d = arr[3];
    let isPrinted = false;

    let operators = {
        "*": function(a,b){return a*b},
        "+": function(a,b){return a+b},
        "-": function(a,b){return a-b},
        "/": function(a,b){return a/b}
    };

    for (let i = 0 ; i < 4 ; i++){
        let op1;
        switch(i){
            case 0:
                op1 = "*";
                break;
            case 1:
                op1 = "+";
                break;
            case 2:
                op1 = "-";
                break;
            case 3:
                op1 = "/";
                break;
        }
        for (let j = 0 ; j < 4 ; j++){
            let op2;
            switch(j){
                case 0:
                    op2 = "*";
                    break;
                case 1:
                    op2 = "+";
                    break;
                case 2:
                    op2 = "-";
                    break;
                case 3:
                    op2 = "/";
                    break;
            }
            if(Math.trunc(operators[op1](a,b)) == Math.trunc(operators[op2](c,d))){
                console.log(`${a} ${op1} ${b} = ${c} ${op2} ${d}`);
                isPrinted = true;
            }
            
        }
    }
    !isPrinted?console.log(`problems ahead`):{}
});