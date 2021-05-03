/* eslint-disable indent */
let yoff = 0.0;
var pos;

function setup () {
    createCanvas(500, 500);
    angleMode(DEGREES);
    background(200, 160, 120);
    pos = 0.0; // uses float value instead of integer
}

function draw () {
    var mySinVal = sin(pos); // sin function call for position
    const amplified = mySinVal * 200;
    const inc = 2;

    fill(0, 160, 240, 10); // blue water
    strokeWeight(5);
    stroke(255, 10); // white tips

    // create wave
    beginShape();
    let xoff = yoff
        for (let x = 0; x <= width; x += 20) {
        // Calculate a y value according to noise, map to
        const y = map(noise(xoff, yoff), 0, 1, amplified * 0.1, 500);
        // Set the vertex
        vertex(x, y); // Increment x dimension for noise
        xoff += 0.03; // increment y dimension for noise
        }
        yoff += 0.01;
        vertex(width, height);
        vertex(0, height);
        endShape();

        pos = pos + inc;
}
