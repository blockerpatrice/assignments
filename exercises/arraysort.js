//notes
let myArry = leastToGreatest = [1, 3, 5, 2, 90, 20];

myArry.sort((a,b) => a-b);
console.log(myArry);

let myArry1 = leastToGreatest = [1, 3, 5, 2, 90, 20];

myArry1.sort((a,b) => b-a);
console.log(myArry1);

let charArry = ["dog", "wolf", "by", "family", "eaten"];
charArry.sort(function(a,b){
    return a.length - b.length;
});
console.log(charArry);


let alphaArry = ["dog", "wolf", "by", "family", "eaten"];

function alpha(arr){
    const sortArr = arr.sort((a,b) => {
        return a > b;
    });
    return sortArr;
}

console.log(alpha(alphaArry));
  
const byAge = [
      {
          name: "Quiet Samurai",
          age: 22
      },
      {
          name: "Arrogant Ambassador",
          age: 100
      },
      {
          name: "Misunderstood Observer",
          age: 2
      },
      {
          name: "Unlucky Swami",
          age: 77
      }
    ];


byAge.sort(function(a,b){
    return a.age - b.age;
});

console.log(byAge);