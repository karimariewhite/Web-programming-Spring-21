/* eslint-disable indent */
const DOWN = 'down';
const UP = 'up';
let myCards = [];
let startingX = 20;
let startingY = 20;
const gameState = {
    totalPairs: 6,
    flippedCards: [],
    numMatched: 0,
    attempts: 0,
    waiting: false
};
let cardBack;
let cardFaceArray = [];
let bgImage;

function preload () { // preloads images and put them into an array
    cardBack = loadImage('images/cardback.png');
    bgImage = loadImage('images/bgImage.jpg');
    cardFaceArray = [
        loadImage('images/chandler.png'),
        loadImage('images/joey.png'),
        loadImage('images/monica.png'),
        loadImage('images/phoebe.png'),
        loadImage('images/rachel.png'),
        loadImage('images/ross.png')
    ]
};

function setup () {
    createCanvas(1200, 800);
    let selectedFaces = [];
    for (let l = 0; l < 6; l++) {
        const randomIdx = floor(random(cardFaceArray.length));
        const face = cardFaceArray[randomIdx];
        // pushed twice because we need two copies of each card.
        selectedFaces.push(face);
        selectedFaces.push(face);
        // remove the used cards -- splice to pull out so they aren't randomly selected again.
        cardFaceArray.splice(randomIdx, 1);
    }

    // loop k is equivalent to the number of rows
    // loop i is how many "squares in the row"
    // pop the last item, but return it
    // pushes the card info into an array
    selectedFaces = shuffleArray(selectedFaces);
    for (let k = 0; k < 3; k++) {
        for (let i = 0; i < 4; i++) {
            const faceImage = selectedFaces.pop();
            myCards.push(new Card(startingX, startingY, faceImage));
            startingX += 200;
        }
        startingY += 260;
        startingX = 20;
    }
}

function draw () {
    background(bgImage);
    fill('white');
    textSize(80);
    textFont('felt-tip-roman');
    text('Match', 900, 180);
    text('Game', 900, 260);
    if (gameState.numMatched === gameState.totalPairs) {
        fill('#524fa2');
        textSize(66);
        text('You Win', 900, 400);
        textSize(30);
        text('Go get a Joey special!', 865, 450);
        noLoop();
    }
    // redraws if not a card match ! in front means "not so "if myCards.isMatch is false"
    for (let m = 0; m < myCards.length; m++) {
        if (!myCards[m].isMatch) {
            myCards[m].face = DOWN;
        }
        myCards[m].show();
    }
    noLoop();
    gameState.flippedCards.length = 0;
    gameState.waiting = false;
    fill(255);
    textSize(36);
    text('attempts ' + gameState.attempts, 925, 730);
    text('matches ' + gameState.numMatched, 925, 780);
}
// determines that only 2 cards can be flipped at a time when the mouse is pressed by pushing the flipped cards into an array.

function mousePressed () {
    // stops game if in waiting state as defined below otherwise
    if (gameState.waiting) {
        return;
    }
    for (let j = 0; j < myCards.length; j++) {
        // checks flipped cards length, and then trigger flip
        if (gameState.flippedCards.length < 2 && myCards[j].didHit(mouseX, mouseY)) {
            gameState.flippedCards.push(myCards[j]);
        }
    }
    // then check to see if the two image faces in the array match.
    if (gameState.flippedCards.length === 2) {
        gameState.attempts++;
        if (gameState.flippedCards[0].cardFaceImg === gameState.flippedCards[1].cardFaceImg) {
            // cards match - score.
            // mark cards as matched so don't flip back
            gameState.flippedCards[0].isMatch = true;
            gameState.flippedCards[1].isMatch = true;
            // empties the array
            gameState.flippedCards.length = 0;
            // increment the score
            gameState.numMatched++;
            loop();
        // cards don't match
        // sets waiting state so playters cant flip cards
        // sets brief timeout so players can commit cards to memory
        } else {
            gameState.waiting = true;
            const loopTimeout = window.setTimeout(() => {
                loop();
                window.clearTimeout(loopTimeout);
            }, 1000)
        }
    }
}

// this is the card template
class Card {
    constructor (x, y, cardFaceImg) { // setting up the template adding parameters so I can change location later
        this.x = x;
        this.y = y;
        this.width = 180;
        this.height = 240;
        this.face = DOWN;
        this.cardFaceImg = cardFaceImg;
        this.isMatch = false;
        this.show();
    }

    // show defines what face of the card is showing. checks to see if card is up first.
    show () {
        if (this.face === UP || this.isMatch) {
            noFill();
            noStroke();
            rect(this.x, this.y, this.width, this.height);
            image(this.cardFaceImg, this.x, this.y);
        } else {
            noFill();
            noStroke();
            rect(this.x, this.y, this.width, this.height);
            image(cardBack, this.x, this.y);
        }
    }

    // defines the method for the click targeting of the card
    didHit (mouseX, mouseY) {
        if (mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height) {
            this.flip();
            return true;
        } else {
            return false;
        }
    }

    // defines a method for how the card will be shown (up or down)
    flip () {
        if (this.face === DOWN) {
            this.face = UP;
        } else {
            this.face = DOWN;
        }
        this.show();
    }
}

// pass in the array of images to shuffle when called
function shuffleArray (array) {
let counter = array.length;
while (counter > 0) {
    // picks random idx
    const idx = Math.floor(Math.random() * counter);
    // decrease counter by 1
    counter--;
    // swap the last element with it
    const temp = array[counter];
    array[counter] = array[idx];
    array[idx] = temp;
}
return array;
}
