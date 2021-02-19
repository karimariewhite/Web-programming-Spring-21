/* eslint-disable indent */
// let drawTimer; Instead of using the draw function to draw your block, create a setInterval
// const speed = 50; sets the interval in milliseconds
// const distance = 2; sets value to move block on the y axis
// for speed setting smaller numbers means it goes faster

let blockX = 0;
let blockY = 0;
let blockColor = 255;
let drawTimer;
const speed = 20;
const distance = 2;

function setup () {
    // eslint-disable-next-line indent
    createCanvas(500, 500);
    background(0);
}

// Create a function that draws a square in a specific location. The fill color and the location should be function parameters.
// fill(color || 255); if parameter/color doesn't exist the || will default it to 255
function drawBlock (x, y, color) {
    fill(color || 255);
    rect(x, y, 50, 50);
}

// map function parameters pass in the named variable, the low input, the high input (which in this case is a number from 1 to 9 since we are specifying we want to use numbers with the keyToNumber let value), the low output, the high output.
// condidtional used to reset if the key entry isn't a number. isNaN means "is not a number"
function keyTyped () {
    let keyToNumber = Number(key);
    if (isNaN(keyToNumber)) {
        return;
    }
    keyToNumber = map(keyToNumber, 1, 9, 1, 255);
    console.log('converted number', keyToNumber);
    blockColor = keyToNumber;
}

// setInterval basically means this function will execute after the time interval and will continue to execute until we clear it.
// blockY += distance; moves block on y axis taking what existing value is and add distance value to it
// width and height are built in PJ5 functionality referring to the canvas
// conditional statement tells block to move down the canvas and then resets the block to start a new column when it reaches the bottom.
drawTimer = window.setInterval(() => {
    if (blockY - 50 <= height) {
        drawBlock(blockX, blockY, blockColor);
        blockY += distance;
    } else {
        blockY = 0;
        blockX += 50;
    }
    if (blockY - 50 > height && blockX - 50 > width) {
        window.clearInterval(drawTimer);
        alert('done');
    }
}, speed);
