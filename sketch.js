
function setup() {
var canvas = createCanvas(585, 440);
// this places my canvas inside a div element
canvas.parent("sketch-holder");
background(40, 40, 34);
smooth();
strokeWeight(.2);
frameRate(60);

}

function draw() {
mY = mouseY;  
mX = mouseX;

stroke((300));
line(random(mouseX), random(mouseX), 280, 170);
fill(72, 103, 184);
}

