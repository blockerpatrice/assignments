function fiveAndGreaterOnly(arr) {
    let filtered = arr.filter(arr => arr > 5);
    return filtered;
}
  // test
console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]

function evensOnly(arr) {
    let evens = arr.filter(arr => arr % 2 === 0);
    return evens;
}
  // test
console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]

function fiveCharactersOrFewerOnly(arr) {
    let chars = arr.filter(arr => arr.length <= 5);
    return chars;
}
  // test
console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); 

function peopleWhoBelongToTheIlluminati(arr){
    let people = arr.filter(arr => arr.member === true);
    return people;
}
  // test
console.log(peopleWhoBelongToTheIlluminati([
      {
          name: "Angelina Jolie",
          member: true
      },
      {
          name: "Eric Jones",
          member: false
      },
      {
          name: "Paris Hilton",
          member: true
      },
      {
          name: "Kayne West",
          member: false
      },
      {
          name: "Bob Ziroll",
          member: true
      }
  ]));

function ofAge(arr){
    let oldEnough = arr.filter(arr => arr.age < 18);
    return oldEnough;
}
  // test
  console.log(ofAge([
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