/* eslint-disable indent */
let width = 50;
var rectY = 100

function setup () {
    createCanvas(500, 500);
}

function draw () {
    background(0);
    fill('teal');
    rect(100, rectY, width, 50);
    rectY += 2;
}

function mousePressed () {
    if(mouseX >= 100 && mouseX <= 150 && mouseY >= 100 && mouseY <= 150) {
        width++;
    }
}
