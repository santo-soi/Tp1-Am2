//arrays de imágenes
let ojos = [];
let narices = [];
let bocas = [];


//imágenes mostradas en pantalla
let ojoUno, ojoDos, nariz, boca;


//coor del fondo
let colorFondo = 260;


//coordenadas de la cara



function preload(){
  
  //array para cargar imagenes
  let imgNum = ["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho"];

  //carga imágenes de ojos
  for (let i = 0; i < 8; i++) {
   let ojo = loadImage(`img/ojo-${imgNum[i]}.png`);
    ojos.push(ojo);
  }
 
  //carga imágenes de bocas y narices
  for (let i = 0; i < 4; i++) {
   let nariz = loadImage(`img/nariz-${imgNum[i]}.png`);
   let boca  = loadImage(`img/boca-${imgNum[i]}.png`);
    narices.push(nariz);
    bocas.push(boca);
  }
    
  ojoUno = random(ojos);
  ojoDos = random(ojos);
  nariz = random(narices);
  boca = random(bocas);

}



function setup() {
  createCanvas(800, 650);
}

function draw() {
// fondo
  background(colorFondo);
  
let ojoIzquiedoX = mouseX >= 170 && mouseX <= 320 && mouseY >= 180 && mouseY <= 250;
let ojoDerechoX = mouseX >= 480 && mouseX <= 630 && mouseY >= 180 && mouseY <=250;
let narizX = mouseX >= 335 && mouseX <= 462 && mouseY >= 324 && mouseY <= 380;
let bocaX = mouseX >= 240 && mouseX <= 558 && mouseY >= 480 && mouseY <= 540;  

//rostro digital
  push();
  //line(width/2.5 , height/3, width - width/2.5 , height/3);
  rectMode(CENTER);
  
  fill('#61D649');
  noStroke();
  /* ojos */
  rect(width/2.5 - 75 , height/3 , 150 , 70);
  rect(width/2.5 + 235 , height/3 , 150, 70);
  
   
  //line(width/2 , height/3 , width/2 , height/1.5);
  
  /* nariz */ 
  rect(width/2 , height/1.85 , 130 , 55);
  
  /* boca */
  
  rect(width/2 , height/1.2 , 110 , 50); //centro
  
  //lado izquierdo
  rect(width/2 - 90,  height/1.295 , 140 , 50); 
  
  rect(width/2 - 150, height/1.405, 140 , 50);
  
  rect(width/2 - 240, height/1.53, 140 , 50);
  
  //lado derecho
  rect(width/2 + 90,  height/1.295 , 140 , 50);
  
  rect(width/2 + 150, height/1.405, 140 , 50);
  
  rect(width/2 + 240, height/1.53, 140 , 50);
  
  
  pop();
  console.log(mouseX, mouseY);
  
  //iteración de imagenes c/ 120s
  
  if (frameCount % 150 === 0) {
    ojoUno = random(ojos);
    ojoDos = random(ojos);
    nariz  = random(narices);
    boca   = random(bocas);
  } 
  
  if (mouseIsPressed) {
    
  } else {
  image(ojoUno, width/4.8, height/4.8);
  image(ojoDos, width/2.5 + 155 , height/4.8);
  image(nariz, width/2.4 , height/2.3);
  image(boca, width/2.4 , height/1.35);
  colorFondo = 360;
  }
  //ojo izquierdo
   if (
    mouseX >= 170 && mouseX <= 320 &&
    mouseY >= 180 && mouseY <= 250
  ){
    cursor(HAND);
  } else {
    cursor(ARROW);
  }
  
  //ojo derecho
  if (
    ojoDerechoX || ojoIzquiedoX || narizX || bocaX
  ) {
    cursor(HAND);
  } else {
    cursor(ARROW);
  }
 

}

//funcion para ir a las distintas paginas 
function mousePressed() {
  //ojo izquierdo
  if (
    mouseX >= 170 && mouseX <= 320 &&
    mouseY >= 180 && mouseY <= 250
  ) {
    window.location.href = "../paginas/pagina-frank/pagina1/index.html";
  }

  //ojo derecho
  if (
    mouseX >= 420 && mouseX <= 570 &&
    mouseY >= 180 && mouseY <= 250
  ) {
    window.location.href = "../paginas/pagina2.html";
  }
  if (
    mouseX >= 335 && mouseX <= 462 &&
    mouseY >= 324 && mouseY <= 380
  ) {
    window.location.href = "../paginas/pagina3.html";
  }
  if (
    mouseX >= 240 && mouseX <= 558 &&
    mouseY >= 480 && mouseY <= 540
  ) {
    window.location.href = "../paginas/pagina4.html";
  }
}


//funcion para cambiar el cursor

