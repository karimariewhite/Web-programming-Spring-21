/* eslint-disable indent */

function setup () {
    createCanvas(500, 500);
    background(0);
}

function draw () {
    fill('teal');
    rect(50, 50, 100, 100);
}

function mousePressed () {
    console.log (mouseX, mouseY); 
    if(mouseX >= 50 && mouseX <= 150 && mouseY >= 50 && mouseY <= 150) {
    console.log('right');
    }
}