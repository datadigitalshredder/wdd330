// WEEK 4 JS READINGS
// const form = document.forms[0]; //returns an HTML collection of all the forms in the document in the order they appear in the markup.
// const form = document.getElementsByTagname('form')[0]; // This is the equivalent using THE DOM
// const form = document.forms.search; // We can also use the form name to identify it, instead of using the index
const form = document.forms['search']; // Best way
console.log(form);

const [input,button] = form.elements;
console.log(input,button);

const formInput = form['searchInput']; //We can also access the form controls using their 'name' attributes as if it was a property of the form object.
console.log(formInput);

// Forms events
//Focus
const inputFocus = form.elements.searchInput;
inputFocus.addEventListener('focus', () => alert('focused'), false);

// Blur
inputFocus.addEventListener('blur', () => alert('blurred'), false);

// Change
inputFocus.addEventListener('change', () => alert('changed'), false);

// Submit
const formSubmit = document.forms['search'];
formSubmit.addEventListener ('submit', search, false);

// function search() {
//     alert(' Form Submitted');
// }

// // Prevent submission - UPDATED FROM LINE 20-31
// function search(event) {
//     alert('Form Submitted');
//     event.preventDefault();
// }

// // Search function - UPDATED FROM LINE 33-37
function search(event) {
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();
}

// Adding a value to the form using JS
input.value = 'Search Here'; // BUT this means the text will remain in the field and must be cleared before searching

// Alternative and best practice
input.addEventListener('focus', function(){
    if (input.value==='Search Here') {
        input.value = '' 
    }
}, false);

input.addEventListener('blur', function(){
    if(input.value === '') {
        input.value = 'Search Here';
    } }, false);

// FORM CONTROLS
document.forms.hero.heroName.focus(); // Equivalent of autofocus

// assigning the form to a variable and then adding an event listener for when the form is submitted
const formControls = document.forms['hero'];
formControls.addEventListener('submit', makeHero, false);

// The event listener will invoke the makeHero() function when the form is submitted. This function will return an object based on the information provided in the form. Let’s implement that function by adding this code:
function makeHero(event) {

    event.preventDefault(); // prevent the form from being submitted

    const hero = {}; // create an empty object

    hero.name = formControls.heroName.value; // create a name property based on the input field's value

    hero.city = formControls.city.value; //  Sets the city property to each selection object that has a value property that’s equal to the 'value' attribute of the <option> tag that was selected.
    hero.origin = formControls.origin.value; // The text entered into this text area can now be added as a property of the hero object 
    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
    return hero;
}

// Checkboxes
// Access the hero's real name (the password/ secret word)
hero.realName = formControls.realName.value;
console.log(hero.realName)

// This means they can be accessed as an HTML collection, like so:
console.log(formControls.powers);

// Now we can iterate over this collection using a for loop to see if each checkbox was checked. Checkbox objects have a checked property that tells us if it has been checked or not. It is a boolean property, so can only have the values true or false. 
hero.powers = []; //hero.powers = [];

for (let i=0; i < formControls.powers.length; i++) { //We then iterate over each checkbox to see if it was checked in the form. 
    if (formControls.powers[i].checked) {
        hero.powers.push(formControls.powers[i].value); //If it was, we add the 'value' property of the checkbox to the powers array using the push method.
    }
}

hero.powers = [...formControls.powers].filter(box => box.checked).map(box => box.value); // Just makes the above code less verbose
console.log(hero.powers);

// Radio buttons
// accessing radio buttons
formControls.category;

// Using JS to manipulate the radio buttons, this will check this button and uncheck others
formControls[2].checked = true;

// Processing the age
hero.age = formControls.age.value;

// Select dropdown list
// The 'name' attribute of the <select> element is used to access it in JavaScript as a property of the form object:
formControls.city; 

// It is also possible to find out the index of the option that has been selected, using the selectedIndex property. For example, if a user selected 'Gotham City' from the menu, form.city.selectedIndex would return 2 because it’s the third option in the list. This can then be used to access the actual text contained in the selected option
console.log(formControls.city.options[formControls.city.selectedIndex].text);

// From the example above, it should be clear that you can access the text of any option using index notation. 
console.log(formControls.city.options[1].text);

// It is also possible to change the value in the form directly:
formControls.origin.value = 'Born as Kal-El on the planet Krypton...';
console.log(formControls.origin.value);

