let blah = document.airlineform;
//querySelector() returns the first Element within the document that matches the specified selector

blah.addEventListener("submit", function(e){
    e.preventDefault();
    let firstName = blah.firstname.value;
    let lastName = blah.lastname.value;
    let age = blah.age.value;
    let gender = blah.gender.value;
    let location = blah.travellocation.value;
    const diet = [];
    if (blah.vegan.checked) {
        diet.push(document.getElementById("vegan").value);
    }
    if (blah.gluten.checked) {
        diet.push(document.getElementById("gluten").value);
        
    }
    if (blah.paleo.checked) {
         diet.push(document.getElementById("paleo").value);
    }

    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
});

