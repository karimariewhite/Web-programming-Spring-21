/* eslint-disable indent */

let quiz = [
    { question: 'Which FRIENDS character has a twin?', answer: 'Phoebe' },
    { question: 'On the TV show FRIENDS, who was Monica\'s first kiss?', answer: 'Ross. She called him her Midnight Mystery Kisser' },
    { question: 'On the TV show FRIENDS, how many times was Ross married?', answer: 'Three (Carol, Emily, & Rachel' },
    { question: 'On the TV show FRIENDS, who does Gunther have a crush on?', answer: 'Rachel' },
    { question: 'Which FRIENDS character hates Thanksgiving?', answer: 'Chandler' },
    { question: 'On the TV show FRIENDS, what book does Joey keep in the Freezer?', answer: 'THE SHINING. Bonus points if you included LITTLE WOMEN' }
];

function next () {
    if (quiz.length < 1) {
        alert('You won!');
        return;
    }
    const randomIdx = Math.ceil(Math.random() * quiz.length - 1);
    return quiz[randomIdx];
}

let thisQuestion = next()
let message = thisQuestion.question;
     
function setup () {
    createCanvas(600, 500);
    heading = createElement('h2', ['A Short Quiz About Friends']);
    heading.position(50, 60);
}

function draw () {
    background('lightblue');
}