// FORM VALIDATION
// Implement custom form validation using JavaScript.
formControls.addEventListener('submit',validate,false);

function validate(event) {
    const firstLetter = formControls.heroName.value[0]; // We start by finding the first letter of the value entered in the name field using the index notation (remember that an index of 0 represents the first letter in a string).
    if (firstLetter.toUpperCase() === 'X') { // It then checks to see if the first letter is equal to the string literal 'X', and alerts the user if this is the case.
        event.preventDefault(); //  It also uses the preventDefault() method to stop the form from being submitted. Otherwise it returns true, which means the form is submitted as normal.
        alert('Your name is not allowed to start with X!');
    }
}

// Adding the validation check before submiting the form
const label = formControls.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! Your name is not allowed to start with X.';
label.append(error);

function validateInline() {
    const heroName = this.value.toUpperCase();
    if(heroName.startsWith('X')){
    error.style.display = 'block';
    } else {
    error.style.display = 'none';
    }
}

// Activating a disabled submit button
function disableSubmit(event) {
    if(event.target.value === ''){
        document.getElementById('submit').disabled = true;
    } else {
        document.getElementById('submit').disabled = false;
    }
}

formControls.heroName.addEventListener('keyup',disableSubmit,false); // We can apply this to the heroName field by adding the following event handler that will fire every time a key is pressed

// OPP
// Using constructor functions to create objects
const Dice = function(sides=6){
    this.sides = sides; // The keyword this is used to represent the object that will be returned by the constructor function. 
    this.roll = function() { // a method called roll(), which returns a random number from 1 up to the number of sides the dice has.
        return Math.floor(this.sides * Math.random() + 1)
    }
}

// We can now create an instance of the dice constructor function using the new operator.
const redDice = new Dice ();
console.log(redDice); // redDice has the sides property and 
console.log(redDice.roll()); // redDice has the roll() method:

const whiteDice = new Dice (4);
console.log(whiteDice);
console.log(whiteDice.roll());

// ES6 Class Declarations
class Die {
    constructor(sides=6) {
        this.sides = sides;
    }

    roll() {
        return Math.floor(this.sides * Math.random() + 1)
    }
}
// To create an instance of the Dice class, the new operator is again used
const blueDice = new Die(20);
console.log(blueDice);
console.log(blueDice.roll());

// The variable blueDice now contains an instance of the Dice class and behaves in exactly the same way as the redDice object:
console.log(blueDice instanceof Die);

console.log(blueDice.sides);

console.log(blueDice.roll());

// The Constructor Property
// All objects have a constructor property that returns the constructor function that created it:
console.log(blueDice.constructor);

// When an object literal is used to create a new object, we can see that in the background, the Object constructor function is being used:
const literalObject = {};

console.log(literalObject.constructor);

// We can use the constructor property to instantiate a copy of an object, without having to reference the actual constructor function or class declaration directly. For example, if we wanted to make another copy of the redDice object, but if the name of its constructor was unknown, we could use the following:
const greenDice = new redDice.constructor(10);

console.log(greenDice instanceof Dice); // True

// Static method (Class Methods)
class Dice1 {
    constructor(sides=6) {
        this.sides = sides;
    }

    roll() {
        return Math.floor(this.sides * Math.random() + 1)
    }

    static description() {
        return 'A way of choosing random numbers'
    }
}
// This method is called from the Dice1 class like so:
console.log(Dice1.description());
// Static methods are not available to instances of the class. So, in our example, the instances of Dice such as redDice and blueDice cannot call the static description() method:
console.log(redDice.description);

// Prototypal Inheritance
class Turtle {
    constructor(name) {
        this.name = name;
        this.weapon = 'hands';
    }
    sayHi() {
        return `Hi dude, my name is ${this.name}`;
    }
    attack(){
        return `Feel the power of my ${this.weapon}!`;
    }
}

// This can then be used to create a new turtle instance:
const leo = new Turtle('Leonardo');
// The variable leo points to an instance of the Turtle class. It has a name property and a sayHi() method that references the name property
console.log(leo.name);
console.log(leo.sayHi());

// The Prototype Object
// All classes and constructor functions have a prototype property that returns an object
console.log(Turtle.prototype);

