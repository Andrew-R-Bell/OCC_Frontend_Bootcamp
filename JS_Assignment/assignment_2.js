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

const newPersonObject = new Person(name1, name2, Age);
// Call the introduce method
newPersonObject.introduce();
