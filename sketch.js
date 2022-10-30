
var x_ellipse = 0;
var y_ellipse = 0;
//corre solo una vez cuando inicia el programa
function setup(){

    console.log("setup ");
    
    //createCanvas: ancho, alto en píxeles
    createCanvas(800,300);
    //Color de fondo
    background('#B2B5B5');

  
    fill('green');
    ellipse(x_ellipse,y_ellipse, 50, 50);
}

//corre continuamente después de la función setup
function draw(){

    console.log("draw");
    
    imprimirTeclaPulsada();
    moverEllpseConTeclado();
}

/**
 * Función para comprobar las teclas
 */9
function imprimirTeclaPulsada(){
    if(keyIsPressed){
        console.log(keyCode);
    }
}


function moverEllpseConTeclado(){
    switch(keyCode){
        case 38:
            ellipse(x_ellipse, y_ellipse = y_ellipse - 1, 50, 50);
            break;
            case 39:
            ellipse(x_ellipse = x_ellipse+1, y_ellipse , 50, 50);
            break;
        case 40:
            ellipse(x_ellipse, y_ellipse = y_ellipse + 1, 50, 50);
            break;
    }
}
