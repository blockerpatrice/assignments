function twoNum(num1, num2){
    console.log(num1+num2);
}

function threeNums(num1, num2, num3){
    let placeHolder = 0;
    if(num1 > num2){
        if(num1 > num3){
            console.log(num1);
        }
    } else if(num2>num1){
        if(num2>num3){
            console.log(num2);
        }
    }
    else if(num3>num1){
        if(num3>num2){
            console.log(num3);
        }
    }
   
}

function evenOdd(num){
    if(num%2 == 0){
        console.log("Even");
    }else{
        console.log("Odd");
    }
}

function stringTwenty(str){
    if(str.length <= 20){
        console.log(str.concat(str));
    }else if (str.length > 20){
        let i = str.length/2;
        console.log(str.slice(0,i))
    }
}

function fibonacci(n){

    let j = 1, k = 0, temp;
    let sum = 0;
    while(n > 0){
        temp = j;
        j = j + k;
        k = temp;
        n --;
        sum += k;
        console.log(k);
    }
    console.log(sum);

}


//fibonacci(6);
//threeNums(4,6,3);
//stringTwenty('hellohelooejeehbeehehehhehehehe');
