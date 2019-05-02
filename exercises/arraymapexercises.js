function doubleNumbers(arr){
    let newArr = arr.map( x => x * 2);
    return newArr;
}
//console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

function stringItUp(arr){
    for(let i=0; i< arr.length; i++){
        let numberToString = arr.map( x => x.toString(arr[i]));
        return numberToString;
    }
}
//console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

function capitalizeNames(arr){
    for(let i=0; i< arr.length; i++){
        let caps = arr.map(x => arr.chartAt(0).toUpperCase());
        return caps;
    }
} 
//console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 


function namesOnly(arr){
    // your code here
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
