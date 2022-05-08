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

// Objects Ninja Project
// Storing our questions as objects inside an array. 
const quiz1 = [
    { name: "Superman",realName: "Clark Kent" },
    { name: "Wonderwoman",realName: "Dianna Prince" },
    { name: "Batman",realName: "Bruce Wayne" },
  ];

const game = {
start(quiz){
this.questions = [...quiz];
this.score = 0;
// main game loop
for(const question of this.questions){
this.question = question;
this.ask();
}
// end of main game loop
this.gameOver();
},
ask(){
const question = `What is ${this.question.name}'s real name?`;
const response =  prompt(question);
this.check(response);
},
check(response){
const answer = this.question.realName;
if(response === answer){
alert('Correct!');
this.score++;
} else {
alert(`Wrong! The correct answer was ${answer}`);
}
},
gameOver(){
alert(`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
}
}
game.start(quiz1);

// DOM Ninja Project
const quiz2 = [
    { name: "Superman",realName: "Clark Kent" },
    { name: "Wonderwoman",realName: "Dianna Prince" },
    { name: "Batman",realName: "Bruce Wayne" },
  ];

// View Object
const view1= {
score: document.querySelector('#score strong'),
question: document.getElementById('question'),
result: document.getElementById('result'),
info: document.getElementById('info'),
render(target,content,attributes) {
for(const key in attributes) {
target.setAttribute(key, attributes[key]);
}
target.innerHTML = content;
}
};

// Game Object
const game1 = {
start(quiz){
this.score = 0;
this.questions = [...quiz];
// main game loop
for(const question of this.questions){
this.question = question;
this.ask();
}
// end of main game loop
this.gameOver();
},
ask(){
const question = `What is ${this.question.name}'s real name?`;
view.render(view1.question,question);
const response =  prompt(question);
this.check(response);
},
check(response){
const answer = this.question.realName;
if(response === answer){
view.render(view1.result,'Correct!',{'class':'correct'});
alert('Correct!');
this.score++;
view1.render(view1.score,this.score);
} else {
view1.render(view1.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
alert(`Wrong! The correct answer was ${answer}`);
}
},
gameOver(){
view1.render(view1.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
}
}

game1.start(quiz2);

// Events Ninja Project
const quiz3 = [
    { name: "Superman",realName: "Clark Kent" },
    { name: "Wonderwoman",realName: "Dianna Prince" },
    { name: "Batman",realName: "Bruce Wayne" },
  ];

// View Object
const view2 = {
score: document.querySelector('#score strong'),
question: document.getElementById('question'),
result: document.getElementById('result'),
info: document.getElementById('info'),
start: document.getElementById('start'),
render(target,content,attributes) {
for(const key in attributes) {
target.setAttribute(key, attributes[key]);
}
target.innerHTML = content;
},
show(element){
element.style.display = 'block';
},
hide(element){
element.style.display = 'none';
}
};

// Game Object
const game2 = {
start(quiz){
this.score = 0;
this.questions = [...quiz];
view2.hide(view2.start);
// main game loop
for(const question of this.questions){
this.question = question;
this.ask();
}
// end of main game loop
this.gameOver();
},
ask(){
const question = `What is ${this.question.name}'s real name?`;
view2.render(view2.question,question);
const response =  prompt(question);
this.check(response);
},
check(response){
const answer = this.question.realName;
if(response === answer){
view2.render(view2.result,'Correct!',{'class':'correct'});
alert('Correct!');
this.score++;
view2.render(view2.score,this.score);
} else {
view2.render(view2.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
alert(`Wrong! The correct answer was ${answer}`);
}
},
gameOver(){
view2.render(view2.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
view2.show(view2.start);
}
}

view2.start.addEventListener('click', () => game2.start(quiz3), false);