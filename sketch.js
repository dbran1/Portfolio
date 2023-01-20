function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220,200,150);
  fill(mouseX%255, mouseY%255, mouseX*mouseY);
  ellipse(mouseX,mouseY, 10,10);
  text("Mega Super Cool Portfolio",125,200)
  text("By: Daegan",160,230)
}
