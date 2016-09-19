
function setup() {
var canvas = createCanvas(585, 440);
// this places my canvas inside a div element
canvas.parent("sketch-holder");
background(10, 182, 180);
smooth();
strokeWeight(.5);
frameRate(60);
}

function draw() {
mY = mouseY;  
mX = mouseX;
stroke((900));
line(random(mouseX), random(mouseX), 280, 170);
}

