// DRAWING WITH CANVAS
const canvasElement = document.getElementById('canvas'); // This canvas can now be accessed in a JavaScript program 
// using the document.getElementById() method:
// The next step is to access the context of the canvas. This is an object that contains all the methods used to 
// draw onto the canvas. We'll be using a 2-D context, but it’s also possible to render in 3-D using WebGL.
const context = canvasElement.getContext('2d');
// Now we have a reference to the context, we can access its methods and draw onto the canvas. The fill and stroke 
// colors can be changed by assigning a CSS color to the fillStyle and strokeStyle properties respectively. 
// These colors will be utilized for everything that’s drawn onto the canvas until they’re changed:
context.fillStyle = "#0000cc"; // a blue fill color 
context.strokeStyle = "#ccc"; // a gray stroke color
// The lineWidth property can be used to set the width of any line strokes drawn onto the canvas. It defaults to 
// one pixel and remains the same until it’s changed:
context.lineWidth = 4;
// The fillRect() method can draw a filled-in rectangle. The first two parameters are the coordinates of the 
// top-left corner, the third parameter is the width, and the last parameter is the height. The following produces a 
// filled-in blue rectangle in the top-left corner of the canvas at coordinates (10,10) that is 100 pixels wide and 
// 50 pixels high:
context.fillRect(10,10,100,50); // 1st rectangle
// The strokeRect() method works in the same way, but produces a rectangle that is not filled in. This will draw the 
// outline of a rectangle underneath the last one:
context.strokeRect(10,100,100,50); // 2nd triangle
// Straight lines can be drawn employing the moveTo() and lineTo() methods. These methods can be used together to 
// produce a path. Nothing will actually be drawn onto the canvas until the stroke() method is called. The following 
// example will draw a thick red T shape onto the canvas by moving to the coordinates (150,50), then drawing a 
// horizontal line 30 pixels long, and finally moving to the middle of that line and drawing a vertical line 40 pixels 
// long:
context.beginPath();
context.moveTo(130, 50);
context.lineTo(180, 50);
context.moveTo(155, 50);
context.lineTo(155, 90);
context.strokeStyle = '#c00';
context.lineWidth = 15;
context.stroke();
// The arc() method can be used to draw an arc of a given radius from a particular point. The first two parameters are 
// the coordinates of the center of the arc; the next parameter is the radius, followed by the start angle, then the
//  finish angle (note that these are measured in radians). The last parameter is a boolean value that says whether 
//  the arc should be drawn counter-clockwise. The following example will draw a yellow circle of radius 30 pixels at 
//  center (200,200), since Math.PI * 2 represents a full turn:
context.beginPath();
context.arc(200, 200, 30, 0, Math.PI * 2, false);
context.strokeStyle = '#ff0';
context.lineWidth = 4;
context.stroke();
// The fillText() method is used to write text onto the canvas. The first parameter is the text to be displayed, while 
// the next two parameters are the x and y coordinates, respectively. The font property can be used to set the font 
// style used, otherwise the style is inherited from the canvas element’s CSS setting (note that it needs to be changed
// before the fillText() method is used to draw the text). The following example will draw the text “Hello” in 
// green at coordinates (20,50), as shown below.
context.fillStyle = '#0c0'; // a blue fill color
context.font = 'bold 26px sans-serif';
context.fillText('Hello', 20, 200);

