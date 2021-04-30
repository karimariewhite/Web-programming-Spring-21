/* eslint-disable indent */
var myCrickets
let amplitude

function preload () {
    myCrickets = loadSound('media/crickets.mp3');
}

function setup () {
    const cnv = createCanvas(400, 400);
    cnv.mouseClicked(toggleSound);
    myCrickets.setVolume(1);
}

function draw () {
    background('lime');
    textAlign(CENTER);
    textSize(20);
    text('click square to play/pause the crickets', 20, 300);
}

function toggleSound () {
    if (myCrickets.isPlaying()) {
        myCrickets.stop();
    } else {
        myCrickets.play();
    }
}
