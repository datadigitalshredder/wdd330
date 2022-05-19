
// TESTING AND DEBUGGING
// Strict Mode
'use strict';

// e = 2.718; // this gives an exception, instead of a warning

// The alert () as a debugging tool
function amIOldEnough(age){
    if (age = 12) {
        alert(age);
        return 'No, sorry.';
    } else if (age < 18) {
        return 'Only if you are accompanied by an adult.';
    }
    else {
        return 'Yep, come on in!';
    }
}
console.log(amIOldEnough(21)); // Passing an argument of 21 should result in the string 'Yep, come on in!' being returned, but it is returning 'No, sorry.' instead. If you tried running the example, you would have seen the alert message show that the value of the variable age is 12, even though the function was passed an argument of 21. Closer inspection then reveals a classic mistake has been made. Instead of checking if the value of age is equal to 12, we have inadvertently assigned it the value of 12! To check for equality, we should use === instead of = which assigns a value to a variable (even inside an if block).

// Fixing the error, use === (checks for value and equality). In fact, we should use < for the ages below 12 as well
function amIOldEnough1(age){
    if (age < 12) {
        alert(age);
        return 'No, sorry.';
    } else if (age < 18) {
        return 'Only if you are accompanied by an adult.';
    }
    else {
        return 'Yep, come on in!';
    }
}
console.log(amIOldEnough1(21));
console.trace(amIOldEnough1(21));

// Debugging tools
function amIOldEnough2(age){
    // debugger;
        if (age < 12) {
        // debugger;
        return 'No, sorry.';
        } else if (age < 18) {
        // debugger;
        return 'Only if you are accompanied by an adult.';
        } else {
        // debugger;
        return 'Yep, come on in!';
    }
}

console.log(amIOldEnough2(16));
// Remember to remove any references to the debugger command before shipping any code, otherwise the program will appear to freeze when people try to use it!

// Square root of a negative number
function squareRoot(number) {
    'use strict';
    if (number < 0) {
        throw new RangeError("You can't find the square root of negative numbers");
    }
    return Math.sqrt(number);
};
// test the function
console.log(squareRoot(121));
console.log(squareRoot(-1));

