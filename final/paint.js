/* eslint-disable indent */
startingX = 100;
startingY = 500;
let cnvSlider;
let beat;
let rectX = 700;
let rectY = 350;

function preload () {
    beat = loadSound('media/looperman-l-4739663-0251836-dababy-type-drum-loop-with-808s.wav');
    img = loadImage('images/frame.png')
    fft = new p5.FFT();
    peakDetect = new p5.PeakDetect();
}

function setup () {
    var myCanvas = createCanvas(1000, 750);
    myCanvas.parent('canvasContainer');

    // Frame image and a slider to change the brightness of the canvas
    fill(0);
    noStroke();
    rect(475, 75, 450, 600);
    image(img, 450, 50);

    // Beat Button
    beatBtn = createButton('Beat');
    beatBtn.position(100, 200);
    beatBtn.mousePressed(togglePlaying);

    // Beat Color Slider
    colorMode(HSB);
    beatSlider = createSlider(0, 360, 60);
    beatSlider.position(300, 200);
    beatSlider.style('width', '100px');
}

function draw () {
    // Beat
    let beatClr = beatSlider.value();
    fill(beatClr, 255, 255, 1);
    rect(355, 75, 25, 25);
    fft.analyze(beat);
    peakDetect.update(fft);
        if (peakDetect.isDetected) {
            fill(beatClr, 100, 100, 1);
            rectX = random(500, 875);
            rectY = random(100, 625);
        } else {
            noFill();
        }
        rect(rectX, rectY, 25, 25);
        // fill(0, 0, cnvSlider.value());
}

function togglePlaying() {
    if (!beat.isPlaying()) {
        beat.play();
    } else {
        beat.pause();
    }
}