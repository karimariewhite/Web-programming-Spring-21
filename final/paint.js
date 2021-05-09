/* eslint-disable indent */

let myButtons = [];
const rectX = 50;
let rectY = 50;
let beat;

function preload () {
    mySoundArray = [
        loadSound('media/beat.wav'),
        loadSound('media/bass.wav')
    ];
    img = loadImage('images/frame.png');
}

function setup () {
    let soundIndex = 0;
    var myCanvas = createCanvas(1000, 750);
    myCanvas.parent('canvasContainer');

    fft = new p5.FFT();
    peakDetect = new p5.PeakDetect();

    // Frame image
    fill(0);
    noStroke();
    rect(475, 75, 450, 600);
    image(img, 450, 50);

    // set up buttons and add array sounds
    for (let i = 0; i < 2; i++) {
        myButtons.push(new Button(rectX, rectY, mySoundArray[soundIndex]));
        rectY += 60;
        soundIndex += 1;
    }
}

function draw () {
// Shows buttons
    for (let j = 0; j < myButtons.length; j++) {
        myButtons[j].show();
    }

// Draws squares when Beat is playing
/*     let beatX = 700;
    let beatY = 350; */
/*     fft.analyze();
    peakDetect.update(fft);

    if (peakDetect.isDetected) {
        beatX = random(500, 875);
        beatY = random(100, 625);
    } else {
        noFill();
    }
    Fill('red');
    rect(beatX, beatY, 25, 25);
} */
}
class Button {
    constructor (x, y, sound) {
        this.x = x;
        this.y = y;
        this.sound = sound;
        this.pressed = false;
    }

    show () {
        if (this.pressed) {
            fill('gray');
            rect(this.x, this.y, 100, 40);
        } else {
            fill('black');
            rect(this.x, this.y, 100, 40);
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
    for (let k = 0; k < myButtons.length; k++) {
        if (mouseX >= myButtons[k].x && mouseX <= myButtons[k].x + 100 && mouseY >= myButtons[k].y && mouseY <= myButtons[k].y + 40) {
            myButtons[k].pressed = !myButtons[k].pressed
            myButtons[k].play();
        }
    }
}
