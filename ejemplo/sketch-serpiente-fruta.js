let snake;
let scl = 20;
let foodHealthyImg, foodUnhealthyImg;
let foodHealthy, foodUnhealthy;

function preload() {
  foodHealthyImg = loadImage('https://cdn-icons-png.flaticon.com/512/5826/5826334.png');
  foodUnhealthyImg = loadImage('https://cdn-icons-png.flaticon.com/512/2454/2454268.png');
}

function setup() {
  createCanvas(600, 600);
  snake = new Snake();
  frameRate(5);
  pickLocation();
}

function pickLocation() {
  let cols = floor(width/scl);
  let rows = floor(height/scl);
  foodHealthy = createVector(floor(random(cols)), floor(random(rows)));
  foodHealthy.mult(scl);
  foodUnhealthy = createVector(floor(random(cols)), floor(random(rows)));
  foodUnhealthy.mult(scl);
}

function draw() {
  background(51);

  if (snake.eat(foodHealthy)) {
    pickLocation();
  }
  else if (snake.eat(foodUnhealthy)) {
    snake.reset();
  }

  snake.death();
  snake.update();
  snake.show();

  // draw the food
  image(foodHealthyImg, foodHealthy.x, foodHealthy.y, scl, scl); // draw healthy food image
  image(foodUnhealthyImg, foodUnhealthy.x, foodUnhealthy.y, scl, scl); // draw unhealthy food image
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.dir(0, 1);
  } else if (keyCode === LEFT_ARROW) {
    snake.dir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.dir(1, 0);
  }
}

function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];

  this.dir = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  this.eat = function(pos) {
    let d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.total++;
      return true;
    } else {
      return false;
    }
  }

  this.death = function() {
    for (let i = 0; i < this.tail.length; i++) {
      let pos = this.tail[i];
      let d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        console.log('starting over');
        this.reset();
      }
    }
  }

  this.update = function() {
    if (this.total === this.tail.length) {
      for (let i = 0; i < this.tail.length - 1 ; i++) {
        this.tail[i] = this.tail[i + 1];
        }
        }
        this.tail[this.total - 1] = createVector(this.x, this.y);
        this.x = this.x + this.xspeed * scl;
this.y = this.y + this.yspeed * scl;

// Check if the snake is out of bounds
if (this.x < 0 || this.x >= width || this.y < 0 || this.y >= height) {
  console.log('starting over');
  this.reset();
}

// Check if the snake eats itself
for (let i = 0; i < this.tail.length; i++) {
  let pos = this.tail[i];
  let d = dist(this.x, this.y, pos.x, pos.y);
  if (d < 1) {
    console.log('starting over');
    this.reset();
  }
}
}

this.reset = function() {
this.x = 0;
this.y = 0;
this.xspeed = 1;
this.yspeed = 0;
this.total = 0;
this.tail = [];
}

this.show = function() {
fill(255);
for (let i = 0; i < this.tail.length; i++) {
rect(this.tail[i].x, this.tail[i].y, scl, scl);
}
rect(this.x, this.y, scl, scl);
}
}
