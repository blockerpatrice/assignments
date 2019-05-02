let cal = document.add;

cal.addEventListener("submit", function(e){
    e.preventDefault();
    let add = parseInt(cal.number1.value);
    let add1 = parseInt(cal.number2.value);
    let sum = add + add1;
    document.getElementById("addAnswer").innerHTML = sum;

});

let cal2 = document.subtract;

cal2.addEventListener("submit", function(e){
     e.preventDefault();
     let sub = parseInt(cal2.number3.value);
     let sub1 = parseInt(cal2.number4.value);
     let sum = sub - sub1;
     document.getElementById("subtractAnswer").innerHTML = sum;
});

let cal3 = document.multiply;

cal3.addEventListener("submit",function(e){
    e.preventDefault();
    let mul = parseInt(cal3.number5.value);
    let mul1 = parseInt(cal3.number6.value);
    let sum = mul * mul1;
    document.getElementById("multiplyAnswer").innerHTML = sum;
});

