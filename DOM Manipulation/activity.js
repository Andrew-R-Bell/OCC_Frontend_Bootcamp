const form = document.getElementById("activityForm");
const numInput = document.getElementById("anumber")
const numError = document.getElementById("anumError");

form.addEventListener("submit", handleSubmit);

// Form sumission event handler
function handleSubmit(event){
     event.preventDefault();   //Prevents form from Submitting
     
    //  Validating form inputs
    const isValid=validateForm();

    if (isValid) {
        console.log("Form Submitted Successfully");
        form.reset();
        numError.textContent="";
        }

}

// Form Input Validation
function validateForm() {
    const numValue=numInput.value.trim();
    let isValid = true;

    if (numValue===""){
        numError.textContent="Number is required";
        isValid=false;
       
    }    
    else {
        if (numValue % 2 == 0) {
            const answer="Even" 
            document.getElementById('aresult').textContent=answer;
        }
        else{
            const answer="Odd"
            document.getElementById('aresult').textContent=answer;
        }
      numError.textContent="";
    }
    
    return isValid;
}
