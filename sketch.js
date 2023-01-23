function setup() {
  createCanvas(window.innerWidth, 400);
}

function draw() {
  background(220,200,150);
  fill(mouseX%255, mouseY%255, mouseX*mouseY%255);
  noStroke()
  ellipse(mouseX,mouseY, 10,10);
  stroke("blue")
  text("ICS4U Portfolio",window.innerWidth/2-window.innerWidth/30-10,200)
  text("By: Daegan",window.innerWidth/2-window.innerWidth/30,230)
}

