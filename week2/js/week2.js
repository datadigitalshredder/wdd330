// TYPEOF
console.log('TYPEOF');
console.log(typeof false);

console.log(typeof 13);

console.log(typeof { ninja: 'turtle' });

// LET VARIABLE
console.log('VARIABLES');
let points = 25;
console.log(points);

points = 40;
console.log(points);

points = 100;
console.log(points);

// GLOBAL VS LOCAL SCOPE
console.log('GLOBAL VS LOCAL SCOPE');
const a = 1;
console.log(a);

{ 
    const a = 3; 
    a; 
    console.log(a);
}
// VARIABLE SCOPE
console.log('VARIABLE SCOPE');
const aa = 1;
{ const aa = 3; 
  aa; 
  console.log(aa);
}
console.log(aa);

let b = 2;
{ b = 4; 
  b; 
  console.log(b);
}
console.log(b);

{ c = 5;
    c;
  }
  console.log(c);

// { const d = 6; d; }
// console.log(d); // Returns error, d not defined


// Direct assignement
console.log('Direct assignement');
const aaa = 1;
let bb = aaa;
console.log(aaa);
console.log(bb);

bb = 2;
console.log(aaa);
console.log(bb);

// Strings
console.log('Strings');
console.log(new String("hello"));

const name = 'Alexa'; // declare and assign a variable<br>
name.length; // retrieve the name variable's length property<br>
console.log(name);
console.log(name.length);
console.log(name['length']);

console.log(6 * 7);

let pointss = 5;
pointss++
console.log(pointss ++);
let pointss2 = 5;
++ pointss2
console.log(++ pointss2);

let coersion = '5' * 5;
console.log(coersion);

// SETS
console.log('SETS');
const duplicate = [3, 1, 4, 1, 5, 9, 2, 6 ,5,3,5,9];
const nonDuplicate = [...new Set(duplicate)];
console.log(duplicate);
console.log(nonDuplicate);
// Converting Sets to Arrays
const shoppingSet = new Set().add('Apples').add('Bananas').add('Beans');
console.log(shoppingSet);
const shoppingArray = [...shoppingSet]
console.log(shoppingArray);

// MAPS
console.log('MAPS');
const romanNumerals = new Map();
romanNumerals.set(1,'I');
romanNumerals.set(2,'II').set(3,'III').set(4,'IV').set(5,'V');
console.log(romanNumerals);

const heroes = new Map([ ['Clark Kent','Superman'], ['Bruce Wayne', 'Batman'] ]);
console.log(heroes);

// Converting Maps to Arrays.
const mapArray = [...romanNumerals];
console.log(mapArray);
// OR
Array.from(romanNumerals)

//LOGIC
console.log('LOGOIC EXAMPLES');
const n = 12;
if (n%2 === 0) {
console.log('n is an even number');
} else {
console.log('n is an odd number');
}
// Shorten with ternary operators
const n1 = 5;
n1%2 === 0 ? console.log('n is an even number') : console.log('n is an odd number');
console.log(`n is a ${(n1%2 === 0)? 'even' : 'odd'} number`);

// Make the ternary operator shorter
console.log(`n is a ${(n%2 === 0)? 'even' : 'odd'} number`);

// Switch Statements instead of if-else statements which could be harder to read
let number = 1;
if (number === 4) {
  console.log('You rolled a four');
  } else if (number === 5) {
  console.log('You rolled a five');
  } else if(number === 6){
  console.log('You rolled a six');
  } else {
  console.log('You rolled a number less than four');
  }

let number1 = 1;
switch (number1) {
  case 4:
  console.log('You rolled a four');
  break;
  case 5:
  console.log('You rolled a five');
  break;
  case 6:
  console.log('You rolled a six');
  break;
  default:
  console.log('You rolled a number less than four');
  break;
}

// LOOPS
console.log('LOOPS');
// The while loop
let bottles = 10;
while (bottles > 0){
    console.log(`There were ${bottles} green bottles, hanging on a wall. And if one green bottle should accidentally fall, there'd be ${bottles-1} green bottles hanging on the wall`);
    bottles--;
}
// OR more precisely
let bottles1 = 11;
while (--bottles1){
    console.log(`There were ${bottles1} blue bottles, hanging on a wall. And if one blue bottle should accidentally fall, there'd be ${bottles1-1} blue bottles hanging on the wall`);
}

