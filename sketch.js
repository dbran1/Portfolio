function setup() {
  createCanvas(1500, 940);
}

function draw() {
  background(220,200,150);
  fill(mouseX%255, mouseY, mouseX*mouseY);
  ellipse(mouseX,mouseY, 10,10);
}
