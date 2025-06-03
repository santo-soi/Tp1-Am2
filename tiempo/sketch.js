let iconos = [];
let relojes = [];
let circulos = [];
let paginas = Array(19).fill("index.html");
paginas[0] = "index.html";
paginas[1] = "index.html";
paginas[2] = "index.html";
paginas[3] = "index.html";
paginas[4] = "index.html";
paginas[5] = "index.html";
paginas[6] = "index.html";
paginas[7] = "index.html";
paginas[8] = "index.html";
paginas[9] = "index.html";
paginas[10] = "index.html";
paginas[11] = "index.html";
paginas[12] = "index.html";
paginas[13] = "index.html";
paginas[14] = "index.html";
paginas[15] = "index.html";
paginas[16] = "index.html";
paginas[17] = "index.html";
paginas[18] = "index.html";
let numIconos = 60; 
let numCirculos = 35;
let numRelojes = 45;
let iconSize = 40;


let frase = "¿Qué estás esperando?";
let letras = [];


let relojArena;
let circulosDeCarga;

function preload() {
 relojArena = loadImage('img/reloj-arena.gif');
 circulosDeCarga = loadImage('img/carga-circulos.gif');
}

function setup() {
  createCanvas(windowWidth-15, windowHeight);
  noFill();
  angleMode(DEGREES);
   // Generar posiciones aleatorias para los íconos
  for (let i = 0; i < numIconos; i++) {
    let x = random(iconSize, width - iconSize);
    let y = random(iconSize, height - iconSize);
    let velocidad = random(1, 10);
    iconos.push({ x, y, angulo: random(360), velocidad });
  }

  for(let i = 0; i < numCirculos; i++){
    let xC = random(0, width);
    let yC = random(0, height);
    circulos.push({ x: xC, y: yC });
  }

  for(let i = 0; i < numRelojes; i++){
    let xR = random(0, width);  
    let yR = random(0, height);
    relojes.push({ x: xR, y: yR });
  }

  textSize(60);
  textFont('Helvetica');
  
  // Calcula el ancho total de la frase para centrarla
  let totalWidth = 0;
  for (let i = 0; i < frase.length; i++) {
    totalWidth += textWidth(frase[i]);
  }

  // Posición inicial para centrar horizontalmente
  let startX = width / 2 - totalWidth / 2;
  let y = height / 2;

  // Cargar letras en un array con sus posiciones y estados
  for (let i = 0; i < frase.length; i++) {
    let letra = {
      char: frase[i],
      x: startX,
      y: y,
      size: 60,
      color: color(255),
      url: paginas[i] 
    };
    letras.push(letra);
    startX += textWidth(frase[i]); // mover X para la siguiente letra
  }
}

function draw() {
  background('#000860');

  let hovered = false;

 
  strokeWeight(1.5);

  for (let i = 0; i < iconos.length; i++) {
    let ico = iconos[i];
    

    // Dibuja el círculo base
    stroke('#358B23');
    ellipse(ico.x, ico.y, iconSize, iconSize);

    // Dibuja el reloj de arena
    tint('#61D649'); 
    if (i < relojes.length) {
     image(relojArena, relojes[i].x, relojes[i].y, iconSize, iconSize);
    }
    if( i < circulos.length) {
      image(circulosDeCarga, circulos[i].x, circulos[i].y, iconSize, iconSize);
    }
   
    
    // Dibuja el arco giratorio como indicador de carga
    stroke('#61D649');
    let startAngle = ico.angulo;
    let arcLength = 90; // ángulo del arco visible
    arc(ico.x, ico.y, iconSize, iconSize, startAngle, startAngle + arcLength);

    // Actualizar ángulo de rotación
    ico.angulo = (ico.angulo + ico.velocidad) % 360;
  }

    push()
  for (let i = 0; i < letras.length; i++) {
    let letra = letras[i];
    let w = textWidth(letra.char);
    let h = letra.size;

    // Chequeo si el mouse está sobre esta letra
    if (
      mouseX >= letra.x && mouseX <= letra.x + w &&
      mouseY >= letra.y - h * 0.7 && mouseY <= letra.y
    ) {
      letra.size = lerp(letra.size, 80, 0.3); // agrandar suavemente
      letra.color = lerpColor(letra.color, color('#61D649'), 0.5);
      
      hovered = true; // marcar como hovered
    } 
    else {
      letra.size = lerp(letra.size, 60, 0.3); // volver a tamaño normal
      letra.color = lerpColor(letra.color, color('#EF4343'), 0.5);
      
    }
    
    if(hovered) {
      cursor('pointer');
    } else {
      cursor('default');
    }

    strokeWeight(5);
    stroke('#770000');
    textSize(letra.size);
    fill(letra.color);
    text(letra.char, letra.x, letra.y);
  }
pop();
  


}

function mousePressed() {
  for (let i = 0; i < letras.length; i++) {
    let letra = letras[i];
    let w = textWidth(letra.char);
    let h = letra.size;

    if (
      mouseX >= letra.x && mouseX <= letra.x + w &&
      mouseY >= letra.y - h * 0.7 && mouseY <= letra.y
    ) {
      window.location.href = letra.url;
      break;
    }
  }
} 

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

