let celu;
let puntos = [];
let paginas = [];


function setup() {
  createCanvas(windowWidth - 15, windowHeight);
  

  textFont('monospace');
  for (let i = 0; i < 11; i++) {
    paginas[i] = "index.html";
  }

  let centroX = width / 2;
  let centroY = height / 5;
  let r = min(width, height) * 0.15;
  let d = r / 6; // Diámetro de los círculos

  puntos.push({ x: centroX, y: centroY, i: 0 }); // centro
  puntos.push({ x: centroX, y: centroY + r, i: 1 });
  puntos.push({ x: centroX, y: centroY - r, i: 2 });
  puntos.push({ x: centroX + r, y: centroY, i: 3 });
  puntos.push({ x: centroX - r, y: centroY, i: 4 });
  puntos.push({ x: centroX + r / 2, y: centroY, i: 5 });
  puntos.push({ x: centroX - r / 2, y: centroY, i: 6 });
  puntos.push({ x: centroX + r / 2.6, y: centroY - r / 2.2, i: 7 });
  puntos.push({ x: centroX - r / 2.6, y: centroY - r / 2.2, i: 8 });
  puntos.push({ x: centroX + r / 2.6, y: centroY + r / 2.2, i: 9 });
  puntos.push({ x: centroX - r / 2.6, y: centroY + r / 2.2, i: 10 });

}

function preload(){
  celu = loadImage('img/celu.png');
}

function draw() {
  background('#770000');
  let centroX = width / 2;
  let centroY = height / 5;
  let r = min(width, height) * 0.15;
  let d = r / 6;

  stroke('#61D649');
  noFill();
   strokeWeight(8);
  
  // Globo
  ellipse(centroX, centroY, r * 2);

  // Cruz de líneas
  line(centroX - r, centroY, centroX + r, centroY);
  line(centroX, centroY - r, centroX, centroY + r);

  // Líneas curvas (latitudes)
  noFill();
  
 

  //horizontales
  bezier(centroX - r/1.35, centroY - r/1.5, centroX - r/2 , centroY - r/3 , centroX + r/2, centroY - r/3 , centroX + r/1.35, centroY - r/1.5); // superior
  bezier(centroX - r/1.35, centroY + r/1.5, centroX - r/2 , centroY + r/3 , centroX + r/2, centroY + r/3 , centroX + r/1.35, centroY + r/1.5); // inferior 

  //verticales
  bezier(centroX, centroY + r, centroX - r/1.5  , centroY + r /4, centroX - r/1.5 , centroY - r /4  , centroX, centroY - r); // superior
  bezier(centroX, centroY + r, centroX + r/1.5  , centroY + r /4 , centroX + r/1.5 , centroY - r /4 , centroX, centroY - r); // inferior 

  //círculos 
  fill('#000860');
  noStroke();
  //centro
  ellipse(centroX, centroY, r/6);

  //mediana vertical
  ellipse(centroX, centroY + r, r/6);
  ellipse(centroX, centroY - r, r/6);

  //mediana horizontal
  ellipse(centroX + r, centroY, r/6);
  ellipse(centroX - r, centroY, r/6);

  ellipse(centroX + r/2, centroY, r/6);
  ellipse(centroX - r/2, centroY, r/6);
  //superior
  ellipse(centroX + r/2.6, centroY - r/2.2, r/6);
  ellipse(centroX - r/2.6, centroY - r/2.2, r/6);
  //inferior
  ellipse(centroX + r/2.6, centroY + r/2.2, r/6);
  ellipse(centroX - r/2.6, centroY + r/2.2, r/6);

  for (let p of puntos) {
    let hovering =
      mouseX > p.x - d / 2 && mouseX < p.x + d / 2 &&
      mouseY > p.y - d / 2 && mouseY < p.y + d / 2;

    if (hovering) {
      fill('#EF4343');
      cursor('pointer');
    } else {
      fill('#000860');
      cursor('default');
    }
    ellipse(p.x, p.y, d);
  }


  //celu
  tint('#000860');
  rectMode(CENTER);

  //pantalla
  beginShape();
  fill('#61D649')
  vertex(centroX - celu.width/3.2, centroY * 4.02);
  vertex(centroX - celu.width/3, centroY * 4.6);
  vertex(centroX + celu.width/2.8, centroY * 4.6);
  vertex(centroX + celu.width/3.3, centroY * 4.04);
  endShape();
   
  //borde celu
  image(celu, centroX - celu.width/2.75, centroY * 3, celu.width * 0.75, celu.height * 0.75);
  
  //brillo pantalla
  
 // line(centroX + r, centroY, centroX, centroY * 4.2);
 // line(centroX - r, centroY, centroX, centroY * 4.2);

  // HAZ DE LUZ - EFECTO HOLOGRAMA
  let baseX = centroX;
  let baseY = centroY * 4.2; // centro de la pantalla

  let pasos = 80; // cuántas líneas/puntos hay
  let ancho = r * 2; // hasta qué ancho se abre
  
  let velocidad = 0.5; // controla qué tan rápido sube el brillo

  for (let i = 0; i < pasos; i++) {
    let t = i / pasos;

    // Posición interpolada
    let x1 = baseX - (ancho / 2) * t;
    let x2 = baseX + (ancho / 2) * t;
    let y = baseY + t * (centroY - baseY);


    let fase = (frameCount * velocidad - t * 10);
    let osc = sin(fase);
    

    // Color con degradado verde holograma
    let intensidad = map(osc, -1, 1, 0, 1);
    let c = lerpColor(color('#61D649'), color('#21C300'), intensidad); 

    stroke(c);
    strokeWeight(1.5);

    // Líneas finas desde el celular hacia el globo
    line(x1, y, x2, y);
  }



 
}

function mousePressed() {
 let r = min(width, height) * 0.15;
  let d = r / 6;

  for (let p of puntos) {
    let hovering =
      mouseX > p.x - d / 2 && mouseX < p.x + d / 2 &&
      mouseY > p.y - d / 2 && mouseY < p.y + d / 2;

    if (hovering) {
      window.location.href = paginas[p.i];
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
