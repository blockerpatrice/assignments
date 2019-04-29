let form = document.myForm;

form.addEventListener("submit",function(e){
   
        e.preventDefault();
        let firstname = form.firstname.value;
        let lastname = form.lastname.value;
        let age = form.age.value;
        let gender = form.gender.value;

        const location1 = [];
        const location = form.location;

        for(let i=0;i<location.length; i++){
            if(location[i].checked){
                location1.push(location[i].value);
            }
        }      

        const diet1 = [];
        const diet = form.diet;

        for(let i=0; i<diet.length; i++){
            if(diet[i].checked){
                diet1.push(diet[i].value);
            }
        }
        let diet = form.diet.value;
        //this is getting users name    console.log("hello");

        window.alert(firstname + "\n" + lastname + "\n" + age + "\n" + gender+ "\n" +location1 +"\n" + diet1);
    
});



