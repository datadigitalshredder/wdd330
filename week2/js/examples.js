// EXAMPLE 1
const question = "What is Superman's real name?"
const answer = prompt(question);
alert(`You answered ${answer}`);

// EXAMPLE 2
const quiz = [
    ["What is Superman's real name?","Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
];

let score = 0; // initialize score
for(const [question,answer] of quiz){
    const response = prompt(question);
    if(response === answer){
        alert('Correct!');
        score++;
    } else {
        alert(`Wrong! The correct answer was ${answer}`);
        // score--;
    }
}
alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);

//EXAMPLE 3
function start(quiz){
    let score = 0;

    // main game loop
    for(const [question,answer] of quiz){
        const response = ask(question);
        check(response,answer);
    }
    // end of main game loop

    gameOver();

    // function declarations
    function ask(question){
        return prompt(question);
    }

    function check(response,answer){
        if(response === answer){
        alert('Correct!');
        score++;
        } else {
        alert(`Wrong! The correct answer was ${answer}`);
        }
    }

    function gameOver(){
        alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
    }
}
start(quiz);