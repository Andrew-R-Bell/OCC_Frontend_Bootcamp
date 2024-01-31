// Objects

const person = {
        // Object Properties
        firstName: "Jane",
        lastName: "Doe",
        age: 25,
        hobbies: ["reading", "coding", "hiking"],

        // Object Methods
        greet: function () {
            console.log("Hello, my name is", this.firstName, this.lastName, "Nice to meet you.")
        }
};       


// Access Object Properties
console.log(person.firstName);
console.log(person.age);

// Modifying Object Properties
person.lastName = "Smith";
console.log(person.lastName);

// Accessing Object Methods
person.greet();

// Addinge new Properties to the Project
person.nationality = "American";
console.log(person.nationality);

// console.log(person.hobbies);

// Adding New Methods to the Object
person.introduce = function() {
    // Template Literal
    console.log(`I am ${this.firstName} ${this.lastName}. I am ${this.age} years old.`);
}

person.introduce();

// Nesting Objects
const address = {
    street: "123 Main Street",
    city: "New York",
    coutry: "USA"
};

person.address1 = address;
console.log(person.address1.street)

// Object Destructuring
const { firstname, lastName, age } = person;
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


