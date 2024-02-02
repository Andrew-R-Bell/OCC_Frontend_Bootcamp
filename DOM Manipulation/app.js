const form=document.getElementById("myForm");
const namInput = document.getElementById("name")
const emailInput = document.getElementById("email");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");

form.addEventListener("submit", handleSubmit);

// Form sumission event handler
function handleSubmit(event){
     event.preventDefault();   //Prevents form from Submitting
     
    //  Validating form inputs
    const isValid=validateForm();

    if (isValid) {
        console.log("Form Submitted Successfully");
        form.reset();
        nameError.textContent="";
        emailError,textContent="";
    }

}

// Form Input Validation
function validateForm() {
    const nameValue=namInput.value.trim();
    const emailValue=emailInput.value.trim();
    let isValid = true;

    if (nameValue===""){
        nameError.textContent="Name is required";
        isValid=false;
    }    
    else{
        nameError.textContent="";
    }
    
    if (emailValue===""){
        emailError.textContent="Email is required";
        isValid=false;
    } else{
        emailError.textContent="";
    }

    return isValid;
}
