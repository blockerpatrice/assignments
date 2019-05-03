function doubleNumbers(arr){
    const newArr = arr.map( x => x * 2);
    return newArr;
}
//console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

function stringItUp(arr){
    for(let i=0; i< arr.length; i++){
        const numberToString = arr.map( x => x.toString(arr[i]));
        return numberToString;
    }
}
//console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

function capitalizeNames(arr){
    const caps = arr.map(x => x.charAt(0).toUpperCase() + x.slice(1));
    return caps;
} 
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 


function namesOnly(arr){
    const nameString = arr.map(arr => arr.name);
    return nameString;
  }
  
  console.log(namesOnly([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 


  function makeStrings(arr){
    // const resultArr = [];
    return arr.map(person => {
        if(person.age < 18){
            return person.name + " cant go to the Matrix"
        } else if (arr.age > 18){
            return person.name + " can go to the Matrix"
        }
  });
}
  
  console.log(makeStrings([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 
  // ["Angelina Jolie can go to The Matrix", 
  // "Eric Jones is under age!!", 
  // "Paris Hilton is under age!!", 
  // "Kayne West is under age!!", 
  // "Bob Ziroll can go to The Matrix"]
  
  function readyToPutInTheDOM(arr){
    const resultArr = [];
    const result = arr.map(person => {
        resultArr.push(`<h1>${person.name}</h1><h2>${person.age}</h2`);
    });
    return resultArr;
  }
  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 
  // ["<h1>Angelina Jolie</h1><h2>80</h2>", 
  // "<h1>Eric Jones</h1><h2>2</h2>", 
  // "<h1>Paris Hilton</h1><h2>5</h2>", 
  // "<h1>Kayne West</h1><h2>16</h2>", 
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]