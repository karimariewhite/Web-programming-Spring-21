/* eslint-disable no-undef */
/* eslint-disable indent */
// variables for buttons and arrays
let myButtons = [];
let myCowbellButtons = [];
let rectX = 168;
const rectY = 625;
let cowbellX = 400;
const cowbellY = 550;
let echo, claves, clap, hats, pad, synth, cowbell, moreCowbell;

// variables for drawing
let waveX = 115;
let circleX, circleY;

function preload () {
    echo = loadSound('media/echo.mp3');
    claves = loadSound('media/claves.mp3');
    clap = loadSound('media/clap.mp3');
    hats = loadSound('media/hats.mp3');
    pad = loadSound('media/pad.mp3');
    synth = loadSound('media/synth.mp3');
    cowbell = loadSound('media/cowbell.mp3');
    moreCowbell = loadSound('media/morecowbell.mp3');
    futuraPt = loadFont
    img = loadImage('images/frame.png');
}

function setup () {
    // setting up canvas layout for centering in HMTL container
    var myCanvas = createCanvas(1000, 700);
    myCanvas.parent('canvasContainer');

    mySoundArray = [echo, claves, clap, hats, pad, synth];
    myCowbellArray = [cowbell, moreCowbell];
    let soundIdx = 0;
    let cowbellIdx = 0;

    angleMode(DEGREES);

    // set up first row of buttons -- cowbell
    for (let h = 0; h < 2; h++) {
        myCowbellButtons.push(new Button(cowbellX, cowbellY, myCowbellArray[cowbellIdx]));
        cowbellX += 116;
        cowbellIdx += 1;
    }
    // set up second row of buttons
    for (let i = 0; i < 6; i++) {
        myButtons.push(new Button(rectX, rectY, mySoundArray[soundIdx]));
        rectX += 116;
        soundIdx += 1;
    }

    // Adding p5 sound actions
    fft = new p5.FFT();
    peakDetect = new p5.PeakDetect();
    amplitude = new p5.Amplitude();

    // reset button
    resetSketch();
    var button = createButton('Clear Canvas');
    button.mousePressed(resetSketch);
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
    text('Cowbell', 418, 580);
    text('More', 545, 570);
    text('Cowbell', 535, 588);
    text('Echo', 198, 655);
    text('Claves', 308, 655);
    text('Clap', 430, 655);
    text('Hats', 547, 655);
    text('Pad', 665, 655);
    text('Synth', 776, 655);

    // single cowbell hit
    if (cowbell.isPlaying()) {
        fill(255);
        rect(75, 75, 850, 400);
    }

    // more cowbell plays
    if (moreCowbell.isPlaying()) {
        fill(random(255), random(255), random(255));
        rect(75, 75, 850, 400);
    }

    // Draws squares when hats is playing
    fft.analyze();
    peakDetect.update(fft);

    if (hats.isPlaying()) {
        peakDetect.onPeak(drawSquares);
    }

    // Draws lines for clap is playing
    if (clap.isPlaying()) {
        peakDetect.onPeak(drawLines);
    }

    // Draws bobbing circle for Pad sound
    if (pad.isPlaying()) {
        const waveY = sin(frameCount * 0.1) * 120.0;
        waveX++;
        waveX %= width - 115;
        noStroke();
        fill(0, 0, 255, random(30));
        ellipse(waveX, 300 + waveY, 20, 20);
    }

    // Draws circle in rows while echo is playing
    if (echo.isPlaying()) {
        fill(255, 255, 0, random(40));
        noStroke();
        for (let u = 0; u < 440; u += 80) { //    dotted lines rows
            ellipse(random(125, 860), u, u / 50);
        }
    }

    // Draws circles while claves is playing
    if (claves.isPlaying()) {
        circleX = random(125, 840);
        circleY = random(125, 440);
        const level = amplitude.getLevel();
        const diameter = map(level, 0, 1, 0, 20);
        for (let t = 0; t < 1; t++) {
            fill(random(255), random(255), random(255), random(255));
            ellipse(circleX, circleY, diameter);
        }
    }

    // Draws while Synth is Playing
    if (synth.isPlaying()) {
        const synthLevel = amplitude.getLevel();
        const rectW = 5;
        const rectH = 400;
        fill(255, 0, 255, random(50));
        rect(random(110, 880), 110, rectW, rectH * synthLevel);
        }

    // hides left side
    fill('white');
    noStroke();
    rect(0, 0, 50, 500);
    image(img, 50, 50);
}

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
    const beatX = random(110, 860);
    const beatY = random(110, 410);
    fill(255, 0, 0, random(255));
    rect(beatX, beatY, 25, 25);
}

// for clap sound -- draws lines in random places
function drawLines () {
    lineX1 = random(110, 860);
    lineY1 = random(110, 410);
    lineX2 = random(110, 860);
    lineY2 = random(110, 410);
    stroke(100, 65, 0, random(255));
    strokeWeight(2);
    line(lineX1, lineY1, lineX2, lineY2);
}

function resetSketch () {
    // Frame image setup
    fill(0);
    noStroke();
    rect(75, 75, 850, 400);
}
