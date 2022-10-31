//corre solo una vez cuando inicia el programa
function setup(){
    console.log("setup ");
    
    createCanvas(1000, 1000);

}

//corre continuamente después de la función setup
function draw(){

    console.log("draw");

   // puntoPosicionRaton();
   //lineaPosicionRaton();
   //lineaPosicionRatonPulsado();
   //lineaBlancoNegro();
   lineacompleja();
}

/**
 * Dibuja un punto en la posición del cursor
 */
function puntoPosicionRaton(){
    console.log("puntoPosicionRaton");
    point(mouseX, mouseY);
}
/**
 * Dibuja con líneas continuas
 */
function lineaPosicionRaton(){
    console.log("lineaPosicionRaton");
    line(mouseX, mouseY, pmouseX, pmouseY);
}

/**
 * Dibuja con líneas continuas si se mantiene el mouse presionado
 */
 function lineaPosicionRatonPulsado(){
    console.log("lineaPosicionRatonPulsado");

    if(mouseIsPressed){
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
   
}

/**
 * Dibujar líneas con diferentes trazos de Grises
 * (Si presionamos el ratón pintamos en blanco sino en negro)
 */
function lineaRojoAzul(){
    if(mouseIsPressed){
        stroke(0,0,255);
    }else{
        stroke(255,0,0);
    }
    line(mouseX, mouseY, pmouseX, pmouseY);
}

function lineacompleja(){
    let red = random(0, 255);
    let green = random(0, 255);
    let blue = random(0, 255);
    stroke(red,green,blue);


    for(var i=0; i<50; i+=2){

        point(mouseX+i, mouseY+i);

    }
}
