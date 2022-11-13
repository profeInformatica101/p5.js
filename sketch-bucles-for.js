//Variable que guarda la imagen.
let img; // Declare variable 'img'.

let url_ods1 = 'https://i.ibb.co/R64DrV5/ods1.png';
let url_ods2 = 'https://i.ibb.co/TMt4QCP/ods2.png';
let url_ods3 = 'https://i.ibb.co/60s3XTF/ods3.png';
let url_ods4 = 'https://i.ibb.co/1dXzLYn/ods4.jpg';
let url_ods5 = 'https://i.ibb.co/nQJdMvh/ods5.png';
let url_ods6 = 'https://i.ibb.co/Dgm06Gw/ods6.jpg';
let url_ods7 = 'https://i.ibb.co/k6VhktN/ods7.jpg';
let url_ods8 = 'https://i.ibb.co/Js2Qpm1/ods8.jpg';
let url_ods9 = 'https://i.ibb.co/d5fjLXY/ods9.png';
let url_ods10 = 'https://i.ibb.co/JK3RXYs/ods10.png';
let url_ods11 = 'https://i.ibb.co/cbHCzGm/ods11.png';
let url_ods12 = 'https://i.ibb.co/7WjtpNB/ods12.jpg';
let url_ods13 = 'https://i.ibb.co/nryWqjZ/ods13.jpg';
let url_ods14 = 'https://i.ibb.co/5rfrdFJ/ods14.png';
let url_ods15 = 'https://i.ibb.co/QJ3BrK9/ods15.png';
let url_ods16 = 'https://i.ibb.co/Vjrh6MG/ods16.png';
let url_ods17 = 'https://i.ibb.co/gFVdZfL/ods17.png';


let ods_lista_url = new Array();
let ods_lista_img = new Array();

let lista_img = new Array();

//corre solo una vez cuando inicia el programa
function setup(){
    console.log("setup "+frameCount);

    this.ods_lista_url= inicializarLista();
    //img = loadImage(url_ods1);
   // img = loadImage(url_ods1);


    for(var i=0; i<this.ods_lista_url.length; i++){
        img = loadImage(this.ods_lista_url[i]);
        ods_lista_img.push(img);
    }

    createCanvas(1700,300);
    background(125);
}



function draw(){
    console.log("draw: "+frameCount);
   
    for(var i=0; i<ods_lista_img.length; i++){
        image(ods_lista_img[i], i*100, 30,200,200);
    }
    
    

}

function inicializarLista(){
    var ods_lista = new Array();
    ods_lista.push(url_ods1);
    ods_lista.push(url_ods2);
    ods_lista.push(url_ods3);
    ods_lista.push(url_ods4);
    ods_lista.push(url_ods5);
    ods_lista.push(url_ods6);
    ods_lista.push(url_ods7);
    ods_lista.push(url_ods8);
    ods_lista.push(url_ods9);
    ods_lista.push(url_ods10);
    ods_lista.push(url_ods11);
    ods_lista.push(url_ods12);
    ods_lista.push(url_ods13);
    ods_lista.push(url_ods14);
    ods_lista.push(url_ods15);
    ods_lista.push(url_ods16);
    ods_lista.push(url_ods17);
    return ods_lista;
}





