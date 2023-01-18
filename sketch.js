function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(mouse.x%255);
  ellipse(mouse.x,mouse.y, 100,100);
}
