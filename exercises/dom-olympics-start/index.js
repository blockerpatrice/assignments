
document.getElementById("header").innerHTML = 
"<header id='header'>JavaScript Made This!!</header> \n <span> <h1 id='name'> Patrice Blocker <h1 id='name2'>wrote the Javascript</h1> </span>";


document.getElementById("messageleft").innerHTML = 
"<div id='messageleft'>hello!!</div>";

document.getElementById("messageright").innerHTML =
"<div id='messageright'>Hello!</div>";

document.getElementById("messageleft2").innerHTML =
"<div id='messageleft2'>This is an interesting converstaion</div>";

document.getElementById("messageright2").innerHTML =
"<div id='messageright2'>Yes it is</div>";

document.getElementById("clearbutton").addEventListener("click",myFunction);

function myFunction(){
    document.getElementById("messageleft").innerHTML = 
    "<div id='messsageleft'>'          '</div>";
    document.getElementById("messageright").innerHTML = 
    "<div id='messsageright'>'          '</div>";
    document.getElementById("messageleft2").innerHTML = 
    "<div id='messsageleft2'>'          '</div>";
    document.getElementById("messageright2").innerHTML = 
    "<div id='messsageright2'>'          '</div>";
}

document.getElementById("themedropdown").addEventListener("click",dropdownfunction);

function dropdownfunction(){
   const testing = document.getElementById("messageleft");
   console.log(testing);   
   console.log("he");

}
