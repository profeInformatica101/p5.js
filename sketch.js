const CELL_SIZE = 50;  // Size of each cell in the chessboard
const SPEED = 500;     // Movement speed of the robot (in milliseconds)

// Initial position of the robot (in chessboard coordinates)
let x = 1;
let y = 1;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);
  
  // Draw the chessboard
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if ((i + j) % 2 == 0) {
        fill(255);  // Light squares
      } else {
        fill(0);  // Dark squares
      }
      rect(i * CELL_SIZE, j * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    }
  }
  
  // Draw the robot
  fill(255, 0, 0);
  ellipse(x * CELL_SIZE + CELL_SIZE/2, y * CELL_SIZE + CELL_SIZE/2, CELL_SIZE/2);
}

function moveForward() {
  // Check if the robot is already at the edge of the chessboard
  if (y == 0) {
    return;  // Do nothing
  }
  y--;  // Move one cell forward
 // setTimeout(moveForward, SPEED);  // Repeat the movement after a delay
}

function backward(){
  if(y == 7){
    return; // Do nothing
  }
  y++; // Move one cells
  //setTimeout(backward, SPEED); // Repeat the movement after a delay

}



function turnLeft() {
  // Check if the robot is already at the edge of the chessboard
  if (x == 0) {
    return;  // Do nothing
  }
  x--;  // Move one cell to the left
  //setTimeout(turnLeft, SPEED);  // Repeat the movement after a delay
}



function turnRight() {
  // Check if the robot is already at the edge of the chessboard
  if (x == 7) {
    return;  // Do nothing
  }
  x++;  // Move one cell to the right
  //setTimeout(turnRight, SPEED);  // Repeat the movement after a delay
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    moveForward();
  } else if (keyCode == LEFT_ARROW) {
    turnLeft();
  } else if (keyCode == RIGHT_ARROW) {
    turnRight();
  }else if(keyCode == DOWN_ARROW) {
    backward();
  }
}
