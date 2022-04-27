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
// VARIABLE SCOPE
const aa = 1;
{ const a = 3; 
  aa; 
  console.log(aaa);
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
const aaa = 1;
let bb = aaa;
console.log(aaa);
console.log(bb);

bb = 2;
console.log(aaa);
console.log(bb);

// Strings
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
