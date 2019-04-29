function ifStatementOlympics(){
    5>3? console.log ("is greater than"): console.log("nothing");
    "cat" === 3? console.log("is the length"): console.log("nothing");
    "cat" === "dog" ? console.log("cat is equal to dog"): console.log("not the same");
 }
 
 var person = {
     name: "Bobby",
     age: 12
   }
 
   
 function printObject(){
     if(person.name[0] === 'B'){
         console.log("You're allowed into the movie");
     }
     if(person.name[0] === 'B' && person.age === 18){
         console.log("You're allowed into the movie");
     }
    // console.log(person.name + " is allowed to go to the movie");
 }
 
 
 function silverMedal(){
     if ( 1 === 1){
         console.log("Strict one");
     }
     else if (1 == 1){
         console.log("Loose one");
     }
     else
         console.log("not equal at all");
 
 
     if (1 < 2 || 1 === 2 && 2 === 4){
         console.log("yes");
     }
 }
 
 function goldMedal(){
 
     typeof "dog" === "string" ? console.log("this is a string"): console.log("this is not a string");
     typeof "true" === "boolean" ? console.log("this is a boolean"): console.log("this isn't a boolean");
     "i" === null ? console.log("undefined"): console.log("defined");
     "s" > 12 ? console.log("s greater than 12"): console.log("s less than 12");   
     "i" % 2 === 0 ? console.log ("number is even"): console.log("number is odd");
 }
 
 
 
 function evenOdd(){
     for(let i=0;i<=100;i++){
         if (i%2 === 0){
             console.log("Even");
         }
         else{
             console.log("Odd");
         }
     }
 }
 
function one(){
    for(let i=0;i<=9;i++){
        console.log(i);
    }
}

function two(){
    for(let i=9;i>=0;i--){
        console.log(i);
    }
}
function three(){
    const fruit = ["banana", "orange", "apple", "kiwi"];
    for(let i=0;i<fruit.length;i++){
        console.log(fruit[i]);
    }
}

function bronzeOne(){
    const myArr=[];
    for(let i=0;i<=9;i++){
        myArr.push(i);
    } 
    console.log(myArr);
}

function bronzeTwo(){
    for(let i=0;i<100;i++){
        console.log(i++);
    }
}

function bronzeThree(){
    const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
    const newFruit =[];

    for(let i=0;i<=5;i++){
        newFruit.push(fruit[i++]);
    }

    console.log(newFruit);

}


function silver(){

    const peopleArray = [
        {
          name: "Harrison Ford",
          occupation: "Actor"
        },
        {
          name: "Justin Bieber",
          occupation: "Singer"
        },
        {
          name: "Vladimir Putin",
          occupation: "Politician"
        },
        {
          name: "Oprah",
          occupation: "Entertainer"
        }
      ]
      for(let i=0;i<peopleArray.length;i++){
          console.log(peopleArray[i].name);
      }
      
      const pushedArray = [];
      const pushedOccupations = [];

      for(let i=0;i<peopleArray.length;i++){
        pushedArray.push(peopleArray[i].name);
      }
      for(let i=0;i < peopleArray.length; i++){
        pushedOccupations.push(peopleArray[i].occupation);    
      }

      const arrayHarrisonFord = [];
      const arraySinger= [];

      for(i=0;i<peopleArray.length;i++){
          if(peopleArray[i].name === "Harrison Ford"){
              arrayHarrisonFord.push(peopleArray[i].name);
          }
          if(peopleArray[i].occupation === "Singer"){
              arraySinger.push(peopleArray[i].occupation);
          }
      }

      
}

/*For this function I found on stack overflow to make it into a string*/ 
function goldOne(){
    const gold = [];
    for(let i=0; i<3; i++){
        gold[i] = [];
        for(let x=0; x<3; x++){
            gold[i][x] = 0;
        }  
    }
    console.log(gold);
}

function goldTwo(){
    const gold =[];
    for(let i=0;i<3;i++){
        gold[i] = [];
        for(let j=0;j<3;j++){
            gold[i].push(i);
            
        }
    }
    console.log(gold);
}

function goldThree(){
    const gold = [];
    for(let i=0; i<3; i++){
        gold[i] = [];
        for(let x=0; x<3; x++){
            gold[i].push(x);
        }
    }
    console.log(gold);
}

function goldFour(){
    const gridNum = [[0, 1, 2], 
    [0, 1, 2], 
    [0, 1, 2]];

    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(typeof gridNum[i][j]== 'number'){
                gridNum[i][j]='x';
            }
        }
    }
    console.log(gridNum);
}

//bronzeThree();
//silverTwo();
//silver();
goldTwo();