// Objects Ninja Project
// Storing our questions as objects inside an array. 
const quiz = [
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
game.start(quiz);

// DOM Ninja Project
const quiz1 = [
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
start(quiz1){
this.score = 0;
this.questions = [...quiz1];
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
view1.render(view1.question,question);
const response =  prompt(question);
this.check(response);
},
check(response){
const answer = this.question.realName;
if(response === answer){
view1.render(view1.result,'Correct!',{'class':'correct'});
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

game1.start(quiz1);

// Events Ninja Project
const quiz2 = [
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
start(quiz2){
this.score = 0;
this.questions = [...quiz2];
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

view2.start.addEventListener('click', () => game2.start(quiz2), false);