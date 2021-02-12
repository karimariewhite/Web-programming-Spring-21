/* eslint-disable indent */
let rectWidth = 50;
let rectX = 100
let clickCount = 0;

function setup () {
    createCanvas(500, 500);
}

function draw () {
    background(0);
    fill('teal');
    textSize(18);
    text('Catch me if you can!', 25, 30);
    rect(rectX, 100, rectWidth, 50);
    rectX += 3;
    if (rectX > width) {
        noLoop();
        text('Your score was ' + clickCount, 300, 450);
    }
}

function mousePressed () {
    if (mouseX >= rectX && mouseX <= rectX + rectWidth && mouseY >= 100 && mouseY <= 150) {
        rectWidth++;
        clickCount++;
    }
}
