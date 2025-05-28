function setup() {
  createCanvas(windowWidth, windowHeight * 2);
}

function draw() {
  background(360);

  
  // cuadrados izquierda con vértices de arriba para abajo
  beginShape();
  vertex(width/3, 0);
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
  vertex(width/2.9, height/1.26);
  endShape();

  beginShape();
  vertex(width/2.9, height/1.26);
  vertex(width/3.1, height);
  endShape();


  // cuadrados derecha con vértices de arriba para abajo
  beginShape();
  vertex(width/1.5, 0);
  vertex(width/1.5 - 15, height/3.7);
  vertex(width/2, height/3.4);
  vertex(width/3 - 25, height/3.7);
  endShape();

  beginShape();
  vertex(width/1.5 - 15, height/3.7);
  vertex(width/1.5 - 25, height/1.8);
  vertex(width/2.8, height/1.75);
  vertex(width/3.15, height/1.8);
  endShape();

  beginShape();
  vertex(width/1.5 - 25, height/1.8);
  vertex(width/1.5, height/1.26);
  vertex(width/1.5 - 125, height/1.23);
  vertex(width/2.9, height/1.26);
  endShape();

  beginShape();
  vertex(width/1.5 , height/1.26);
  vertex(width/1.5 , height);
  endShape();

  beginShape();
  vertex(width/1.5, height/1.26);
  vertex(width, height/1.28);
  endShape();

  beginShape();
  vertex(width/1.5 - 25, height/1.8);
  vertex(width/1.15, height/2);
  vertex(width, height/1.8);
  endShape();


  // círculos 
  ellipse(width/3 - 25, height/3.7, 25, 25);
  ellipse(width/3.15, height/1.8, 25, 25);
  ellipse(width/2.9, height/1.26, 25, 25);
  ellipse(width/1.5 - 15, height/3.7, 25, 25);
  ellipse(width/1.5 - 25, height/1.8, 25, 25);
  ellipse(width/1.5, height/1.26, 25, 25);
  ellipse(width/1.15, height/2, 25, 25);



  

  
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}