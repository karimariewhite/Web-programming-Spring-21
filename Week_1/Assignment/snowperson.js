let grid = undefined;
let book = window.prompt("type a basic color name in lowercase", "red");
function setup() {
    createCanvas(1000, 800);
    background("#262262");
    grid = loadImage("images/100px_grid.png");
}
function draw() {
    // background (grid);
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
    // snow
    stroke("#ffffff");
    strokeWeight(4);
    point(150, 200);
    point(250, 50);
    point(500, 120);
    point(650, 350);
    point(575, 300);
    point(650, 150);
    point(800, 200);
    point(825, 75);
    point(925, 325);
    point(25, 80);
    // note bases
    strokeWeight(20);
    stroke("blue");
    point(410, 110);
    point(450, 150);
    // note stems
    strokeWeight(6);
    line(412, 116, 440, 80);
    line(440, 80, 440, 100);
    line(457, 150, 457, 110);
    // face
    stroke("black");
    strokeWeight(4);
    fill("black");
    ellipse(370, 210, 20, 30);
    line(320, 180, 340, 170);
    line(360, 160, 376, 152);
    // carrot
    noStroke();
    fill("orange");
    triangle(357, 180, 363, 195, 412, 150);
    //ground
    fill("#f2f2f2");
    beginShape();
    vertex(0, 800);
    vertex(0, 680);
    vertex(200, 660);
    vertex(500, 690);
    vertex(700, 660);
    vertex(1000, 700);
    vertex(1000, 800);
    endShape(close);
    // trees
    fill(100, 255, 50);
    triangle(900, 400, 800, 600, 1000, 600);
    triangle(900, 250, 800, 450, 1000, 450);
    triangle(900, 100, 800,300, 1000, 300);
    // trunk
    fill("brown");
    rect(870, 600, 60, 100);
    // animal
    fill("#ffffff");
    stroke("#000000");
    strokeWeight(1);
    ellipse(600, 600, 150);
    ellipse(600, 485, 100);
    beginShape();
    vertex(580, 440);
    vertex(560, 410);
    vertex(560, 460);
    endShape();
    beginShape();
    vertex(620, 440);
    vertex(640, 410);
    vertex(640, 460);
    endShape();
    arc(580, 470, 15, 15, 3.14, 0);
    arc(620, 470, 15, 15, 3.14, 0);
    //animal face
    fill("#000000");
    ellipse(600, 490, 20, 15);
    ellipse(580, 467, 8);
    ellipse(620, 467, 8);
    line(590, 510, 610, 510);
}