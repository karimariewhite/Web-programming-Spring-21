/* eslint-disable indent */

let rotateBy = 5

function setup () {
    createCanvas(600, 600);
    // eslint-disable-next-line indent
    background('#000000');
    angleMode(DEGREES); // CHANGES ANGLES USED FROM RADIANS(NORM) TO DEGREES
}

// USER INPUT INTO DRAWING
userScaleIt = window.prompt('Choose a number between 1 and 10', 10);

// NEW FUNCTION THAT PASSES IN GLOBAL ROTATEBY VARIABLE AS A PARAMETER
function makeFlower (rotateBy) {
    // SETTING NEW VARIABLE FOR THIS BLOCK ONLY THAT CHANGES HOW THE FUNCTION ROTATES
    const alt = Math.round(rotateBy / 360);
    scale(userScaleIt * 0.1);
    noFill();
    strokeWeight(3);
    stroke('red');
    point(0, 0 + alt, 50 * alt);
    strokeWeight(2);
    stroke('orange');
    ellipse(50, 50 + alt, 50 - alt);
    stroke('yellow');
    ellipse(75, 75 + alt, 20, 40 - alt);
    stroke('blue');
    rect(125, 125 + alt, 50 + alt);
    stroke('green');
    line(100, 100 + alt, 125, 125 + alt);
}

function draw () {
    translate(300, 300); // RESETS THE CENTER FROM THE TOP LEFT CORNER TO CENTER
    rotate(rotateBy); // ROTATES THE CANVAS BY THE FUNCTION NAMED
    makeFlower(rotateBy);
    rotateBy += 50;
}

// NEW FUNCTION TO STOP LOOP WHEN MOUSE IS PRESSED
function mousePressed () {
    noLoop();
}
