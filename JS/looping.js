// Looping Statements - repeatedly execute a block of codes until a specific condition is met.
// - use to automate repetitive task
// 3 ways to do this.

//Loops: for loop
for (let i = 1; i <= 5; i++) {
    console.log("Count:" , i);
};


//Loops: While loop
let count = 1;
while (count <= 5) {
    console.log("My count:", count)
    count++;
};

//Loops: do-while-loop
let a = 1;
do {
    console.log("Do while count:", a);
    a++;
} while (a <=5 );