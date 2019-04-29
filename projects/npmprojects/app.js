const readlineSync = require("readline-sync");

// const states = ['California', 'Oregon', 'Wyoming', 'Hawaii', 'Delware', 'New Jersey'];
// console.log(readlineSync);
// let index = readlineSync.keyInYN(states,"Which state should we sell to Canada");
// // console.log(states[index]);

// let gameOver = false;
// while(!gameOver){
//     let index = readlineSync.keyInSelect(states, "Which state should we sell to Florida");

// }


function add(x,y){
    console.log("The result is " + x+y);
}

function multiply(x,y){
    console.log("The result is " + x*y);
}
function divide(x,y){
    console.log("The result is " + x/y);
}
function subtract(x,y){
    console.log("The result is " + x-y);
}

function prompt(){
    let num1 = readlineSync.questionInt("Enter number one ");
    let num2 = readlineSync.questionInt("Enter number two ");
    let choice = readlineSync.questionInt("Which operation? Choose 1 for add, 2 for subtract, 3 for divide, 4 for multiply");

    if (choice === 1){
        add(num1,num2);
    } else if (choice === 2){
        subtract(num1,num2);
    } else if (choice === 3){
        divide(num1,num2);
    } else if (choice === 4){
        multiply(num1,num2);
    }
}

prompt();