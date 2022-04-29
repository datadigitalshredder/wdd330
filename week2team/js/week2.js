// Core requirement 1
const read = () => {
    const userInput = document.getElementById('button-1').value;
    document.querySelector('#text-1').innerHTML = userInput;
}
// Core requirement 2
const readNumber = () => {
    const userInput = document.getElementById('button-2').value; // Get the number value the user entered
    const number = parseInt(userInput); // Note: the value will be string, so convert it to a number
    const userArray = [...Array(number+1).keys()].slice(1); // Use the spread method to create an array starting at one. .slice(1) will start adding values at 1 and increment by 1.
    console.log(userArray);
    const total = userArray.reduce( (acc,val) => acc + val ); // Use the accumulation method to sum the array
    document.querySelector('#number-1').innerHTML = total; // Display the upto to and including the user number
}
// Core requirement 3
function numbers (a, b) {
    return a + b;
}
const addNumbers = () => {
    const userInputOne = document.getElementById('number-1').value; // Get the number value the user entered
    const userInputTwo = document.getElementById('number-2').value;
    // console.log(typeof userInputOne);

    // const numberOne = parseFloat(userInputOne); // Note: the value will be string, so convert it to a number
    // const numberTwo = parseFloat(userInputTwo);
    // console.log(parseFloat(numberOne));

     const sum = numbers(parseFloat(userInputOne.value), parseFloat(userInputTwo.value));
    // const sum = parseFloat(numberOne) + parseFloat(numberTwo);
    document.querySelector('#add-numbers').innerHTML = sum; // Display the upto to and including the user number
}
