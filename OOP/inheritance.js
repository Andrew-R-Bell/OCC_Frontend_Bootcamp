// Inheritance

class Animal{
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log('${this.name} is eating');
    }
}

class Dog extends Animal {
    bark() {
        console.log("Woof Woof");
    }
}

class Cat extends Animal {
    makesound() {
        console.log("Meeoww");
    }
}


const myDog=new Dog("Blue");
myDog.eat();
myDog.bark();
console.log(myDog.name);

const myCat=new Cat("Sheeba");
myCat.makesound();

