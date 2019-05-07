axios.get("https://api.vschool.io/patriceblocker/todo").then((response)=>{
    displayTodo(response.data);
})

function displayTodo(todos){
    todos.forEach(todo =>{
        let parentDiv = document.createElement("div");
        let titleH2 = document.createElement("h2");
        titleH2.innerText = todo.title;
        parentDiv.appendChild(titleH2);
        document.getElementById("divContainer").appendChild(parentDiv); 
        todo.completed ? titleH2.style.textDecoration = "line-through" : null;
        
    })
}

//post takes in 2 arguments