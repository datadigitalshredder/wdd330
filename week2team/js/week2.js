// Core requirement 1
const read = () => {
    const userInput = document.getElementById('button-1').value;
    document.querySelector('#text-1').innerHTML = userInput;
}
// Core requirement 2
const readNumber = () => {
    const userInput = document.getElementById('number-1').value; // Get the number value the user entered
    const number = parseInt(userInput); // Note: the value will be string, so convert it to a number
    // Using the reduce method
    // const userArray = [...Array(number+1).keys()].slice(1); // Use the spread method to create an array starting at one. .slice(1) will start adding values at 1 and increment by 1.
    // const total = userArray.reduce( (acc,val) => acc + val ); // Use the accumulation method to sum the array
    // Using a for loop
    let total = 0;
    for (let i = 0; i <= number; i++)
    total += i;
    document.querySelector('#acc-total').innerHTML = total; // Display the upto to and including the user number
}
// Core requirement 3
const addNumbers = () => {
    const userInputOne = document.getElementById('number-2').value; // Get the number values the user entered
    const userInputTwo = document.getElementById('number-3').value;

    const numberOne = parseFloat(userInputOne); // Note: the values will be string, so convert them to a numbers
    const numberTwo = parseFloat(userInputTwo);
    const sum = numberOne + numberTwo; // add the two numbers
    document.querySelector('#add-numbers').innerHTML = sum; // Display the upto to and including the user number
}
// Stretch requirement - the Calculator
const number = () => {
    const numberEight = parseInt(document.getElementById('eight').value);
    const plus = document.getElementById('plus').value;
    document.querySelector('#total').innerHTML = numberEight;
    document.querySelector('#total').innerHTML = plus;
}
