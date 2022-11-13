//Variable que guarda la imagen.
let img; // Declare variable 'img'.
//Una lista para los circulos
let listaCirculo = new Array();


function setup() {
  console.log("setup");
  createCanvas(238, 332);
  img = loadImage('https://picsum.photos/238/332?random=1'); // Load the image
 
  //Instanciamos 3 objetos. Son de clase Circulo posicionados (x,y) y usando los colores RGB.
  c_rojo = new Circulo(50,50,'red');
  c_verde = new Circulo(125,125,'green');
  c_azul = new Circulo(200,200,'blue');

  listaCirculo.push(c_rojo);
  listaCirculo.push(c_verde);
  listaCirculo.push(c_azul);
}

function draw() {
  console.log("draw");

  // prompt("¿Quieres que te cuente el cuento de la buena pipa?"); //BORRAR

  // Displays the image at its actual size at point (0,0)
  image(img, 0, 0);
  // Displays the image at point (0, height/2) at half size
  image(img, 0, height / 2, img.width / 2, img.height / 2);

  listaCirculo.forEach(function(bolas){
    bolas.mover();
    bolas.mostrar();
   });
  
   dibujarCaballo();
  // ellipse(40,40, 40,40);
  mostrarHora();
}




/***
 * Clase Circulo
 */
class Circulo{
  diametro = 50;
  radio = this.diametro / 2;

  constructor(posX, poxY, color){
      this.color = color;
      this.x = posX;
      this.y = poxY;
  }

  mover(){
    this.x += random(-1, 1);
    this.y += random(-1, 1);
  }
 
  mostrar(){
    fill(this.color);
    ellipse(this.x,this.y,this.diametro,this.diametro);
  }



}

function mostrarHora(){
  //Objeto hora
let today = new Date();
  fill(255);
  textSize(32);
  hora = today.getHours();
  min = today.getMinutes();
  seg = today.getSeconds();
  text("Son las "+ esp_numero(hora), x_cuadradito_a_px(1), y_cuadradito_a_px(18));
  text(min+"minutos y", x_cuadradito_a_px(1), y_cuadradito_a_px(20));
  text(seg+"segundos.", x_cuadradito_a_px(1), y_cuadradito_a_px(22));


}

function esp_numero(numero){
  var res="";
      switch (hora%12) {
        case 0:
          res = "doce"
          break;
        case 1:
          res = "una"
          break;
        case 2:
          res = "dos"
          break;
        case 3:
          res = "tres"
          break;
        case 4:
          res = "cuatro"
          break;
        case 5:
          res = "cinco"
          break;
        case 6:
          res = "seis"
          break;
        case 7:
          res = "siete"
          break; 
        case 8:
            res = "ocho"
            break;  
        case 9:
            res = "nueve"
            break;
        case 10:
            res = "diez"
            break;
        case 11:
            res = "once"
            break;
        default:
           break;
      }
      return res;
}

function dibujarCaballo(){
  fill(0);
  textSize(45);
  text('VALOR: 3', 30, 40);
 
  beginShape();
  vertex(x_cuadradito_a_px(3), y_cuadradito_a_px(11));
  vertex(x_cuadradito_a_px(9), y_cuadradito_a_px(6));
  vertex(x_cuadradito_a_px(9), y_cuadradito_a_px(12));
  vertex(x_cuadradito_a_px(3), y_cuadradito_a_px(14));
  //agrega más vértices
endShape(CLOSE);

beginShape();
  vertex(x_cuadradito_a_px(9), y_cuadradito_a_px(6));
  vertex(x_cuadradito_a_px(10), y_cuadradito_a_px(4));
  vertex(x_cuadradito_a_px(11), y_cuadradito_a_px(6));
  vertex(x_cuadradito_a_px(14), y_cuadradito_a_px(15));
  vertex(x_cuadradito_a_px(9), y_cuadradito_a_px(15));
  //agrega más vértices
endShape(CLOSE);
fill(255);
 ellipse(x_cuadradito_a_px(9),y_cuadradito_a_px(9),20,20);
 fill('brown');
 ellipse(x_cuadradito_a_px(9),y_cuadradito_a_px(9),10,10);
rect(x_cuadradito_a_px(7),y_cuadradito_a_px(15), 120,120);
}



function x_cuadradito_a_px(pos_cuadradito_x){
  x_px= pos_cuadradito_x*238/15;
  return x_px; 
}
function y_cuadradito_a_px(pos_cuadradito_y){
y_py = pos_cuadradito_y*332/22;
return y_py;
}
