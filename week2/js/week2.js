// TYPEOF
console.log(typeof false);

console.log(typeof 13);

console.log(typeof { ninja: 'turtle' });

// LET VARIABLE
let points = 25;
console.log(points);

points = 40;
console.log(points);

points = 100;
console.log(points);

// GLOBAL VS LOCAL SCOPE
const a = 1;
console.log(a);

{ 
    const a = 3; 
    a; 
    console.log(a);
}