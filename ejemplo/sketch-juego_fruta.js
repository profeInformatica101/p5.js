let fruit;
let score = 0;
let gravity = 0.03;
let fruitImage;

function preload() {
  fruitImage = loadImage('https://cdn-icons-png.flaticon.com/512/5826/5826334.png');
}

function setup() {
  createCanvas(600, 400);
  fruit = new Fruit();
}

function draw() {
  background(220);
  fruit.show();
  fruit.move();
  
  textSize(24);
  fill(0);
  text("Puntuación: " + score, 10, 30);
  
  if (fruit.y > height) {
    fruit.reset();
  }
}

function mouseClicked() {
  if (fruit.clicked()) {
    score++;
    fruit.reset();
  }
}

class Fruit {
  constructor() {
    this.x = random(width);
    this.y = 0;
    this.velocity = 0;
  }
  
  show() {
    image(fruitImage, this.x, this.y, 50, 50);
  }
  
  move() {
    this.y += this.velocity;
    this.velocity += gravity;
  }
  
  reset() {
    this.x = random(width);
    this.y = 0;
    this.velocity = 0;
  }
  
  clicked() {
    let d = dist(mouseX, mouseY, this.x, this.y);
    return d < 50;
  }
}
