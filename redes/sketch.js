let colorCuadradoUno = '#EF4343';
let colorCuadradoDos = '#EF4343'; 
let colorCuadradoTres = '#EF4343';
let colorCuadradoCuatro = '#EF4343';
let colorCuadradoCinco = '#EF4343';
let colorCuadradoSeis = '#EF4343';
let colorCuadradoSiete = '#EF4343';
let colorCuadradoOcho = '#EF4343';
let colorCuadradoNueve = '#EF4343';
let colorCuadradoDiez = '#EF4343';

let colorTextoUno = '#000860';
let colorTextoDos = "#000860";
let colorTextoTres = "#000860";
let colorTextoCuatro = "#000860";
let colorTextoCinco = "#000860";
let colorTextoSeis = "#000860";
let colorTextoSiete = "#000860";
let colorTextoOcho = "#000860";
let colorTextoNueve = "#000860";
let colorTextoDiez = "#000860";



let weirdFish;

function preload() {
  weirdFish = loadImage('img/weird-fish.png');
}

function setup() {
  createCanvas(windowWidth - 15, windowHeight * 2);
}

function draw() {
  background(360);

  cursor('pointer');

  
  /*----------- cuadrados izquierda -----------*/
  
  //cuadrado uno

  push();
  noStroke();

  push()
  fill(colorCuadradoUno);
  beginShape();
  vertex(0,0);
  vertex(width/3, 0);
  vertex(width/3 - 25, height/3.7);
  vertex(0, height/4);
  endShape();
  pop();

  //cuadrado dos
  push()
  fill(colorCuadradoDos);
  beginShape();
  vertex(width/3 - 25, height/3.7);
  vertex(width/3.15, height/1.8);
  vertex(0, height/1.85);
  vertex(0, height/4);
  endShape();
  pop();

  //cuadrado tres
  push();
  fill(colorCuadradoTres);
  beginShape();
  vertex(width/3.15, height/1.8);
  vertex(width/2.9, height/1.26);
  vertex(width/3.1, height);
  vertex(0, height);
  vertex(0, height/1.85);
  endShape();
  pop();


  /*----------- cuadrados centro -----------*/
  
  //cuadrado uno
  push();
  fill(colorCuadradoCuatro);  
  beginShape();
  vertex(width/1.5, 0);
  vertex(width/1.5 - 15, height/3.7);
  vertex(width/2, height/3.4);
  vertex(width/3 - 25, height/3.7);
  vertex(width/3, 0);
  endShape();
  pop();

  //cuadrado dos
  push();
  fill(colorCuadradoCinco);  
  beginShape();
  vertex(width/1.5 - 15, height/3.7);
  vertex(width/1.5 - 25, height/1.8);
  vertex(width/2.8, height/1.75);
  vertex(width/3.15, height/1.8);
  vertex(width/3 - 25, height/3.7);
  vertex(width/2, height/3.4);
  vertex(width/1.5 - 15, height/3.7);
  endShape();
  pop();  

  //cuadrado tres
  push();   
  fill(colorCuadradoSeis);
  beginShape();
  vertex(width/1.5 - 25, height/1.8);
  vertex(width/1.5, height/1.26);
  vertex(width/1.5 - 125, height/1.23);
  vertex(width/2.9, height/1.26);
  vertex(width/3.15, height/1.8);
  vertex(width/2.8, height/1.75);
  endShape();
  pop();

  //cuadrado cuatro
  push();
  fill(colorCuadradoSiete);
  beginShape();
  vertex(width/1.5 , height/1.26);
  vertex(width/1.5 , height);
  vertex(width/3.1, height);
  vertex(width/2.9, height/1.26);
  vertex(width/1.5 - 125, height/1.23);
  vertex(width/1.5 , height/1.26);
  endShape();
  pop();

  /*----------- cuadrados derecha -----------*/

  //cuadrado uno
  push();
  fill(colorCuadradoOcho);
  beginShape();
  vertex(width/1.5, 0);
  vertex(width/1.5 - 28.9, height/1.8);
  vertex(width/1.15, height/2);
  vertex(width, height/1.8);
  vertex(width, 0);
  endShape();
  pop();
  
  //cuadrado dos
  push();
  fill(colorCuadradoNueve);
  beginShape();
  vertex(width/1.5 - 25, height/1.8);
  vertex(width/1.15, height/2);
  vertex(width, height/1.8);
  vertex(width, height/1.28);
  vertex(width/1.5, height/1.26);
  endShape();
  pop();

  //cuadrado tres
  push();
  fill(colorCuadradoDiez);
  beginShape();
  vertex(width/1.5, height/1.26);
  vertex(width, height/1.28);
  vertex(width, height);
  vertex(width/1.5, height);
  endShape();
  pop();

  pop();

                                                                          /*----------- imágenes -----------*/

//---------------------------------- izquierda

// 1 – Cuadrante 1
push();
if (colorCuadradoUno == '#61D649' && mouseIsPressed) {
  tint('#000860');
  window.location.href = "index.html";
} else {
  noTint();
}
image(weirdFish, width/40, -60, weirdFish.width/1.2, weirdFish.height/1.2);
translate(width/2.7, height / 10);
scale(-1, 1);
image(weirdFish, 0, 0, weirdFish.width/1.2, weirdFish.height/1.2);
pop();

// 2 – Cuadrante 2
push();
if (colorCuadradoDos == '#61D649' && mouseIsPressed) {
  tint('#000860');
  window.location.href = "index.html";
} else {
  noTint();
}
translate(width/6, height/3.7);
rotate(radians(45));
image(weirdFish, 0, 0, weirdFish.width/1.2, weirdFish.height/1.2);
pop();

// 3 – Cuadrante 3
push();
if (colorCuadradoTres == '#61D649' && mouseIsPressed) {
  tint('#000860');
  window.location.href = "index.html";
} else {
  noTint();
}
image(weirdFish, width/15, height/1.2, weirdFish.width/1.2, weirdFish.height/1.2);
translate(width/3.8, height / 2);
scale(-1, 1);
image(weirdFish, 0, 0, weirdFish.width/1.2, weirdFish.height/1.2);
pop();

//---------------------------------- centro

// 4 – Cuadrante 4
push();
if (colorCuadradoCuatro == '#61D649' && mouseIsPressed) {
  tint('#000860');
  window.location.href = "index.html";
} else {
  noTint();
}
translate(width/2, -20);
scale(-1, 1);
rotate(radians(40));
image(weirdFish, 0, 0, weirdFish.width/1.2, weirdFish.height/1.2);
pop();

// 5 – Cuadrante 5
push();
if (colorCuadradoCinco == '#61D649' && mouseIsPressed) {
  tint('#000860');
  window.location.href = "index.html";
} else {
  noTint();
}
translate(width/1.65, height/4.8);
scale(-1, 1);
image(weirdFish, 0, 0, weirdFish.width/1.2, weirdFish.height/1.2);
pop();

push();
if (colorCuadradoCinco == '#61D649' && mouseIsPressed) {
  tint('#000860');
  window.location.href = "index.html";
} else {
  noTint();
}
translate(width/2.5, height/2.3);
rotate(radians(-10));
image(weirdFish, 0, 0, weirdFish.width/1.2, weirdFish.height/1.2);
pop();

// 6 – Cuadrante 6
push();
if (colorCuadradoSeis == '#61D649' && mouseIsPressed) {
  tint('#000860');
  window.location.href = "index.html";
} else {
  noTint();
}
translate(width/1.68, height/1.8);
scale(-1, 1);
image(weirdFish, 0, 0, weirdFish.width/1.2, weirdFish.height/1.2);
pop();

// 7 – Cuadrante 7
push();
if (colorCuadradoSiete == '#61D649' && mouseIsPressed) {
  tint('#000860');
  window.location.href = "index.html";
} else {
  noTint();
}
translate(width/2.6, height/1.22);
rotate(radians(-10));
image(weirdFish, 0, 0, weirdFish.width/1.2, weirdFish.height/1.2);
pop();

//---------------------------------- derecha

// 8 – Cuadrante 8
push();
if (colorCuadradoOcho == '#61D649' && mouseIsPressed) {
  tint('#000860');
  window.location.href = "../index.html";
} else {
  noTint();
}
translate(width/1.2, height/8);
rotate(radians(90));
image(weirdFish, 0, 0, weirdFish.width/1.2, weirdFish.height/1.2);
pop();

push();
if (colorCuadradoOcho == '#61D649' && mouseIsPressed) {
  tint('#000860');
  window.location.href = "../index.html";
} else {
  noTint();
}
translate(width + 40, height/3);
scale(-1, 1);
rotate(radians(-90));
image(weirdFish, 0, 0, weirdFish.width/1.2, weirdFish.height/1.2);
pop();

// 9 – Cuadrante 9
push();
if (colorCuadradoNueve == '#61D649' && mouseIsPressed) {
  tint('#000860');
  window.location.href = "index.html";
} else {
  noTint();
}
translate(width/1.07, height/1.8);
rotate(radians(90));
image(weirdFish, 0, 0, weirdFish.width/1.2, weirdFish.height/1.2);
pop();

// 10 – Cuadrante 10
push();
if (colorCuadradoDiez == '#61D649' && mouseIsPressed) {
  tint('#000860');
  window.location.href = "index.html";
  
} else {
  noTint();
}
translate(width/1.07, height + 20);
scale(-1, 1);
rotate(radians(-90));
image(weirdFish, 0, 0, weirdFish.width/1.2, weirdFish.height/1.2);
pop();




                                               /*----------- interacción con cuadrantes -----------*/ 

stroke('#000860');

// Zona 1 – izquierda superior
// Zona 1 – izquierda superior
if (
  mouseX >= 0 && mouseX <= width / 3 &&
  mouseY >= 0 && mouseY <= height / 4 
) {
  colorCuadradoUno = '#61D649';
  colorTextoUno = '#61D649';
  push();
  fill(colorTextoUno);
  text("peces", width / 6, height / 8);
  pop();
} else {
  colorCuadradoUno = '#EF4343';
  colorTextoUno = '#000860';
  push();
  fill(colorTextoUno);
  text("peces", width / 6, height / 8);
  pop();
}

// Zona 2 – izquierda medio
if (
  mouseX >= 0 && mouseX <= width / 3.15 &&
  mouseY >= height / 4 && mouseY <= height / 1.85
) {
  colorCuadradoDos = '#61D649';
  colorTextoDos = '#61D649';
  push();
  fill(colorTextoDos);
  text("de", width / 9, height / 2.8);
  text("humanos", width / 5.8, height / 2.3);
  pop();
} else {
  colorCuadradoDos = '#EF4343';
  colorTextoDos = '#000860';
  push();
  fill(colorTextoDos);
  text("de", width / 9, height / 2.8);
  text("humanos", width / 5.8, height / 2.3);
  pop();
}

// Zona 3 – izquierda inferior
if (
  mouseX >= 0 && mouseX <= width / 3.1 &&
  mouseY >= height / 1.85 && mouseY <= height
) {
  colorCuadradoTres = '#61D649';
  colorTextoTres = '#61D649';
  push();
  fill(colorTextoTres);
  text("¿con", width / 6, height / 1.5);
  text("qué", width / 6, height / 1.2);
  pop();
} else {
  colorCuadradoTres = '#EF4343';
  colorTextoTres = '#000860';
  push();
  fill(colorTextoTres);
  text("¿con", width / 6, height / 1.5);
  text("qué", width / 6, height / 1.2);
  pop();
}

// Zona 4 – centro superior
if (
  mouseX >= width / 3 - 25 && mouseX <= width / 1.5 &&
  mouseY >= 0 && mouseY <= height / 3.7
) {
  colorCuadradoCuatro = '#61D649';
  colorTextoCuatro = '#61D649';
  push();
  fill(colorTextoCuatro);
  text("hondos", width / 2, height / 8);
  pop();
} else {
  colorCuadradoCuatro = '#EF4343';
  colorTextoCuatro = '#000860';
  push();
  fill(colorTextoCuatro);
  text("hondos", width / 2, height / 8);
  pop();
}

// Zona 5 – centro medio
if (
  mouseX >= width / 3.15 && mouseX <= width / 1.5 - 15 &&
  mouseY >= height / 3.7 && mouseY <= height / 1.8
) {
  colorCuadradoCinco = '#61D649';
  colorTextoCinco = '#61D649';
  push();
  fill(colorTextoCinco);
  text("lluviosos", width / 2, height / 2.3);
  pop();
} else {
  colorCuadradoCinco = '#EF4343';
  colorTextoCinco = '#000860';
  push();
  fill(colorTextoCinco);
  text("lluviosos", width / 2, height / 2.3);
  pop();
}

// Zona 6 – centro inferior medio
if (
  mouseX >= width / 3.15 && mouseX <= width / 1.5 &&
  mouseY >= height / 1.8 && mouseY <= height / 1.26
) {
  colorCuadradoSeis = '#61D649';
  colorTextoSeis = '#61D649';
  push();
  fill(colorTextoSeis);
  text("encarnan", width / 2, height / 1.5);
  pop();
} else {
  colorCuadradoSeis = '#EF4343';
  colorTextoSeis = '#000860';
  push();
  fill(colorTextoSeis);
  text("encarnan", width / 2, height / 1.5);
  pop();
}

// Zona 7 – centro inferior
if (
  mouseX >= width / 2.9 && mouseX <= width / 1.5 &&
  mouseY >= height / 1.26 && mouseY <= height
) {
  colorCuadradoSiete = '#61D649';
  colorTextoSiete = '#61D649';
  push();
  fill(colorTextoSiete);
  text("vidas", width / 2, height / 1.1);
  pop();
} else {
  colorCuadradoSiete = '#EF4343';
  colorTextoSiete = '#000860';
  push();
  fill(colorTextoSiete);
  text("vidas", width / 2, height / 1.1);
  pop();
}

// Zona 8 – derecha superior
if (
  mouseX >= width / 1.5 && mouseX <= width &&
  mouseY >= 0 && mouseY <= height / 1.8
) {
  colorCuadradoOcho = '#61D649';
  colorTextoOcho = '#61D649';
  push();
  fill(colorTextoOcho);
  text("v", width / 1.2, height / 8);
  text("í", width / 1.2, height / 6);
  text("c", width / 1.2, height / 5);
  text("t", width / 1.2, height / 4.3);
  text("i", width / 1.2, height / 3.7);
  text("m", width / 1.2, height / 3.3);
  text("a", width / 1.2, height / 3);
  text("s", width / 1.2, height / 2.7);
  pop();
} else {
  colorCuadradoOcho = '#EF4343';
  colorTextoOcho = '#000860';
  push();
  fill(colorTextoOcho);
  text("v", width / 1.2, height / 8);
  text("í", width / 1.2, height / 6);
  text("c", width / 1.2, height / 5);
  text("t", width / 1.2, height / 4.3);
  text("i", width / 1.2, height / 3.7);
  text("m", width / 1.2, height / 3.3);
  text("a", width / 1.2, height / 3);
  text("s", width / 1.2, height / 2.7);
  pop();
}

// Zona 9 – derecha medio
if (
  mouseX >= width / 1.5 && mouseX <= width &&
  mouseY >= height / 1.8 && mouseY <= height / 1.26
) {
  colorCuadradoNueve = '#61D649';
  colorTextoNueve = '#61D649';
  push();
  fill(colorTextoNueve);
  text("sus", width / 1.2, height / 1.5);
  pop();
} else {
  colorCuadradoNueve = '#EF4343';
  colorTextoNueve = '#000860';
  push();
  fill(colorTextoNueve);
  text("sus", width / 1.2, height / 1.5);
  pop();
}

// Zona 10 – derecha inferior
if (
  mouseX >= width / 1.5 && mouseX <= width &&
  mouseY >= height / 1.26 && mouseY <= height
) {
  colorCuadradoDiez = '#61D649';
  colorTextoDiez = '#61D649';
  push();
  fill(colorTextoDiez);
  text("hoy?", width / 1.2, height / 1.1);
  pop();
} else {
  colorCuadradoDiez = '#EF4343';
  colorTextoDiez = '#000860';
  push();
  fill(colorTextoDiez);
  text("hoy?", width / 1.2, height / 1.1);
  pop();
}




/*----------- círculos -----------*/


  fill('#000860')
  stroke('#000860');
  strokeWeight(2);  
  // círculos izquierda
  ellipse(width/3 - 25, height/3.7, 25, 25);
  ellipse(width/3.15, height/1.8, 25, 25);
  ellipse(width/2.9, height/1.26, 25, 25);

  // círculos derecha
  ellipse(width/1.5 - 15, height/3.7, 25, 25);
  ellipse(width/1.5 - 25, height/1.8, 25, 25);
  ellipse(width/1.5, height/1.26, 25, 25);
  ellipse(width/1.15, height/2, 25, 25);


 /*----------- texto -----------*/

  textAlign(CENTER, CENTER);
  textSize(32);



/*------------------- líneas -------------------*/

// Izquierda
// uno
line(width/3, 0, width/3 - 25, height/3.7);
line(width/3 - 25, height/3.7, 0, height/4);

// dos
line(width/3 - 25, height/3.7, width/3.15, height/1.8);
line(width/3.15, height/1.8, 0, height/1.85);

// tres
line(width/3.15, height/1.8, width/2.9, height/1.26);
line(width/3.1, height, width/2.9, height/1.26);

// Centro

//uno

line(width/3 - 25, height/3.7, width/2, height/3.4);
line(width/2, height/3.4, width/1.5 - 15, height/3.7);
line(width/1.5 - 15, height/3.7, width/1.5, 0);

//dos
line(width/3.15, height/1.8, width/2.8, height/1.75);
line(width/2.8, height/1.75, width/1.5 - 25, height/1.8);
line(width/1.5 - 25, height/1.8, width/1.5 - 15, height/3.7);

//tercer cuadrado
line(width/1.5 - 25, height/1.8, width/1.5, height/1.26)
line(width/2.9, height/1.26, width/1.5 - 125, height/1.23);
line(width/1.5 - 125, height/1.23, width/1.5, height/1.26);


// Derecha
line(width/1.15, height/2, width, height/1.8);
line(width/1.5 - 25, height/1.8, width/1.15, height/2);
line(width/1.5, height/1.26, width, height/1.28);
line(width/1.5, height/1.26, width/1.5, height);


}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

