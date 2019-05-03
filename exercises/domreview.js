// Dom Manipulation --> Making a form 

// Creating elements
// document.getElementById('container').innerHTML = '<h1 id="title">Hello World</h1>'

let container = document.getElementById('container')
let h1 = document.createElement('h1')
h1.innerText = 'Hello World'
h1.setAttribute('id', 'title')
container.appendChild(h1)


// Changing info
document.getElementById('title').addEventListener('dblclick', function(){
    this.style.color = 'blue'
})
const nodeHoppers = document.getElementsByClassName('hopper')
const hoppers = [...document.getElementsByClassName('hopper')]
// console.log(nodeHoppers)
// console.log(hoppers)
hoppers.forEach(hop => {
    hop.addEventListener('click', function(){
            this.style.color = 'green'
        })
})

const arr1 = ['wolf', 'hound', 'bear']
const arr2 = ['lion', 'cat', 'moose']

const newArr = [...arr1, ...arr2]

function grabElements (arr, ...anything){
    const newArr = [...arr, ...anything]
    // console.log(newArr)
}

grabElements(arr1, 'pup', 'jaguarundi', 'squirrel')

let str = 'hello there'
console.log([...str])
// console.log(newArr)

