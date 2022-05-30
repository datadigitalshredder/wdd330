// Function Properties and Methods
function square(x) {
    return x*x;
}

console.log(square.length);
// returns one parameter

// CALL AND APPLY METHODS
// The call() method can be used to set the value of this inside a function to an object that is provided as the first argument.
// In the following example, the sayHello() function refers to an unspecific object called this that has a property called name:

// We can create some objects that have a name property, then use the call() method to invoke the sayHello() function, providing each object as an argument. This will then take the value of this in the function:
function sayHello(){
    return `Hello, my name is ${ this.name }`;
}
const clark = { name: 'Clark' };
const bruce = { name: 'Bruce' };

console.log(sayHello.call(clark));
console.log(sayHello.call(bruce));

// If the function that’s called requires any parameters, these need to be provided as arguments after the first argument, which is always the value of this. For example, let's update the sayHello() function to give a more generalized greeting that’s provided as an argument:
function sayHello(greeting='Hello'){
    return `${ greeting }, my name is ${ this.name }`;
}

console.log(sayHello.call(clark, 'How do you do'));
console.log(sayHello.call(bruce));
