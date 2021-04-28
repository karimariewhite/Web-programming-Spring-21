/* eslint-disable indent */
function setup () {
  createCanvas(600, 600);
}

function draw () {
    background(0);
    noStroke();
    // this is for the blue circle rows
    for (let circleY = 0; circleY < height + 1; circleY += 50) {
        // this is for the blue circle columns
        for (let circleX = 0; circleX < 625; circleX += 50) {
            fill('blue');
            ellipse(circleX, circleY, 50, 50);
        }
    }
    // loop for small circles in between rows
    // this is to create the rows
    for (let betweenY = 25; betweenY < mouseY; betweenY += 50) {
        // this is for the columns
        for (let betweenX = 25; betweenX < mouseX; betweenX += 50) {
            fill(0, 150, 255);
            ellipse(betweenX, betweenY, 20, 20);
        }
    }
}
