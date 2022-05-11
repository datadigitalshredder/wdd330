// EXAMPLE 1
export const PI = 3.1415926;

// EXAMPLE 2
function square(x) {
    return x * x;
}

function sum(array, callback) {
    if(callback) {
        array = array.map(callback);
    }
    return array.reduce((a,b) => a + b );
}

function variance(array) {
    return sum(array,square)/array.length - square(mean(array))
}

function mean(array) {
    return sum(array) / array.length;
}

export {
    variance,
    mean,
    sum
}

// Creating Node.js Modules

// module.exports = x =>  x * x;