//do while Loop
let bottles2 = 10;
do {
    console.log(`DO WHILE LOOP! There were ${bottles2} red bottles, hanging on a wall. And if one red bottle should accidentally fall, there'd be ${bottles2-1} red bottles hanging on the wall`);
    bottles2--;
} while (bottles2 > 0)

// The for loop
for (let bottles3 = 10 ; bottles3 > 0 ; bottles3--) {
  console.log(`FOR LOOP! There were ${bottles3} green bottles, hanging on a wall. And if one green bottle should accidentally fall, there'd be ${bottles3-1} green bottles hanging on the wall`);
}
let bottles4 = 10; // bottles is initialized here instead
for ( ; bottles4 > 0 ; ) { // empty initialization and increment
    console.log(`FOR LOOP2! There were ${bottles4} green bottles, hanging on a wall. And if one green bottle should accidentally fall, there'd be ${bottles4-1} green bottles hanging on the wall`);
    bottles4--; // increment moved into code block
}
// NESTED LOOPS
console.log('NESTED LOOPs')
let j = 10;
for(let i=1 ; j<13 ; i++){
  for(let i=1 ; j<13 ; j++){
      console.log(`${j} multiplied by ${i} is ${i*j}`);
      }
  }

// LOOPING OVER ARRAYS
console.log('LOOPING ARRAYS');
const avengers = ['Captain America', 'Iron Man', 'Thor', 'Hulk', 'Hawkeye', 'Black Widow'];
for(let i=0, max=avengers.length; i < max; i++){
  console.log(avengers[i]);
  }

// LOOPING OVER SETS
console.log('LOOPING SETS');
const letters = new Set('hello');
for(const letter of letters) {
  console.log(letter);
}

// LOOPING OVER MAPS
console.log('LOOPING MAPS');
const romanNumerals2 = new Map();
romanNumerals2.set(1,'I').set(2,'II').set(3,'III').set(4,'IV').set(5,'V');
for(const key of romanNumerals2.keys()) {
  console.log(key);
}
for(const value of romanNumerals2.values()) {
  console.log(value);
}
for(const [key,value] of romanNumerals2.entries()) {
  console.log(`${key} in Roman numerals is ${value}`);
}

//FUNCTIONS
function arguments(){
  return arguments;
}

console.log(arguments(1,2,3,4,5));

// function rest(...args){
//   return args;
// }
let arg = ``
function rest(...args){
  for(arg of args){
      console.log(arg);
  }
}
rest(2,4,6,8,10);

// Improved Mean Function
// We can use a rest parameter to improve our mean() function so it accepts any number of values
function mean(...values) {
  let total = 0;
  for(const value of values) {
      total += value;
  }
  return total/values.length;
}
console.log(mean(2,8,13,11,4,2));

// FUNCTIONS
const tax = (salary) => {
  let taxable = salary - 8000;
  let lowerRate = 0.25 * taxable;
  taxable = taxable - 20000;
  let higherRate = 0.4 * taxable;
  return lowerRate + higherRate;
}
annualSalary = 100000
console.log(tax(100000));

// Sorting numbers with a CallBack function
const sortArray = [-22, 20, 1, 0, 13, 9, 33];
const sortFunction = (a, b) => {
  if (a < b) {
    return -1
  } else if (a > b) {
    return 1
  } else {
    return 0
  }
}

console.log(sortArray.sort(sortFunction));

// Array Iterators simplified with the forEach
const colors = ['Red', 'Green', 'Blue'];
colors.forEach( (color,index) =>
  console.log(`Color at position ${index}  is ${color}`) );

// Using an Map()
const map = [1,2,3].map( x => x * x);
console.log(map);

const reduce2 = ['red','green','blue'].map( color => `<p> ${color.toUpperCase()}</p>` );
console.log(reduce2);

// Using Reduce()
const reduce = [1,2,3,4,5].reduce( (acc,val) => acc + val );
console.log(reduce);

//The reduce() method also takes a second parameter after the callback, which is the initial value of the 
//accumulator, acc. For example, we could total the numbers in an array, but starting at 10, instead of zero:
const reduce3 = [1,2,3,4,5].reduce( (acc,val) => acc + val, 10); // the starting number can be -ve or +ve
console.log(reduce3);

// FILTER
const numbers = [ 2, 7, 6, 5, 11, 23, 12 ]

console.log(numbers.filter(x => x%2 === 0 )); // this returns true if the number is even


