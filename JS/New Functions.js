// ES6 (ECMAScript 2015)   - New Functions

// Arrow Functions

// function greet(name) {
    // code block
// }

const greet = (name) => {
    console.log(name);
}

greet("John");

const square = (a) =>a*a;
console.log(square(5));

// Enhanced Object Literals
const person = {
	name: "TJ",
	age: 21,
    greeting(){
        return "Good Evening!"
    }

}

console.log(person.greeting());

// Spread and Rest Operators
// Rest
function myFunction(firstArg, ...restofArgs){
    console.log(firstArg);
    console.log(restofArgs);
}

myFunction("one", "two", "three", "four");

// Spread
function sum(x,y,z){
    return x+y+z;
}

const numbers=[1,2,3];
console.log(sum(...numbers));

// JS Built-in Methods
// Filter

let nums=[1,2,3,4,5,6,7,8,9,10];

const even =nums.filter((number)=>number%2==0);
console.log(even);

const odd =nums.filter((number)=>number%2!==0);
console.log(odd);

// String Methods
// Split
const message = "Hello World!";
const words = message.split(", ");
console.log(words);

// Includes
const sentence = "The quick brown fox jumps over the lazy dog";
const containsWord = sentence.includes("fox");
console.log(containsWord);

// Length
const sampleString = "Welcome to Modern JS Features";
console.log(sampleString.length);

// Object Methods
const person1 = {
    name:"John",
    age:30,
    city:"New York"
}

// Keys
console.log(Object.keys(person1));

// Values
console.log(Object.values(person1));

console.log(person1);

// Math Methods
// Max and Min
const maxNumber = Math.max(10,5,20);
console.log(maxNumber);

const minNum=Math.min(10,5,20);
console.log(minNum);

// Random
const randomValue = Math.random();
console.log(randomValue);


// Round
const roundNumber = Math.round(3.68654);
console.log(roundNumber);

// Floor
const roundedFloor = Math.floor(3.68654);
console.log(roundedFloor);

// Ceil
const roundedCeil = Math.ceil(3.68654);
console.log(roundedCeil);

// Nested Math Numbers

// 1 to 100
let randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum);

// Other Methods
// toFixed
const pi = 3.141592;
console.log(pi.toFixed(3));

// Date
const currentDate = new Date();
console.log(currentDate);

// Xmas
const xmas = new Date(2024,11,25);
console.log(xmas);

// to String
const num = 38;
const parsedString = num.toString();
console.log(parsedString+1);