// All instances of the the Turtle class share all the properties and methods of its prototype. This means they can call any methods of the prototype and access any of its properties. Since the prototype is just an object, we can add new properties by assignment
Turtle.prototype.weapon = 'Hands';
console.log(Turtle.prototype.weapon);

// We can also add a method to the prototype in a similar way
Turtle.prototype.attack = function(){
    return `Feel the power of my ${this.weapon}!`;
    }
console.log(Turtle.prototype.attack);

// Now if we create a new Turtle instance, we can see that it inherits the weapon property and attack() method from the Turtle.prototype object, as well as receiving the name property and sayHi() method from the class declaration:
const raph = new Turtle('Innocent');

console.log(raph.name);
console.log(raph.sayHi());
console.log(raph.weapon);
console.log(raph.attack());

// Finding Out the Prototype
// 1. via the constructor function’s prototype property
console.log(raph.constructor.prototype);
// 2. use the Object.getPrototypeOf() method, which takes the object as a parameter:
console.log(Object.getPrototypeOf(raph));
// 3. Many JavaScript engines also support the non-standard __proto__ property. This is known as dunder proto, which is short for 'double underscore proto':
console.log(raph.__proto__);

// Every object has a hasOwnProperty() method that can be used to check if a method is its own property, or is inherited from the prototype:
console.log(raph.hasOwnProperty('name'));
console.log(raph.hasOwnProperty('weapon'));

// So what’s the difference between an object's own properties and prototype properties? Prototype properties are shared by every instance of the Turtle class. This means they’ll all have a weapon property, and it will always be the same value.
const don = new Turtle('Donatello');
console.log(don.name);
console.log(don.weapon);

// Overwriting Prototype Properties
// An object instance can overwrite any properties or methods inherited from its prototype by simply assigning a new value to them. For example, we can give our turtles their own weapon properties:
leo.weapon = 'Katana Blades';
console.log(leo.weapon);
raph.weapon = 'Sai';
console.log(raph.weapon);
don.weapon = 'Bo Staff';
console.log(don.weapon);
// These properties will now become an 'own property' of the instance object:
console.log(leo);
// Any own properties will take precedence over the same prototype property when used in methods:
console.log(leo.attack());
// What Should the Prototype Be Used For?
// The prototype can be used to add any new properties and methods after the class has been declared. It should be used to define any properties that will remain the same for every instance of the class.
Turtle.prototype.food = 'Pizza';
Turtle.prototype.eat = function() {
    return `Mmm, this ${this.food} tastes great!`;
}

// Example
const mike = new Turtle('Michelangelo');
// Verify that the new instance has inherited properties and methods from the prototype
console.log(mike.eat());
// Augment the instance with its own individual weapon property:
mike.weapon = 'Nunchakus';
console.log(mike.weapon);
mike.attack();
console.log(mike.attack());

// In our Ninja Turtle example, the name and weapon properties are said to be public, as can be seen if we query their value
console.log(raph.weapon);

// This means they can also be changed to any value, using assignment:
raph.weapon = 3;
console.log(raph.weapon);

// Controlling objects in the public face
class Turtle1 { // the Turtle() class has been modified to include a private _color property
    constructor(name,color) {
        this.name = name;
        let _color = color;
        this.setColor = (color) => {
            if(typeof color === 'string'){
                return _color = color;
                } else {
                    throw new Error('Color must be a string');
                }
            } // The _color property is created as a variable inside the scope of the constructor function inside the class declaration. This makes it impossible to access outside of this scope. The getColor() and setColor() methods are known as getter and setter methods and they form a closure over this variable and provide controlled access to the property instead
        this.getColor = () => _color;
    }
}

const raph1 = new Turtle1('Raphael','Red');
console.log(raph1.getColor());
// console.log(raph1.setColor(4)); // This won't work because of the if statement above
console.log(raph1.setColor('Blue'));

// In this example, things don't work much differently than before, except functions are now being used to access and change the private properties. The big change, however, is that now we have full control over the getter and setter methods. This means that any private properties can only be changed in a controlled way, so we can stop certain assignments from being made by screening the data before any changes are made to a private property. For example, we could insist that the color property is a string:
// this.setColor = (color) => {
//     if(typeof color === 'string'){
//         return _color = color;
//         } else {
//             throw new Error('Color must be a string');
//         }
//     }

