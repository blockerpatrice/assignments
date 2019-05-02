let itemInForm = document.addItem;
itemInForm.addEventListener("submit",function(e){
    e.preventDefault();
    let item = document.createElement("li"); //create LI node
    let div = document.createElement("div");
    let button = document.createElement("button");
    let edit = document.createTextNode("edit");
    let xbutton = document.createElement("button");
    let x = document.createTextNode("X");
    let input = document.createTextNode(itemInForm.title.value);

    div.appendChild(input);
    item.appendChild(div);
    button.appendChild(edit);
    xbutton.appendChild(x);
    item.appendChild(button);
    item.appendChild(xbutton);

    document.getElementById("list").appendChild(item);

});

let edit = document.getElementById("edit").value;
edit.addEventListener("onclick",function(e){
    console.log("edit");
});

//edit is creating an HTMLCollection, which is similar to an array
