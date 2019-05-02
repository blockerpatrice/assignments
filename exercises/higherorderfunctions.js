//higher order functions

function greaterThan(number){
    return function(m){
        return (m > number) ? true : false
    }
 }

let greaterThan10 = greaterThan(10)
let greaterThan50 = greaterThan(50)

//console.log(greaterThan50(60))

//reduce higher order functions, primarily used in data science
//first argument:accumulator, second argument:current value, third argument:index, fourth argument:source array

