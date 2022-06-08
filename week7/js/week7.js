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

// FILTER AN OBJECT ARRAY
let arr = [
    {id:1,
        title:'A', 
        status:false
    }, 
    {id:3,
        title:'B',
        status:true
    }, 
    {id:2, 
        title:'xys', 
        status:false
    }
];
//find where status = false
let x = arr.filter((a)=>{
    if(a.status == false);
    {return a.title}});
console.log(x);

// Temporary Variables
let a = 1;
let b = 2;

(()=>{
    const temp = a;
    a = b;
    b = temp;
})();

console.log(a);
//<< 2

console.log(b);
//<< 1

// console.log(temp);
//<< Error: "temp is not defined"

// Destructuring two variables
let [a1,b1] = [1,2];
[a1,b1] = [b1,a1];

console.log(a1);
//<< 2

console.log(b1);
//<< 1

// IFFE can be used to set up initialization code
(function() {
    const name = 'Peter Parker'; // This might be obtained from a cookie in reality
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday', 'Friday','Saturday'];
    const date = new Date(),today = days[date.getDay()];
    console.log(`Welcome back ${name}. Today is ${today}`);

})();
//<< 'Welcome back Peter Parker. Today is Tuesday'

// Safe Use of Strict Mode
(function() {
    'use strict';

// All your code would go inside this function

})();

// Self contained code blocks - ensures codes blocks run independent of each other.
(function() {
    // block A
    const name = 'Block A';
    console.log(`Hello from ${name}`);
    }());

    (function() {
    // block B
    const name = 'Block B';
    console.log(`Hello from ${name}`);
}());

//Hello from Block A
//Hello from Block B

//Functions that Define and Rewrite Themselves
function party(){
    console.log('Wow this is amazing!');
    party = function(){
        console.log('Been there, got the T-Shirt');
    }
}
// Every time the function is called after the first time, it will log the message 'Been there, got the T-Shirt':
party();
//<< 'Wow this is amazing!'
party();
//<< 'Been there, got the T-Shirt'
party();
//<< 'Been there, got the T-Shirt'

// Recursive functions
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(3));

// Collatz Conjencture
//Another example from the world of mathematics is the Collatz Conjecture. This is a problem that is simple to state, but, so far, has not been solved. It involves taking any positive integer and following these rules:

//If the number is even, divide it by two

//If the number is odd, multiply it by three and add one
function collatz(n, sequence=[n]) {
    if (n === 1){
        return `Sequence took ${sequence.length} steps. It was ${sequence}`;
    }

    if (n%2 === 0) {
        n = n/2;
    } else { 
        n = 3*n + 1;
    }

    return collatz(n,[...sequence,n]);
}
console.log(collatz(18));

// Event-driven Asynchronous Programming
function wait(message, callback, seconds){
    setTimeout(callback,seconds * 1000);
    console.log(message);
}
function selfDestruct(){
    console.log('BOOOOM!');
}

wait('This tape will self-destruct in five seconds ... ', selfDestruct, 5);
console.log('Hmmm, should I accept this mission or not ... ?');

//<< 'This tape will self-destruct in five seconds ... '
//<< 'Hmmm, should I accept this mission or not ... ? '
//<< 'BOOOOM!'

// The Fetch API
const url = 'https:example.com/data';

fetch(url)
.then((response) => {
    if(response.ok) {
        return response;
    }
    throw Error(response.statusText);
})
.then( response => console.log(url)// do something with response )
.catch( error => console.log('There was an error!') ))