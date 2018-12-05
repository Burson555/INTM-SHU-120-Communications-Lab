"use strict";

var totalNum = 100;
var b = [];

function setup() {
  createCanvas(800, 450);
  background(0);

  for (var i = 0; i < totalNum; i++){
    // b[i] = new Ball();
    b.push(new Ball(random(width), random(height)));
  }
}

function draw() {
  // background("blue");
  if (frameCount%4 == 1)
    b[frameCount].display();
  if (mouseIsPressed){
    b.push(new Ball(random(width), random(height)));
  }
  for (var i = 0; i < b.length; i++){
    b[i].move();
    b[i].display();
  }
}

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(30, 60);

    this.stepX = random(-2, 2);
    this.stepY = random(-2, 2);
  }
  display() {
    fill("pink");
    ellipse(this.x, this.y, this.size, this.size);
  }
  move() {
    this.x  = this.x + this.stepX;
    this.y  = this.y + this.stepY;
  }
}

// mouseDragged(), mouseReleased()
function mousePressed(){
  background("red");
}
