
let x = 100;
let direction = 1;

function setup() {
  createCanvas(400, 400);
}


function draw() {
  background(220);
  ellipse(x, 200, 50);
  if (x > 375 && direction == 1) {
    direction = -1;
  } else if (x < 25 && direction == -1) {
    direction = 1;
  }
  x = x + direction * 1;
}
