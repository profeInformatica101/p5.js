const JUG1 = 1;
const JUG2 = 5;

var nombreJugador1="";
var nombreJugador2="";

var turno = JUG1;

let tablero = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

//corre solo una vez cuando inicia el programa
function setup() {
  //console.log("setup - frameCount:"+frameCount);
  //createCanvas: ancho, alto en píxeles
  createCanvas(900, 900);
}

//corre continuamente después de la función setup
function draw() {
  //console.log("draw - frameCount:" + frameCount);
  clear();
  background(125);


  switch (comprobarGanador()) {
    case JUG1:
        
    pantallaGanador(JUG1);
        
    break;
    case JUG2:
      pantallaGanador(JUG2);
    break;

    default:
        pintarTablero();
        break;
  };

  punteroRaton();


}


function pantallaGanador(jugador){
  
  if(jugador == JUG1){
    //Gana el jugador 1
    fill('red');
    rect(0,0, width, height);
    fill('white');
    textSize(23);
    refrescaNombre();
    text("Gana el Jugador 1: "+ nombreJugador1, width/4, height/4, 200, 200);
  }else{
    //Gana el jugador 2
    fill('green');
    rect(0,0, width, height);
    fill('white');
    textSize(23);
    refrescaNombre();
    text("Gana el Jugador 2: "+ nombreJugador2, width/4, height/4, 100, 100);
  }

}


function pintarTablero(){
    fill("white");
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        switch (tablero[j][i]) {
          case JUG1:
            fill("red");
            break;
          case JUG2:
            fill("green");
            break;
          default:
            fill("white");
            break;
        }
        //Dibujo una Elipse
        ellipse(i * 300 + 150, j * 300 + 150, 300, 300);
      }
    }
}

//Pinta el puntero del ratón
function punteroRaton() {
  if (this.turno == JUG1) {
    fill("red");
  } else {
    fill("green");
  }
  ellipse(mouseX, mouseY, 100, 100);
}

//Evento click
addEventListener("click", click_en_tablero);
//Función para el evento
function click_en_tablero() {
  console.log("x: " + mouseX + ", y: " + mouseY);

  //Casilla a0
  if (mouseX < 300 && mouseY < 300) {
    console.log("a0");

    if (tablero[0][0] == 0) {
      tablero[0][0] = turno;
      cambiarTurno();
    }

    //Casilla a1
  } else if (mouseX < 600 && mouseY < 300) {
    console.log("a1");

    if (tablero[0][1] == 0) {
      tablero[0][1] = turno;
      cambiarTurno();
    }

    //Casilla a2
  } else if (mouseX < 900 && mouseY < 300) {
    console.log("a2");

    if (tablero[0][2] == 0) {
      tablero[0][2] = turno;
      cambiarTurno();
    }

    //Casilla b0
  } else if (mouseX < 300 && mouseY < 600) {
    console.log("b0");

    if (tablero[1][0] == 0) {
      tablero[1][0] = turno;
      cambiarTurno();
    }

    //Casilla b1
  } else if (mouseX < 600 && mouseY < 600) {
    console.log("b1");

    if (tablero[1][1] == 0) {
      tablero[1][1] = turno;
      cambiarTurno();
    }

    //Casilla b2
  } else if (mouseX < 900 && mouseY < 600) {
    console.log("b2");

    if (tablero[1][2] == 0) {
      tablero[1][2] = turno;
      cambiarTurno();
    }

    //Casilla C0
  } else if (mouseX < 300 && mouseY < 900) {
    console.log("c0");

    if (tablero[2][0] == 0) {
      tablero[2][0] = turno;
      cambiarTurno();
    }
    //Casilla C1
  } else if (mouseX < 600 && mouseY < 900) {
    console.log("c1");

    if (tablero[2][1] == 0) {
      tablero[2][1] = turno;
      cambiarTurno();
    }

    //Casilla C2
  } else if (mouseX < 900 && mouseY < 900) {
    console.log("c2");

    if (tablero[2][2] == 0) {
      tablero[2][2] = turno;
      cambiarTurno();
    }
  }

  console.log(tablero);
}

//Cambia la variable de turno
function cambiarTurno() {
  if (this.turno == JUG1) {
    this.turno = JUG2;
  } else {
    this.turno = JUG1;
  }
}

function comprobarGanador() {
  //Filas
  for (var i = 0; i < 3; i++) {
    if (
      tablero[i][0] == tablero[i][1] &&
      tablero[i][1] == tablero[i][2] &&
      tablero[i][0] != 0
    ) {
      return tablero[i][0];
    }
  }
  //Columnas
  for (var i = 0; i < 3; i++) {
    if (
      tablero[0][i] == tablero[1][i] &&
      tablero[1][i] == tablero[2][i] &&
      tablero[0][i] != 0
    ) {
      return tablero[0][i];
    }
  }

  //Diagonal1
  if (
    tablero[0][0] == tablero[1][1] &&
    tablero[1][1] == tablero[2][2] &&
    tablero[0][0] != 0
  ) {
    return tablero[0][0];
  }

  //Diagonal
  if (
    tablero[0][0] == tablero[1][1] &&
    tablero[1][1] == tablero[2][2] &&
    tablero[0][0] != 0
  ) {
    return tablero[0][0];
  }

  //Empate
  if (tablero.length > 8) {
    return -1;
  } else {
    //Se esta jugnado
    return 0;
  }
}

function refrescaNombre(){
 
    this.nombreJugador1 = document.getElementById("nombreJug1").value; 
    this.nombreJugador2 = document.getElementById("nombreJug2").value; 
  
}
  function empezar(){
    location.reload();
  }
