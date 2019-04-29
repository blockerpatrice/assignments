let ownerName = "John";
let age = 101;
const pets = ["cat", "dog"];
const petObjects = [];

function runForLoop() {
    for (let i = 0; i < pets.length; i++) {
        const pet = { type: pets[i] }
        if (pets[i] === "cat") {
            let petName = "fluffy";
        } else {
            let petName = "spot";
        } 
        petObjects.push(pet);
    }
    return petName;
}
//runForLoop()

const carrots = ["bright orange", "ripe", "rotten"]

const mapVegetables = (arr) => {
    return arr.map(function(carrot) {
        return { type: "carrot", name: carrot }
    })
}

//console.log(mapVegetables(carrots));


const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

const filterForFriendly = (arr) => {
    return arr.filter(function(person) {
        return person.friendly;
    })
}


const doMathSum = (a, b) => {
    return a + b;
}

const produceProduct = (a, b) => {
    return a * b;
}

const printString = (firstName, lastName, age) =>{
    return (`Hi ${firstName} ${lastName} how does it feel to be ${age}`);
}

console.log(printString("Patrice", "Blocker",25));

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 function filterForDogs(arr) {
     return arr.filter(animal => {
         if (animal.type === "dog") {
             return true
         } else {
             return false
         }
     })
 }
 