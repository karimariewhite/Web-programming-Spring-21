/* eslint-disable indent */
let width = 50;

function setup () {
    createCanvas(500, 500);
    background(0);
}

function draw () {
    background(0);
    fill('teal');
    rect(100, 100, width, 50);
}

function mousePressed () {
    if(mouseX >= 50 && mouseX <= 150 && mouseY >= 50 && mouseY <= 150) { 
        width++;
    }
}
