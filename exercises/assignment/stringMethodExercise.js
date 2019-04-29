function toUpperCase(str){
    console.log(str.toUpperCase() + str.toLowerCase());
}
function halfNumber(str){
    console.log(Math.floor(str/2));
}
function sliceFunc(str){
    let i = str.length/2;
    console.log(str.slice(0,i));
}
function capitalLower(str){
    let i = str.length/2;
    console.log(str.slice(0,i).toUpperCase(),str.slice(i,str.length).toLowerCase());
    if(str.length%2 != 0){
        console.log(str.slice(0,i).toLowerCase(),str.slice(i,str.length).toUpperCase());
    }
}


//toUpperCase('byebye');
