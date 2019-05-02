function collectAnimals(...animals) {  
    for(let i=0;i<animals.length;i++){
        console.log(animals[i]);
    }
}
//collectAnimals("dog", "cat", "mouse", "jackolope", "platypus","ant"); 

let fruit = { fruit: "apple", 
              sweets: "cake",
              vegetables: "carrot",
            }

function combineFruit(x){
    console.log(x);
}
//combineFruit(fruit);           


let location, duration;
[location, duration] = ["Burly Idaho", "2 weeks"];
  
function parseSentence(){
    console.log(`We're going to have a good time in ${location} for ${duration}`);
}
//parseSentence();

function returnFirst(items){
  let firstItem;
  [firstItem] = [items[0]];
  return firstItem;
}

let [firstFav, secondFav, thirdFav, fourthFav, fifthFav] = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(){
    console.log(`My top three favorite activities are, ${firstFav} , ${secondFav} and ${thirdFav}`);
}

//returnFavorites();

function combineAnimals(...animals) {  
    const array = [];
    for(let i=0;i<animals.length; i++){
        array.push(animals[i]);
    }
    console.log(array);
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

// combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals); 

const numbers = [a,b,c,d,e];
function product(a, b, c, d, e) {  

    return numbers.reduce(function(acc, number) {
      return acc * number;
    }
}
const myFunc = produc => {

}