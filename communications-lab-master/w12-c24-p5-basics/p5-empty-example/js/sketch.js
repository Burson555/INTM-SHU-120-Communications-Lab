var x;
var y;
var size;

function setup() {
  createCanvas(900,600);
  // createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  x = width/2;
  y = height/2;
  size = 100;
  xSpd = 1;
  ySpd = -1;
  // fill(0, 255, 0);
}

function draw() {

  // background(200);
  // update
  x = x + xSpd;
  y = y + ySpd;
  size = size + 1;
  // check or compare

  // display
  fill(255,0,0);
  ellipse(x, y, size, size);
  // ellipse(width/2, height/2, 100, 100);
}
