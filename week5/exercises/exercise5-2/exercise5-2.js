/* eslint-disable indent */
let square;

function setup () {
    createCanvas(500, 500);
    square = new Square(); // defining variable as the "template"
}

function draw () {
    background(0); // put background here so it draws over the previous shape.
    square.move();
    square.show();
    }

class Square {
    constructor () {
        this.x = 250;
        this.y = 250;
        this.width = 50;
        this.height = 50;
    }

    // defines how I want the square to move on the canvas every time it redraws.
    move () {
        this.x = this.x + random (-5, 5);
        this.y = this.y + random(-5, 5);
    }

    // Defines how I want the square to look. At this point I've only defined its location and dimensions.
    show() {
        noFill();
        stroke(255);
        strokeWeight(2);
        rect(this.x, this.y, this.width, this.height);
    }
}
