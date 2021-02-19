/* eslint-disable indent */
let startingX = 20;
let startingY = 20;
const rectW = 180;
const rectH = 240;
let myCards = [];
let startingId = 0;
function setup () {
    createCanvas(1200, 800);
    background(0);
    for (let k = 0; k < 3; k++) { // in this loop the k is equivalent to the number of rows
        for (let i = 0; i < 4; i++) { // in this loop i is how many "squares in the row"
            rect(startingX, startingY, rectW, rectH);
            myCards.push({ x: startingX, y: startingY, id: startingId }); // pushes the card info into an array for tracking
            startingX += 200;
            startingId++; // increments the ID from 0 to 11 (or however many cards i have)
        }
        startingY += 260;
        startingX = 20;
    }
    console.log(myCards);
}

function mousePressed () {
    for (let j = 0; j < myCards.length; j++) {
        if (mouseX >= myCards[j].x && mouseX <= myCards[j].x + rectW && mouseY >= myCards[j].y && mouseY <= myCards[j].y + rectH) {
            console.log('You hit card number ', myCards[j].id);
    }
    }
}
