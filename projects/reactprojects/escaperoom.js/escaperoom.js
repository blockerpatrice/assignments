const readlineSync = require("readline-sync");

let choice = readlineSync.questionInt("Enter 1 for hand in hole, 2 for find key or 3 for open door ");

    while(choice === 3){
        console.log("You need the key to open the door");
        choice = 0;
        choice = readlineSync.questionInt("Enter 1 for hand in hole, 2 for find key or 3 for open door ");
    }
    if(choice === 1){
        console.log("You died");
    } 
    else if (choice === 2){
        console.log("You can now open the door");
    }
