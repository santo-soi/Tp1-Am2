function setup() {
  createCanvas(windowWidth, windowHeight * 2);
}

function draw() {
  background(360);

  
  // cuadrados izquierda
  beginShape();
  vertex(width/3, 0);
  vertex(width/3 - 25, height/3.7);
  endShape();

  beginShape();
  vertex(width/3 - 25, height/3.7);
  vertex(0, height/4);
  endShape();

  beginShape();
  vertex(width/3 - 25, height/3.7);
  vertex(width/3.15, height/1.8);
  vertex(0, height/1.85);
  endShape();

  beginShape();
  vertex(width/3.15, height/1.8);
  vertex(width/2.9, height/1.3);
  endShape();

  beginShape();
  vertex(width/2.9, height/1.3);
  vertex(width/3.1, height);
  endShape();
  
  
  

  ellipse(width/3 - 25, height/3.7, 25, 25);
  ellipse(width/3.15, height/1.8, 25, 25);
  ellipse(width/2.9, height/1.3, 25, 25);
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight * 2);
}