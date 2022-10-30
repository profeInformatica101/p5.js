
//corre solo una vez cuando inicia el programa
function setup(){
    console.log("setup");
    
    //createCanvas: ancho, alto en píxeles
    createCanvas(800,300);

    //background RGB : Define el color del fondo
    // RED --> background(255,0,0);
    // GREEN --> background(0,255, 0);
    // BLUE --> background(0,255, 0);

}

//corre continuamente después de la función setup
function draw(){
    console.log("draw");
    
    background(204);
    //ellipse(x, y, ancho, alto);

/**                             ( x, y)
 * Dibujo la elipse en posición (50,50) de 80 x 80 
 */

    fill('red'); //nombre del color
    ellipse(50, 50, 80, 80);
    
 /**                             
 * Dibujo la elipse de color verde en posición (100,100) de 50x50 
 */   
    fill(0,255,0); //Color en RGB
    ellipse(100, 100, 50, 50);

    //Test Circulo con evento 
    ellipseEnPosicionDelRaton();
}

function ellipseEnPosicionDelRaton(){
    //Evento si se pulsa el botón
    if(mouseIsPressed){
        fill('blue');
    }else{
        fill('green');
    }
    ellipse(mouseX, mouseY, 50, 50);

}
