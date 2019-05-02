let vals = [1,2,3];
let sum = vals.reduce((acc,val) => acc + val);
console.log(sum); // 6

function stringConcat(arr) {
    let newString = arr.reduce((acc,val) => acc + val.toString());
    return newString;
}
console.log(stringConcat([1,2,3])); // "123"

function totalVotes(arr) {
    let counter = 0;
    let numOfVoters = arr.reduce((acc,arr) => {
       if(arr.voted === true){
           counter++;
       }
 },0);
 return counter;
}
 
const voters = [
     {name:'Bob' , age: 30, voted: true},
     {name:'Jake' , age: 32, voted: true},
     {name:'Kate' , age: 25, voted: false},
     {name:'Sam' , age: 20, voted: false},
     {name:'Phil' , age: 21, voted: true},
     {name:'Ed' , age:55, voted:true},
     {name:'Tami' , age: 54, voted:true},
     {name: 'Mary', age: 31, voted: false},
     {name: 'Becky', age: 43, voted: false},
     {name: 'Joey', age: 41, voted: true},
     {name: 'Jeff', age: 30, voted: true},
     {name: 'Zack', age: 19, voted: false}
 ];
 console.log(totalVotes(voters)); // 7

 function shoppingSpree(arr) {
    let counter = 0;
    let sum = arr.reduce((acc,val) => acc + val.price,counter);
    return sum;
 }
 
 var wishlist = [
     { title: "Tesla Model S", price: 90000 },
     { title: "4 carat diamond ring", price: 45000 },
     { title: "Fancy hacky Sack", price: 5 },
     { title: "Gold fidgit spinner", price: 2000 },
     { title: "A second Tesla Model S", price: 90000 }
 ];
 
 console.log(shoppingSpree(wishlist)); // 227005


function flatten(arr) {
    let flattened = arr.reduce((acc,val) => acc.concat(val));
    return flattened;
}
 var arrays = [
     ["1", "2", "3"],
     [true],
     [4, 5, 6]
 ];
 
 //console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

const voters2 = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];


function totalVotes(arr) {
    let counter = 0;
    let numOfVoters = arr.reduce((acc,arr) => {
       if(arr.voted === true){
           counter++;
       }
 },0);
 return counter;
}
 
function voterResults(arr) {
   const result = [];

   let counter25 = 0;
   let voterCounter25 = 0;
   let counter35 = 0;
   let voterCounter35 = 0;
   let counter55 = 0;
   let voterCounter55 = 0;

   let voters = arr.reduce((acc,arr) => {
    if(arr.age <=25 && arr.age >=18){
        counter25++;
        if(arr.voted === true){
            voterCounter25++;
        }
    }else if(arr.age >=26 && arr.age <=35){
        counter35++;
        if(arr.voted === true){
            voterCounter35++;
        }
    }else if(arr.age >=36 && arr.age <= 55){
        counter55++;
        if(arr.voted === true){
            voterCounter55++;
        }
    }
   },0);
   return (`young amount: ${counter25} \nyoung votes: ${voterCounter25} \nmiddle amount: ${counter35} \nmiddle votes: ${voterCounter35} \nold amount: ${counter55} \nold votes: ${voterCounter55}`);
}

console.log(voterResults(voters2)); // Returned value shown below:
/*
{ youngVotes: 1,
  youth: 4,
  midVotes: 3,
  mids: 4,
  oldVotes: 3,
  olds: 4 
}
*/