// Arrays and Array Methods

// Creating an Array
let superhero = ['Spiderman', 'Dr Strange', 'Hulk', 'Iron Man', 'Harley Quinn'];

console.log('Hero 1:', superhero[0]);
console.log('Hero 4:', superhero[3]);
console.log('Last Hero:', superhero[superhero.length-1]);


// Modifying aray elements
superhero[1] = 'Wonder Woman';
console.log(superhero);

superhero.push("Batman");
console.log(superhero);

superhero.pop();
console.log(superhero);

// Array Ieration
for (let i = 0; i < superhero.length; i++){
console.log("The Hero is", superhero[i]);
}

superhero.forEach(function(hero) {
    console.log(hero);
    });

// Array Methods

//Length
console.log("Array Length:", superhero.length);

//  IndexOf
console.log("Index of a value:", superhero.indexOf("Hulk"));

//  Includes
console.log("Includes a value:", superhero.includes("Batman"));

// Join
console.log("Joined Array:", superhero.join(" - "));

// Slice
let sliceArray = superhero.slice(2,5)
console.log("Sliced Array:", sliceArray);
console.log(superhero);

// splice
let removedElements = superhero.splice(2,3)
console.log("Removed Elemnts:", removedElements);
console.log(superhero);
