// document.getElementById("click me").addEventListener('click',function(){
//     alert("I was clicked");
//     this.innerText
//     //text inside click me button
// });


document.getElementById("blue").addEventListener("mouseover", function(){
   this.style.backgroundColor = "blue";
  
});

document.getElementById("blue").addEventListener("mousedown", function(){
    this.style.backgroundColor = "red";
});

document.getElementById("blue").addEventListener("mouseout", function(){
    this.style.backgroundColor = "yellow";
});

document.getElementById("blue").addEventListener("dblclick", function(){
    this.style.backgroundColor = "green";
    
});

window.addEventListener("scroll",function(){
    document.getElementById("blue").style.backgroundColor = "orange";
    
}); 

document.addEventListener("keydown", function(event){
        if(event.which === 80){
            document.getElementById("blue").style.backgroundColor = "pink";
        } else if (event.which === 84){
            document.getElementById("blue").style.backgroundColor = "teal";
        } else if (event.which == 77){
            document.getElementById("blue").style.backgroundColor = "maroon";
        }
});

let form = document.myForm;
form.addEventListener("submit",function(event){
    event.preventDefault();
    let name = form.yourName.value;
    //this is getting users name
    console.log(name);
});


let form = document.words;
form.addEventListener("submit",function(e){

    //parameter e represents an object

    e.preventDefault();
    let noun = form.noun.value;
    let verb = form.verb.value;
    let adjective = form.adjective.value;

    

    /** Anytime you insert javascript in to a string, use ${} */
});


let form = document.myForm; //name of the form
form.addEventListener("submit",/**This is an anonoymous function */function(e){
    e.preventDefault();
    document.getElementById("myName").innerText = form.name.value;

    document.getElementById("myName").innerHTML = `<h1>${form.name.value}</h1>`; //last part is template literal

    //this line is adding text to the h1 tag

    //radio buttons are a node list

    const cars = form.likes; //getting name of likes checkboxes
    const likedCars = [];

    for(let i=0; i<cars.length; i++){
        if(cars[i].checked){
            likedCars.push(cars[i].value);
        }
    }
});

//class names are for grabbing multiple items
//node list
//const listItems = document.getElementsByClassName("myList")


/**
 * This is css
 * 
 * 
 * 
 *@media ((min-width: 500pt), (max-width: 1000pt){
    .box{
        backgroundColor: brown;
    }
}
*/