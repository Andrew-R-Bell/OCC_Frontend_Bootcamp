// Functions

function greet() {
    console.log("Welcome to functions");
}

greet();


// Function Declaation can be called before the declaartion
// Hoisting
declaration();

// Function declarations

function declaration() {
    console.log("This is a Function Declaration");
}

declaration();

// Function Expression
// Can't be used before declared
const expression = function() {
    console.log("This is a Function Expression");
}

expression();

// Parameters
function greet(name) {
        console.log("Hello, ", name + " !");
}

greet("Regel");


// Function with Return
function sum(a,b){
    return a+b;
}

let result = sum(7,5);
console.log(result);

// Scope
let globalVar = "I am a global variable";

function localScope(){
    let localVar = "I am a local variable";
    console.log(localVar);
    console.log(globalVar);
}   

localScope();

console.log(globalVar);
// error>  console.log(localVar);

function calculate(operation, num1, num2){
    return operation(num1, num2);
}

function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

let Sum = calculate(add, 6,7);
let Difference = calculate(subtract, 7,8);

console.log(`Result of Addition: ${Sum}`);
console.log(`Result of Subtraction: ${Difference}`);

console.log("");
console.log("Last String");