// Control Flow Structures

//Conditional Statement - Allows you to execute different block of codes based on a condition

// Conditionals - if statement
let age = 18;

if(age >= 18){
    console.log("You are eleible to vote.");
  } else{
    console.log("You are not eligible to vote.");
  }

// if-else if-else statement(multiple conditions)
let temperature = 25
if ( temperature < 0) {
    console.log("It's freezing!");
} else if (temperature >= 0 && temperature < 20 ) {
    console.log("It's cool outside.");
} else {
    console.log("It's a warm day.");
}

// Conditionals - switch statement
let day = 'Monday';
switch (day) {
    case 'Monday':
        console.log("Start of the Week!");
        break;
    case 'Friday':
        console.log("It's the end of the Week!");
        break;
    default:  
        console.log("It's a regular day!");
        break; 
}
