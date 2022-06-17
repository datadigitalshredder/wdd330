// This was the only way to achieve animation using JavaScript until the window.requestAnimationFrame() method was 
// developed.
const squareElement = document.getElementById('square');
let angle = 0;

setInterval( () => {
    angle = (angle + 2) % 360;
    squareElement.style.transform = `rotate(${angle}deg)`
}, 1000/60);

// This code receives a reference to our square div, then sets a variable called angle to 0. We then use the 
// setInterval() method to increase the value of angle by 2 (we also use the % operator so that it resets to 0 at 360), 
// then set the transform CSS3 property to rotate that number of degrees. The second argument is 1000/60, which 
// equates to a frame speed of 60 frames per second.

// Newer Method
const squareElement2 = document.getElementById('square2');
let angle2 = 0;

function rotate() {
    angle2 = (angle2 + 2) % 360;
    squareElement2.style.transform = `rotate(${angle2}deg)`
    window.requestAnimationFrame(rotate);
}
const id = requestAnimationFrame(rotate);

// This is similar to the earlier code, but this time we place the rotation code inside a function called rotate. 
// The last line of this function uses the window.requestAnimationFrame() method and takes the rotate() function as 
// an argument. This will then call the rotate() function recursively. The frame rate cannot be set using 
// requestAnimationFrame(); it’s usually 60 frames per second, although it’s optimized for the device being used.

// To start the animation, we need to call the requestAnimationFrame() method, giving the rotate() function as an 
// argument. This will return a unique ID that can be employed to stop the animation using the 
// window.cancelAnimationFrame() method:

// cancelAnimationFrame(id);

// The rotation animation example demonstrates how JavaScript can be used to perform animations in the browser. 
// It could also be achieved using pure CSS animation with the following style rules in styles.css