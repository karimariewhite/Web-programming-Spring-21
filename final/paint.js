/* eslint-disable indent */

let myButtons = [];
let myCowbellButtons = [];
let rectX = 50;
let rectY = 650;
let cowbellX = 400;
let cowbellY = 525;
let echo, claves, clap, hats, mambo, pad, synth, chatter, cowbell, moreCowbell;

function preload () {
    echo = loadSound('media/echo.mp3');
    claves = loadSound('media/claves.mp3');
    clap = loadSound('media/clap.mp3');
    hats = loadSound('media/hats.mp3');
    mambo = loadSound('media/mambo.mp3');
    pad = loadSound('media/pad.mp3');
    synth = loadSound('media/synth.mp3');
    chatter = loadSound('media/talk.mp3');
    cowbell = loadSound('media/cowbell.mp3');
    moreCowbell = loadSound('media/morecowbell.mp3');
    futuraPt = loadFont
    img = loadImage('images/frame.png');
}

function setup () {
    // setting up canvas layout for centering in HMTL container
    var myCanvas = createCanvas(1000, 750);
    myCanvas.parent('canvasContainer');

    mySoundArray = [echo, claves, clap, hats, mambo, pad, synth, chatter];
    myCowbellArray = [cowbell, moreCowbell];
    let soundIdx = 0;
    let cowbellIdx = 0;

    // set up first row of buttons -- cowbell
    for (let h = 0; h < 2; h++) {
        myCowbellButtons.push(new Button(cowbellX, cowbellY, myCowbellArray[cowbellIdx]));
        cowbellX += 116;
        cowbellIdx += 1;
    }
    // set up second row of buttons
    for (let i = 0; i < 8; i++) {
        myButtons.push(new Button(rectX, rectY, mySoundArray[soundIdx]));
        rectX += 116;
        soundIdx += 1;
    }

    // Adding p5 sound actions
    fft = new p5.FFT();
    peakDetect = new p5.PeakDetect();
    amplitude = new p5.Amplitude();

    // reset button to clear canvas
    resetSketch();
    var button = createButton('Clear Canvas');
    button.mousePressed(resetSketch);
    button.position(550, 925);
}

function draw () {
    // Draws first row of sound buttons
    for (let g = 0; g < myCowbellButtons.length; g++) {
        myCowbellButtons[g].show();
    }

    // Draws second row of sound buttons
    for (let j = 0; j < myButtons.length; j++) {
        myButtons[j].show();
    }

    // Text for buttons
    textSize(16);
    textFont('Futura-PT');
    fill(0);
    text('Cowbell', 418, 555);
    text('More', 545, 545);
    text('Cowbell', 533, 563);
    text('Echo', 80, 680);
    text('Claves', 188, 680);
    text('Clap', 310, 680);
    text('Hats', 430, 680);
    text('Mambo', 535, 680);
    text('Pad', 662, 680);
    text('Synth', 773, 680);
    text('Chatter', 885, 680);

    // Draws squares when Beat is playing
    fft.analyze();
    peakDetect.update(fft);

    if (hats.isPlaying()) {
        peakDetect.onPeak(drawSquares);
    }
}
    // Draws lines for bass is playing
/*     if (bass.isPlaying()) {

} */
// class for button creation
class Button {
    constructor (x, y, sound) {
        this.x = x;
        this.y = y;
        this.sound = sound;
        this.pressed = false;
    }

    show () {
        if (this.pressed) {
            if (this.sound.isPlaying()) {
                noStroke();
                fill(210);
                rect(this.x, this.y, 90, 50, 25);
            } else {
                noStroke();
                fill(230);
                rect(this.x, this.y, 90, 50, 25);
            }
        } else {
            noStroke();
            fill(230);
            rect(this.x, this.y, 90, 50, 25);
        }
    }

    play () {
        if (this.pressed) {
            this.sound.play();
        } else {
            this.sound.stop();
        }
    }
}

function mousePressed () {
    // first row of buttons -- cowbell
    for (let f = 0; f < myCowbellButtons.length; f++) {
        if (mouseX >= myCowbellButtons[f].x && mouseX <= myCowbellButtons[f].x + 90 && mouseY >= myCowbellButtons[f].y && mouseY <= myCowbellButtons[f].y + 50) {
            myCowbellButtons[f].pressed = !myCowbellButtons[f].pressed
            myCowbellButtons[f].play();
        }
    }
    // second row of buttons
    for (let k = 0; k < myButtons.length; k++) {
        if (mouseX >= myButtons[k].x && mouseX <= myButtons[k].x + 90 && mouseY >= myButtons[k].y && mouseY <= myButtons[k].y + 50) {
            myButtons[k].pressed = !myButtons[k].pressed
            myButtons[k].play();
        }
    }
}

// For "hats" sound -- draws squares in random places
function drawSquares () {
    let beatX = random(110, 860);
    let beatY = random(110, 410);
    fill(360, 50, 25, random(360));
    rect(beatX, beatY, 25, 25);
}

// for bass sound -- draws lines in random places
/* function drawLines () {
    lineX1 = random(500, 875);
    lineY1 = random(100, 625);
    lineX2 = random(500, 875);
    lineY2 = random(100, 625);
    stroke('blue');
    strokeWeight(2);
    line(lineX1, lineY1, lineX2, lineY2);
} */
function resetSketch () {
    // Frame image setup
    fill(0);
    noStroke();
    rect(75, 75, 850, 400);
    image(img, 50, 50);
}