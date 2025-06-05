//arrays de imágenes
let ojos = [];
let narices = [];
let bocas = [];
let body = document.querySelector('body');

let zonas = [];

//imágenes mostradas en pantalla
let ojoUno, ojoDos, nariz, boca;


//coor del fondo
let colorFondo = "#000860";


function preload(){
  
  //array para cargar imagenes
  let imgNum = ["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho"];

  //carga imágenes de ojos
  for (let i = 0; i < 8; i++) {
   let ojo = loadImage(`img/ojos/ojo-${imgNum[i]}.png`);
    ojos.push(ojo);
  }
 
  //carga imágenes de bocas y narices
  for (let i = 0; i < 4; i++) {
   let nariz = loadImage(`img/narices/nariz-${imgNum[i]}.png`);
   let boca  = loadImage(`img/bocas/boca-${imgNum[i]}.png`);
    narices.push(nariz);
    bocas.push(boca);
  }
    
  ojoUno = random(ojos);
  ojoDos = random(ojos);
  nariz = random(narices);
  boca = random(bocas);

}



function setup() {
  createCanvas(876, 650);
  zonas = [
    // Ojos
    { x: width / 2.5 - 75, y: height / 3, w: 150, h: 70, url: "https://URL_OJO_IZQ.com" },
    { x: width / 2.5 + 235, y: height / 3, w: 150, h: 70, url: "https://URL_OJO_DER.com" },

    // Nariz
    { x: width / 2, y: height / 1.85, w: 130, h: 55, url: "https://URL_NARIZ.com" },

    // Boca centro
    { x: width / 2, y: height / 1.2, w: 110, h: 50, url: "redes/index.html" },

    // Boca izquierda
    { x: width / 2 - 90, y: height / 1.2 - 50, w: 140, h: 50, url: "https://URL_BOCA_IZQ_1.com" },
    { x: width / 2 - 180, y: height / 1.322 - 50, w: 140, h: 50, url: "https://URL_BOCA_IZQ_2.com" },
    { x: width / 2 - 240, y: height / 1.47 - 50 , w: 140, h: 50, url: "https://URL_BOCA_IZQ_3.com" },

    // Boca derecha
    { x: width / 2 + 90, y: height / 1.2 - 50, w: 140, h: 50, url: "https://URL_BOCA_DER_1.com" },
    { x: width / 2 + 180, y: height / 1.322 - 50, w: 140, h: 50, url: "https://URL_BOCA_DER_2.com" },
    { x: width / 2 + 240, y: height / 1.47 - 50, w: 140, h: 50, url: "https://URL_BOCA_DER_3.com" }
  ];
}

function draw() {
// fondo
  background(colorFondo);
  
  
//rostro digital
  push();
  //line(width/2.5 , height/3, width - width/2.5 , height/3);
  rectMode(CENTER);
  noStroke();

  
  zonas.forEach(z => {
    // Detectamos si el mouse está encima
    let isHover =
      mouseX > z.x - z.w / 2 &&
      mouseX < z.x + z.w / 2 &&
      mouseY > z.y - z.h / 2 &&
      mouseY < z.y + z.h / 2;

    // Fondo verde
    fill('#61D649');
    rect(z.x, z.y, z.w, z.h);

    // Si está el mouse encima, dibujamos borde rojo
    if (isHover) {
      noFill();
      stroke('red');
      strokeWeight(3);
      rect(z.x, z.y, z.w, z.h);
      noStroke();
    }
  });
  //console.log(mouseX, mouseY);
  
  //iteración de imagenes c/ 120s
  
  if (frameCount % 7.5 === 0) {
    ojoUno = random(ojos);
    ojoDos = random(ojos);
    nariz  = random(narices);
    boca   = random(bocas);
  } 
  
  if (mouseIsPressed) {
  body.style.backgroundColor = "#000860";
  } else {
  body.style.backgroundColor = "#000000";
  tint('#EF4343');
  image(ojoUno, width/4.8, height/4.8);
  image(ojoDos, width/2.5 + 155 , height/4.8);
  image(nariz, width/2.4 , height/2.3);
  image(boca, width/2.4 , height/1.35);
  }
  //
  
  if (
    mouseX > width / 2 - 65 && mouseX < width / 2 + 65 &&
    mouseY > height / 1.85 - 27.5 && mouseY < height / 1.85 + 27.5
  ) {
    stroke('#EF4343');
    cursor('pointer');
  }


}


function mousePressed() {

 zonas.forEach(z => {
    let isHover =
      mouseX > z.x - z.w / 2 &&
      mouseX < z.x + z.w / 2 &&
      mouseY > z.y - z.h / 2 &&
      mouseY < z.y + z.h / 2;

    if (isHover) {
      window.location.href = z.url;
    }
  });

}