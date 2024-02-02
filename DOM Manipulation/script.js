// Accessing Elements

// by ID
// const heading=document.getElementById('heading');

// by Class 
// const heading=document.getElementsByClassName('heading');

// tag name
const heading=document.getElementsByTagName('h1');

console.log(heading[1]);

const listItems=document.querySelectorAll("#list li")

console.log(listItems);

// Modifying Elements
// Content Using innerHTML
heading[0].innerHTML='<em> Learning DOM Manipulation</em>';

// Content Using textcontent
// heading[0].textContent="All about DOM Manipulation";

// attribute using setAttribute
heading[1].setAttribute('class', "highlight");

// styles using style property
const button = document.getElementById('btn')
button.style.backgroundColor='skyblue';
button.style.border="blue 5px solid";

// Creating Elelmnts Dynamically
const divcontainer=document.getElementsByClassName("container");
const newParagraph = document.createElement("p");
newParagraph.textContent="This is a new Paragraph";

divcontainer[0].appendChild(newParagraph);

// Remove Elements Dynamiclly
// divcontainer[0].remove();
// button.remove();

// Handling Events
button.addEventListener('click', addlistItem);

function addlistItem(){
    const newListitem = document.createElement('li');
    newListitem.textContent= "New List Items";

    document.getElementById("list").appendChild(newListitem);
}


window.addEventListener('keydown', addAnotherItem);

function addAnotherItem(event) {
    console.log("Pressed a ", event.keyCode);
}

/*Here are the common ones
Mouse Events:
click, dblclick, mousemove

Keyboard Events:
keydown, keyup, keypress

Form Events:
submit, reset, change

*/


// Document Object Model

// Click Event: Triggered when an element is clicked.
// Mouseover Event: Occurs when the mouse pointer is moved over an element.
// Keydown Event: Fired when a key is pressed down.
// Submit Event: Triggered when a form is submitted.
// Load Event: Occurs when a page or an element has finished loading.
// Change Event: Fired when the value of an input element changes.
// Focus and Blur Events: These happen when an element gains or loses focus.