// The Prototype Chain
console.log(Object.getPrototypeOf(raph));
// Peering further down. Shows us that the prototype of the prototype is an apparently empty object literal
console.log(Object.getPrototypeOf(Object.getPrototypeOf(raph)));
// Next prototype returns null
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(raph))));

// The Object Construtor
// console.log(raph.makePizza());

// Enumerable properties
console.log(Turtle.prototype.propertyIsEnumerable('eat'));

// Inheritanc with extends
// class Turtle {
//     constructor(name) {
//         this.name = name;
//         }
//     sayHi() {
//         return `Hi dude, my name is ${this.name}`;
//     }

//     swim() {
//         return `${this.name} paddles in the water`;
//     }
// }

// // Inside the child class declaration, the keyword super refers to the parent class, and can be used to access any properties and call any methods of the parent class.
// class NinjaTurtle extends Turtle {
//     constructor(name) {
//         super(name);
//         this.weapon = 'hands';
//     }
//     attack() { return `Feel the power of my ${this.weapon}!` } 
// }

// Polymorphism
[1,2,3].toString()

// Calling it on a primitive number will return a string containing that number:
console.log(2..toString); // remember 2 dot operators for integers!

class Turtle2 {
    constructor(name) {
        this.name = name;
        this.weapon = 'hands';
    }
    sayHi() {
        return `Hi dude, my name is ${this.name}`;
    }
    attack(){
        return `Feel the power of my ${this.weapon}!`;
    }
    toString() {
        return `A turtle called ${this.name}`;
    }
}
const inno = new Turtle2('Innocent'); // Creating a new instance of the Turtle2 Class
console.log(inno.toString());
console.log(inno.name);

// Adding Methods to Built-in Objects - Monkey-patching (not recommended in JS)
Number.prototype.isEven = function() {
    return this%2 === 0;
}

Number.prototype.isOdd = function() {
    return this%2 === 1;
}
console.log(42..isEven());
console.log(765234..isOdd());
// Monkey-patching on Array Objects
// Arrays are powerful objects, but seem to have some basic methods missing in JavaScript that are found in other languages. We can add a first() and last() methods that return the first and last items in the array:
Array.prototype.first = function() {
    return this[0];
}

Array.prototype.last = function() {
    return this[this.length -1];
}
const turtles = ['Leonardo', 'Donatello', 'Michaelangelo', 'Raphael'];

console.log(turtles.first());
console.log(turtles.last());

// Another useful method that arrays lack is a decent delete() method. There is the delete operator that we met in Chapter 3, but the way this works is not very intuitive as it leaves a value of null in place of the item that’s removed. In that chapter, we saw that it’s possible to remove an item completely from an array using the splice() method. We can use this to create a new method called delete() that removes an item from the array at the index provided:
Array.prototype.delete = function(i) {
    return self.splice(i,1);
}

// Getter and Setters
const me = { name: 'DAZ' };
console.log(Object.getOwnPropertyDescriptor(me,'name'));
// { value: 'DAZ',
// writable: true,
// enumerable: true,
// configurable: true }
me.age = 21;
me.retirementAge = 65;

Object.defineProperty(me, 'yearsToRetirement',{
    get() {
        if(this.age > this.retirementAge) { return 0; }
        else { return this.retirementAge - this.age; }
    },
    set(value) {
        this.age = this.retirementAge - value;
        return value;
    }
});

console.log(me.yearsToRetirement); //The getter bases the yearsToRetirement property on the age and retirementAge properties, so returns the relevant value when queried:
me.yearsToRetirement = 10;
console.log(me.yearsToRetirement); 

console.log(me.age); // The setter also allows the age to be changed by setting the yearsToRetirement property:


// MODULAR JS
import { PI } from './modulesexample.js'; // the PI is a variable declared in the modulesexample.js file and is imported here!
const area = PI * 5 ** 2;
console.log(area);

import  { mean, variance } from './modulesexample.js'; // mean and variance are functions imported here
console.log(mean([2,6,10]));

console.log(variance([2,6,10]));

import * as statistics from './modulesexample.js'; // Imports everything from the module (only EXPORTED function/ variable can be IMPORTED)
// the function square was not imported, it cannot be used
console.log(statistics.sum([2,6,10]));

// Node.js Modules
// const square = require('./modulesexample');
// console.log(square(6));

