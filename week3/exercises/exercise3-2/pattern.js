/* eslint-disable indent */
function setup () {
    createCanvas(600, 600);
    noLoop();
}

function createTile (x, y, background, medDiamondColor, smDiamondColor) {
    translate(x, y);
    noStroke();
    fill(background);
    rect(0, 0, 200, 200);

    // corners
    fill('#dba5ab');
    rect(0, 0, 20);
    rect(0, 180, 20);
    rect(180, 0, 20);
    rect(180, 180, 20);

    // large diamond
    fill('#5bc6cc');
    beginShape();
    vertex(0, 60);
    vertex(0, 140);
    vertex(60, 200);
    vertex(140, 200);
    vertex(200, 140);
    vertex(200, 60);
    vertex(140, 0);
    vertex(60, 0);
    endShape(CLOSE);

    // med diamond
    fill(medDiamondColor);
    quad(100, 0, 0, 100, 100, 200, 200, 100);

    // inner diamond
    fill(smDiamondColor);
    quad(100, 20, 20, 100, 100, 180, 180, 100);

    // lines
    noFill();
    stroke('#0a233f');
    strokeWeight(1);
    ellipse(100, 70, 20, 60);
    ellipse(70, 100, 60, 20);
    ellipse(100, 130, 20, 60);
    ellipse(130, 100, 60, 20);
    quad(100, 0, 0, 100, 100, 200, 200, 100);
    line(0, 20, 200, 20);
    line(0, 180, 200, 180);
    line(20, 0, 20, 200);
    // eslint-disable-next-line indent
    line(180, 0, 180, 200);
    line(60, 0, 0, 60);
    line(0, 140, 60, 200);
    line(140, 200, 200, 140);
    line(200, 60, 140, 0);
}

function draw () {
    createTile(0, 0, '#9ddae6', '#9ddae6', '#fdf2f4');
    createTile(0, 200, '#fdf2f4', '#9ddae6', '#b8dfca');
    createTile(0, 200, '#9ddae6', '#9ddae6', '#fdf2f4');
    createTile(200, -400, '#fdf2f4', '#fdf2f4', '#dba5ab');
    createTile(0, 200, '#9ddae6', '#9ddae6', '#fdf2f4');
    createTile(0, 200, '#fdf2f4', '#fdf2f4', '#dba5ab');
    createTile(200, -400, '#9ddae6', '#9ddae6', '#fdf2f4');
    createTile(0, 200, '#fdf2f4', '#9ddae6', '#b8dfca');
    createTile(0, 200, '#9ddae6', '#9ddae6', '#fdf2f4');
}