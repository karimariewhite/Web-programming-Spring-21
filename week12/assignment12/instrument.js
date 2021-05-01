/* eslint-disable indent */
let img, moo1, moo2, moo3, moo4, moo5, moo6, amplitude;

function preload () {
    moo1 = loadSound('media/moo.wav');
    moo2 = loadSound('media/moo2.wav');
    moo3 = loadSound('media/moo3.wav');
    moo4 = loadSound('media/mooalarmed.wav');
    moo5 = loadSound('media/moochorus.wav');
    moo6 = loadSound('media/mootagteam.wav');
    img = loadImage('media/cow-image.png');
}

function setup () {
    createCanvas(1000, 600);
    amplitude = new p5.Amplitude();
}

function draw () {
    background(230); // background here or the sketch changes are permanent
    image(img, 18, 0);
    const level = amplitude.getLevel(); // gets level from amp
    const diameter = map(level, 0, 0.01, 0, 0.1); // maps it to circle size
    textAlign(LEFT);
    textSize(75);
    noStroke();
    fill(0);
    text('Let\'s make moosic!', 300, 150);
    textSize(20);
    text('Use your keyboard and the letters shown below to make moosic.', 330, 200);

    // S circle
    if (moo1.isPlaying()) {
        // circle animating on level input
        fill(0);
        stroke(0);
        ellipse(100, 450, 125);
        ellipse(100, 450, 125 * (diameter * 1.5));
        // letter S
        fill('red');
        noStroke();
        textSize(100);
        text('S', 65, 485);
    } else {
        fill(255);
        stroke(0);
        strokeWeight(1);
        ellipse(100, 450, 125);
        fill('red')
        noStroke();
        textSize(100);
        text('S', 65, 485);
    }

    // D circle
    if (moo2.isPlaying()) {
        // circle animating on level input
        fill(0);
        stroke(0);
        ellipse(260, 450, 125);
        ellipse(260, 450, 125 * diameter);
        // letter D
        fill('red');
        noStroke();
        textSize(100);
        text('D', 227, 485);
    } else {
        fill(255);
        stroke(0);
        strokeWeight(1);
        ellipse(260, 450, 125);
        fill('red')
        noStroke();
        textSize(100);
        text('D', 227, 485);
    }

    // F circle
    if (moo3.isPlaying()) {
        // circle animating on level input
        fill(0);
        stroke(0);
        ellipse(420, 450, 125);
        ellipse(420, 450, 125 * (diameter * 1.5));
        // letter F
        fill('red');
        noStroke();
        textSize(100);
        text('F', 390, 485);
    } else {
        fill(255);
        stroke(0);
        strokeWeight(1);
        ellipse(420, 450, 125);
        fill('red')
        noStroke();
        textSize(100);
        text('F', 390, 485);
    }

    // J circle
    if (moo4.isPlaying()) {
        // circle animating on level input
        fill(0);
        stroke(0);
        ellipse(580, 450, 125);
        ellipse(580, 450, 125 * diameter);
        // letter J
        fill('red');
        noStroke();
        textSize(100);
        text('J', 555, 485);
    } else {
        fill(255);
        stroke(0);
        strokeWeight(1);
        ellipse(580, 450, 125);
        fill('red')
        noStroke();
        textSize(100);
        text('J', 555, 485);
    }

    // K circle
    if (moo5.isPlaying()) {
        // circle animating on level input
        fill(0);
        stroke(0);
        ellipse(740, 450, 125);
        ellipse(740, 450, 125 * diameter);
        // letter K
        fill('red');
        noStroke();
        textSize(100);
        text('K', 705, 485);
    } else {
        fill(255);
        stroke(0);
        strokeWeight(1);
        ellipse(740, 450, 125);
        fill('red')
        noStroke();
        textSize(100);
        text('K', 705, 485);
    }

    // L circle
    if (moo6.isPlaying()) {
        // circle animating on level input
        fill(0);
        stroke(0);
        ellipse(900, 450, 125);
        ellipse(900, 450, 125 * diameter);
        // letter K
        fill('red');
        noStroke();
        textSize(100);
        text('L', 875, 485);
    } else {
        fill(255);
        stroke(0);
        strokeWeight(1);
        ellipse(900, 450, 125);
        fill('red')
        noStroke();
        textSize(100);
        text('L', 875, 485);
    }
}

// relates keys to the correct sound files.
function keyPressed () {
    if (key === 's') {
        moo1.play();
    } else if (key === 'd') {
        moo2.play();
    } else if (key === 'f') {
        moo3.play();
    } else if (key === 'j') {
        moo4.play();
    } else if (key === 'k') {
        moo5.play();
    } else if (key === 'l') {
        moo6.play();
    }
}

//  function toggleSound () {
    //  if (myCrickets.isPlaying()) {
        //  myCrickets.stop();
    //  } else {
        //  myCrickets.play();
    //  }
//  }
