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
    background(230);
    image(img, 18, 0);
    amplitude = new p5.Amplitude();
}

function draw () {
    let level = amplitude.getLevel();
    let size = map(level, .001, .1, 0, 2);
    textAlign(LEFT);
    textSize(75);
    noStroke();
    fill(0);
    text('Let\'s make moosic!', 300, 150);
    textSize(20);
    text('Use your keyboard and the letters shown below to make moosic.', 330, 200);

    // S circle
    if (moo1.isPlaying()) { // this seems clunkier than it could be
        console.log(level);
        fill(0);
        stroke(0);
        ellipse(100, 450, 125 * size);
        fill('red');
        noStroke();
        textSize(100);
        text('S', 65, 485);
    } else {
        fill(255);
        stroke(0);
        ellipse(100, 450, 125);
        fill('red')
        noStroke();
        textSize(100);
        text('S', 65, 485);
    }

    // D circle
    fill(255);
    stroke(0);
    ellipse(260, 450, 125);
    fill('red')
    noStroke();
    textSize(100);
    text('D', 227, 485);

    // F circle
    fill(255);
    stroke(0);
    ellipse(420, 450, 125);
    fill('red')
    noStroke();
    textSize(100);
    text('F', 390, 485);

    // J circle
    fill(255);
    stroke(0);
    ellipse(580, 450, 125);
    fill('red')
    noStroke();
    textSize(100);
    text('J', 555, 485);

    // K circle
    fill(255);
    stroke(0);
    ellipse(740, 450, 125);
    fill('red')
    noStroke();
    textSize(100);
    text('K', 705, 485);

    // L circle
    fill(255);
    stroke(0);
    ellipse(900, 450, 125);
    fill('red')
    noStroke();
    textSize(100);
    text('L', 875, 485);
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
