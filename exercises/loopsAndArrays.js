function loopsAndArrays(){
    const officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"];
    let count=0;
    for(var i=0;i<officeItems.length;i++){
        if (officeItems[i] === "computer"){
            count++;
        }
    } console.log(count);
}

loopsAndArrays();


const peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

  function loopMadMax(arr){
      for(let i=0;i<arr.length;i++){

        if (arr[i].age >= 18 && arr[i].gender === "female"){
            console.log(arr[i].name + "is old enough. SHE'S good to see Mad Max Fury Road.");
        }
        else if(arr[i].age < 18 && arr[i].gender === "male"){
            console.log(arr[i].name +"is not old enough to see Mad Max Fury Road, don't let HIM in.");
        }
      }
  }

  function toggleButton(){
      const arr = [2,3,2];
      let toggle = 0; //0 represents off
      for(let i=0; i<arr.length; i++){
          
      }
  }

  loopMadMax(peopleWhoWantToSeeMadMaxFuryRoad);