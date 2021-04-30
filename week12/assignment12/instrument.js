/* eslint-disable indent */
let img;
let moo1;
let moo2;
let moo3;
let moo4;
let moo5;
let moo6;

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
}

function draw () {
    textAlign(LEFT);
    textSize(75);
    noStroke();
    fill(0);
    text('Let\'s make moosic!', 300, 150);
    textSize(20);
    text('Use your keyboard and the letters shown below to make moosic.', 330, 200);

    // S circle
    fill(255);
    stroke(0);
    ellipse(100, 450, 125);
    fill('red')
    noStroke();
    textSize(100);
    text('S', 65, 485);

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

function keyPressed () {
    if (key == 's') {
        moo1.play();
    } else if(key == 'd') {
        moo2.play();
    } else if(key == 'f') {
        moo3.play();
    } else if(key == 'j') {
        moo4.play();
    } else if(key == 'k') {
        moo5.play();
    } else if(key == 'l') {
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
