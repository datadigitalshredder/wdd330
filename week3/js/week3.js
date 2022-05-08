// Creating Objects
const superman = {
    name: 'Superman',
    'real name': 'Clark Kent',
    height: 75,
    weight: 235,
    hero: true,
    villain: false,
    allies: ['Batman','Supergirl','Superboy'],
    fly() {
        return 'Up, up and away!';
    }
};
// View the object properties
for(const key in superman) {
    console.log(key + ": " + superman[key]);
}
    // OR simply
console.log(superman);

// Calling methods
console.log(superman.fly());

// Add a property
superman.city = 'Metropolis';
// Change a property
superman['real name'] = 'Kal-El'
// Remove a property
delete superman.fly

// Objects as Parameters to Functions
function greet({greeting,name,age}) {
    return `${greeting}! My name is ${name} and I am ${age} years old.`;
}
console.log(greet({ greeting: `What's up dude`, age: 10, name: `Bart` }));

// this Method
const dice = {
    sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random()) + 1;
    }
}
console.log(dice.roll());

// Namespacing
const myMaths = {

    square(x) {
        return x * x;
    },
    mean(array,callback) {
        if (callback) {
        array.map( callback );
        } 
        const total = array.reduce((a, b) => a + b);
        return total/array.length;
    }
};

// Example JSON object in string format
const batman = '{"name": "Batman","real name": "Bruce Wayne","height": 74, "weight": 210, "hero": true, "villain": false, "allies": ["Robin","Batgirl","Superman"]}'
console.log(batman);

// Compare with:
JSON.parse(batman);
// The parse() method takes a string of data in JSON format and returns a JavaScript object
console.log(JSON.parse(batman));

// Example JSON object in JSON format
const wonderWoman = {
    name: 'Wonder Woman',
    'real name': 'Diana Prince',
    height: 72,
    weight: 165,
    hero: true,
    villain: false,
    allies: ['Wonder Girl','Donna Troy','Superman'],
    lasso: function(){
        console.log('You will tell the truth!');
    }
}
// The stringify() method does the opposite, taking a JavaScript object and returning a string of JSON data, as can be seen in the example:
console.log(JSON.stringify(wonderWoman));

// RegExp
// Creating a RegExp
const pattern = /[a-zA-Z]+ing$/;
console.log(pattern.test('innocent'));
console.log(pattern.test('studying'));

// Basic RegExp
const pattern1 = /JavaScript/;

// Practical Example
const pdf = /.*\.pdf$/;
console.log(pdf.test('chapter5.pdf'));

console.log(pdf.test('report.doc'));

