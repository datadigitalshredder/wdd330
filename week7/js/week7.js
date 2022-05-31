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

// If a function doesn’t refer to an object as this in its body, it can still be called using the call() method, but you need provide null as its first argument. For example, we could call the square() function using the call() method, like so:
console.log(square.call(null, 4));
console.log(square(4));

//The apply() method works in the same way, except the arguments of the function are provided as an array, even if there is only one argument:

console.log(square.apply(null, [4]));

// Custom Properties
// There is nothing to stop you adding your own properties to functions in the same way that you can add properties to any object in JavaScript. For example, you could add a description property to a function that describes what it does:
// square.description = 'Squares a number that is provided as an argument'

// MEMIOZATION
// A useful feature of this is that it provides result caching, or memoization.

// If a function takes some time to compute a return value, we can save the result in a cache property. Then if the same argument is used again later, we can return the value from the cache, rather than having to compute the result again. For example, say squaring a number was an expensive computational operation that took a long time. We could rewrite the square() function so it saved each result in a cache object that is a property of the function
function square(x){
    square.cache = square.cache || {};
    if (!square.cache[x]) {
        square.cache[x] = x*x;
    }
    return square.cache[x]
}

// If we try calling the function a few times, we can see that the cache object stores the results:
console.log(square(3));
// << 9
console.log(square(-11));
// << 121
console.log(square.cache);
// << {"3": 9, "-11": 121}

// Immediately Invoked Function Expressions
// An Immediately Invoked Function Expression – or IIFE – (pronounced 'iffy') is an anonymous function that, as the name suggests, is invoked as soon as it’s defined. This is easily achieved by placing parentheses at the end of the function definition (remember we use parentheses to invoke a function). The function also has to be made into an expression, which is done by placing the whole declaration inside parentheses, as in this example:
(function(){
    const temp = 'World';
    console.log(`Hello ${temp}`);
    })();
// << 'Hello World'

// IIFEs are a useful way of performing a task while keeping any variables wrapped up within the scope of the function. This means the global namespace is not polluted with lots of variable names.