function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220,200,150);
  fill(Mouse.x%255);
  ellipse(Mouse.x,Mouse.y, 100,100);
}
