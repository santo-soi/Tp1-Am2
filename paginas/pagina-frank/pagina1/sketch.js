function setup() {
  createCanvas(windowWidth, windowHeight);
  //noCursor();
}

function draw() {
  background(220,10);
  rectMode(CORNERS);
  fill(208, 150, 125, 100);
  circle(mouseX - 50, mouseY + 30, 50);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}