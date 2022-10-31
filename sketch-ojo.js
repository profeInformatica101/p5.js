
//corre solo una vez cuando inicia el programa
function setup(){
    console.log("setup");
    
    //createCanvas: ancho, alto en píxeles
    createCanvas(800,300);

    //Color de fondo
    background(0);

    //La función noStroke() elimina el borde de las figuras.
    noStroke();

}

//corre continuamente después de la función setup
function draw(){
    console.log("draw");
    
    ojo(165,144);
    ojo(100,150);

}
function ojo(x, y){
    fill(255);
    ellipse(x, y, 100, 100);
    fill(0,0, 255);
    ellipse(x+10,y,40,40);
    fill(255);
    ellipse(x+15, y, 10, 10);
}

