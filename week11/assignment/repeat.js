/* eslint-disable indent */

let option = 1;
var offset1 = 0;
var offset2 = 0;

function setup () {
  createCanvas(600, 400);
}

function draw () {
  background(0);

  if (option === 1) {
    // Option 1: diamond pattern
    const slant = 250;
    frameRate(2);

    for (let i = 25; i <= width; i += 50) { // creates the first row of diamonds
        for (let j = 0; j <= height; j += 80) { // creates rows down page
        fill(50);
        noStroke();
        quad(i, j, i + 25, j + 40, i, j + 80, i - 25, j + 40);
        }
    }
    for (let x = 50; x <= width + 200; x += 50) { // creates rainbow crisscross
        stroke(random(255), random(255), random(255));
        strokeWeight(3);
        line(x - slant, 400, x, 0);
        line(x, 400, x - slant, 0);
    }
  } else if (option === 2) {
    // Option 2: colored circles & white lines
        frameRate(1);
        fill('white');
        noStroke();

        for (let k = 0; k < height; k += 10) { //    dotted lines rows
            for (let n = 75; n < width; n += 75) { // dotted line columns
                ellipse(n, k, k / 50);
            }
        }
        for (let j = 0; j < 50; j++) { //   circles
            fill(random(255), random(255), random(255), random(255));
            ellipse(random(width), random(height), random(150));
        }
    } else if (option === 3) {
        frameRate(20);
    // Option 3: clocks
            for (startY = 50; startY <= height; startY += 150) {
                for (startX = 50; startX <= width; startX += 100) {
                    stroke('white');
                    noFill();
                    ellipse(startX + offset1, startY, 50);
                }
                offset1 = offset1 + 1;
            }
            for (startY = 125; startY <= height; startY += 150) {
                for (startX = 100; startX <= 550; startX += 100) {
                    stroke('blue');
                    noFill();
                    ellipse(startX + offset2, startY, 50);
                }
                offset2 = offset2 - 1;
            }
    }
}

function mousePressed () {
  option++;
  if (option > 3) option = 1;
}
