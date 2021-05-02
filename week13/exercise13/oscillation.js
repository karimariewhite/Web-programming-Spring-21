/* eslint-disable indent */
var pos, inc;
var slider;

function setup () {
    createCanvas(500,500);
    angleMode(DEGREES);
    pos = 0.0; // uses float value instead of integer
    slider = createSlider(0, 4, 4);
    slider.position(width/2 - 65, 490);
}

function draw() {
    var mySinVal = sin(pos); // sin function call for position
    let amplified = mySinVal * 100;
    let inc = slider.value();
    if (amplified > 1.0) {
        stroke(0, 0, 200, 50);
        ellipse(width/2, height/2, amplified + 50 * inc, amplified + 50 * inc);
    } else {
        stroke(0, 200, 0, 50);
        ellipse(width/2, height/2, amplified + 50 * inc, amplified + 50 * inc);
    }

    pos = pos + inc;
}