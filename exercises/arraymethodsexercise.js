function arrayMethodExercise(){
    var fruit = ["banana", "apple", "orange", "watermelon"];
    var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
    
    vegetables.pop();
    fruit.shift();
    let a = fruit.indexOf("orange");
    fruit.push(a);
    let veggieLength = vegetables.length;
    vegetables.push(veggieLength);
    const food = fruit.concat(vegetables);

    food.splice(4,2);
    food.reverse();
    

    console.log(food.toString());
   
}

arrayMethodExercise();