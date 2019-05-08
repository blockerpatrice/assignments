let todoList = [];

axios.get("https://api.vschool.io/patriceblocker/todo/").then((response)=>{
    displayTodo(response.data);
})

function displayTodo(todos){
    todos.forEach(todo =>{
        let parentDiv = document.createElement("div");
        let titleH3 = document.createElement("h3");
        let description = document.createElement("p");
        let price = document.createElement("p");
        let images = document.createElement("img");
        let checkbox = document.createElement("input");
        //label for checkbox
        let label = document.createElement("label"); 

        //set values equal to todo.info from api
        titleH3.innerText = todo.title;
        description.innerText = todo.description;
        price.innerText = todo.price;

        //checkbox
        checkbox.setAttribute("type","checkbox");

        checkbox.addEventListener("click", function(){
            axios.put(`https://api.vschool.io/patriceblocker/todo/${todo._id}`, {completed: !todo.completed});
            
            titleH3.style.textDecoration = "line-though";   
            todo.completed ? titleH3.style.textDecoration = "line-through" : null;
            
        })
    

        //if there is an image attached
        todo.imgUrl ? images.setAttribute("src",todo.imgUrl) : null;
        images.style.height = "100px";

        parentDiv.appendChild(titleH3);

        todo.description ? titleH3.appendChild(description) : null; 

        todo.price ? titleH3.appendChild(price) : null;

        titleH3.appendChild(images);
        
        label.appendChild(document.createTextNode("Is this task completed?"));
        parentDiv.appendChild(label);
        parentDiv.appendChild(checkbox);

        document.getElementById("divContainer").appendChild(parentDiv); 
        todo.completed ? titleH3.style.textDecoration = "line-through" : null;
        
        
        
    })
}

let input = document.taskinput;

input.addEventListener("submit",function(e){
    e.preventDefault();

    let title = taskinput.title.value;
    let price = taskinput.price.value;
    let description = taskinput.description.value;
    let imgUrl = taskinput.img.value;

    console.log(title);

    const newObject = {
        title,
        price,
        description,
        imgUrl
    }
   
    postNewTodo(newObject);
})

function postNewTodo(newTodo){
    axios.post("https://api.vschool.io/patriceblocker/todo/",newTodo).then((response)=>{
        //todoList.push(response.data);
        displayTodo([response.data]);
    })
}



//post takes in 2 arguments