const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function (){
    if(xhr.readyState === 4 && xhr.status === 200){
        const jsonData = xhr.responseText;
        const data = JSON.parse(jsonData); //this line changes the JSON object to a Javascript object
        const pokeList = data.objects[0].pokemon;
        console.log(pokeList);

        for(let i=0; i <pokeList.length; i++){
            let div = document.createElement("div");
            div.innerText = pokeList[i].name;
            let pListHTML = document.getElementById("name");
            pListHTML.appendChild(div);
        }
    }
}

xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send();