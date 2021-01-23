let grid = undefined;
let book = window.prompt("type a basic color name in lowercase", "red");
function setup() {
    createCanvas(1000, 800);
    background("#262262");
    grid = loadImage("images/100px_grid.png");
}
function draw() {
    background (grid);
    // snowperson base
    fill("#f1f1f1");
    stroke("ccc");
    strokeWeight(5);
    ellipse(300, 570, 300, 270);
    ellipse(300, 355, 220, 200);
    ellipse(300, 200, 180);
    // snowperson shoulders
    stroke("#754C29");
    strokeWeight(7);
    line(205, 300, 145, 380);
    line(397, 300, 455, 345);
    // book
    fill(book);
    noStroke();
    quad(315, 300, 315, 450, 410, 425, 410, 270);
    rect(290, 300, 25, 150);
    quad(290, 300, 290, 450, 190, 425, 190, 270);
    // snowperson left arm
    stroke("#754C29");
    strokeWeight(7);
    line(145, 380, 200, 455);
    line(183, 430, 220, 400);
    line(190, 430, 250, 430);
    // snowperson right arm
    line(455, 345, 415, 425);
    line(400, 370, 430, 380);
    line(380, 405, 430, 385);
    // hat
    fill("purple");
    noStroke();
    ellipse(215, 150, 20, 40);
    ellipse(325, 105, 30, 30);
    quad(210, 130, 320, 90, 330, 120, 210, 172);
    stroke("purple");
    strokeWeight(15);
    line(220, 170, 360, 110);
}
