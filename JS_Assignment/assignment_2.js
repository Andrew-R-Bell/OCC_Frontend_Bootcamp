// OCC Assignment 2

// Task 1: Use arrow functions to calculate the square of a given number and Log the result to the console.
var i=1;
console.log(`Task ${i}:`);
i=i+1;

const square = (a) =>a*a;
console.log("The Square of 7 is:");
console.log(square(7));
const lineBr = function() {console.log("");}
lineBr();


// Task 2: Use template Literals to create a welcome message that includes the name and age of a person.
console.log(`Task ${i}:`);
i=i+1;

const person1 = {
    firstName:"Keanu",
    lastName: "Reeves",
    age: 60,
    hobbies: ["Being Awesome", "Movies", "Motorbikes"],
    greet: function () {
        console.log(`Welcome to One Code Camp, ${this.firstName} ${this.lastName}. You are looking great for ${this.age}. `);
    }
};      
console.log(`First Name: ${person1.firstName}`);
console.log(`Last Name: ${person1.lastName}`);
console.log(`Age: ${person1.age}`);
lineBr();
person1.greet()
lineBr();


// Task 3: Use destructuring to extract the first and Last name from a person object and Log them to the console.
console.log(`Task ${i}:`);
i=i+1;

const person2 = {fName:"Taylor", lName:"Swift"}
let {fName, lName} = person2
console.log(`Person = ${fName} and ${lName}`);
console.log(fName,lName);
lineBr();


// Task 4: Use the spread operator to merge two arrays into a single array.
console.log(`Task ${i}:`);
i=i+1;

const goodies = ["Finn ", "Jake ", "BMO "];
const baddies = ['Ice King ', 'The Lich ', "Magic Man "];

console.log(`Adventure Time Goodies : ${goodies}`);
console.log(`Adventure Time Baddies : ${baddies}`);
const all = [...goodies,  ...baddies];
console.log(`All the characters: ${all}`); 
lineBr();

// Task 5: Use default parameters to create a function that calculates the area of a rectangle.
console.log(`Task ${i}:`);
i=i+1;

const height = 10;
const width = 40;
console.log(`Height is ${height} and Width is ${width}`);
function area(h,w){ 
    return h*w;
}
console.log(`Area Function = ${area(height,width)}`);
lineBr();


// Task 6: Create a class called "Person” with properties for name and age, and a method to introduce the person. Instantiate an object of the class and call the introduce method.
console.log(`Task ${i}:`);
i=i+1;

class Person {
    constructor(name, sname, age) {
        this.name = name;
        this.sname = sname;
        this.age = age;
    }
    introduce() {
        console.log(`Hi there, I'm ${this.name} ${this.sname} and I am ${this.age} years young.`);
    }
}

const name1 = "Daniel";
const name2 = "Radcliffe";
const Age = 2024-1989
console.log(`First Name: ${name1}`);
console.log(`Second Name: ${name2}`);
console.log(`Age: ${Age}`);
lineBr();

const newPersonObject = new Person("Daniel", "Radcliffe", 2024-1989);
// Call the introduce method
newPersonObject.introduce();















/*

const {firstname, lastName} = person;
console.log(age)

const bunny = {
    name: "Mellows",
    color: "White",
    age: 3;

    hop: function () {
        console.log(`${this.name} is hopping around happily!`)
    },
    eat: function () {
        console.log(`${this.name } is eating a carrot`)


    }
}





/*



const person = {
	name: "TJ",
	age: 21,
    greeting(){
        return "Good Evening!"
    }

}



const welcomeMsg = (name) => {
    console.log(name);
}
const userName = 'Marie'
const balance = 10
const str2 = `Hi ${userName}, your balance is ${balance}.`

















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

*/