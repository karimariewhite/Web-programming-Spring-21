function setup() {
  createCanvas(1500, 1000);
}
function draw() {
    if (mouseIsPressed) {
      fill(150, 0, 255);
      noStroke();
      blendMode(OVERLAY);
    } else {
      noFill();
      noStroke();
    }
    ellipse(mouseX, mouseY, 200, 200);
}
