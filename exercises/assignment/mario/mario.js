let cal = document.mario;

cal.addEventListener("submit", function(e){
    e.preventDefault();
    let goomba = parseInt(cal.number.value);
    let bom = parseInt(cal.number1.value);
    let cheep = parseInt(cal.number2.value);
    let sum = (goomba * 5) + (bom * 7) +  (cheep * 11);
    document.getElementById("answer").innerHTML = ("Total is " + sum);
});

