/* eslint-disable indent */
const mySquares = [];
const startX = 250;
const startY = 250;
const squareW = 50;
const squareH = 50;

function setup () {
    createCanvas(500, 500);
    for (let i = 0; i < 7; i++) {
        const square = new Square(startX, startY, squareW, squareH); 
        mySquares.push(square);
    }
}

function draw () {
    background(0); 
    for (let j = 0; j < 7; j++) {
        mySquares[j].move();
        mySquares[j].show();
    }
 }

class Square {
    constructor (startX, startY, squareW, squareH) {
        this.x = startX;
        this.y = startY;
        this.width = squareW;
        this.height = squareH;
        this.show();
        this.move();
    }

    // defines how I want the square to move on the canvas every time it redraws.
    move () {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }

    // Defines how I want the square to look. At this point I've only defined its location and dimensions.
    show () {
        noFill();
        stroke(255);
        strokeWeight(2);
        rect(this.x, this.y, this.width, this.height);
    }
}
