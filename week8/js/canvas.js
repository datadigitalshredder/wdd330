// let canvas = document.getElementById("myCanvas");

// let canvas = document.getElementById("myCanvas");
// let context = canvas.getContext("2d");

// let canvas = document.getElementById("myCanvas");     
// let context = canvas.getContext("2d");
// context.strokeStyle = "red";
// context.fillStyle = "blue";

// Drawinga a rectangle
let canvas = document.getElementById("myCanvas"); 
let context = canvas.getContext("2d"); 
context.strokeStyle = "red";
context.fillStyle = "rgba(0, 0, 255, 0.5)";
context.fillRect(10, 10, 100, 100);   
context.strokeRect(10, 10, 100, 100);



// The Canvas Coordinate System
function drawPattern() {
    let canvas = document.getElementById("demo2");
    let context = canvas.getContext("2d");
    context.strokeStyle = "red";
    
    let img = new Image();
    img.src = "../images/bg-bike.png";
    img.onload = function() { 
        let pattern = context.createPattern(img, "repeat"); 
        context.fillStyle = pattern;                        
        context.fillRect(10, 10, 100, 100);                  
        context.strokeRect(10, 10, 100, 100);
    };            
}
// Draw gradeint
function drawGradient() {
    var canvas = document.getElementById("demo3");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";
    var gradient = context.createLinearGradient(0, 0, 0, 200); 
    gradient.addColorStop(0, "blue"); 
    gradient.addColorStop(1, "white"); 
    context.fillStyle = gradient; 
    context.fillRect(10, 10, 100, 100); 
    context.strokeRect(10, 10, 100, 100); 
}
// Circle
function drawCircle(canvas) {
    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(100, 100, 50, 0, Math.PI*2, true);
    context.closePath();
    context.strokeStyle = "red";
    context.fillStyle = "blue";
    context.lineWidth = 3;
    context.fill(); 
    context.stroke(); 
}