const quiz = [
    { question: 'Which FRIENDS character has a twin?', answer: 'Phoebe' },
    { question: 'On the TV show FRIENDS, who was Monica\'s first kiss?', answer: 'Ross. She called him her Midnight Mystery Kisser' },
    { question: 'On the TV show FRIENDS, how many times was Ross married?', answer: 'Three (Carol, Emily, & Rachel' },
    { question: 'On the TV show FRIENDS, who does Gunther have a crush on?', answer: 'Rachel' },
    { question: 'Which FRIENDS character hates Thanksgiving?', answer: 'Chandler' },
    { question: 'On the TV show FRIENDS, what book does Joey keep in the Freezer?', answer: 'THE SHINING. Bonus points if you included LITTLE WOMEN' }
];

const randomIdx = Math.round(Math.random() * quiz.length - 1);
const userQuestion = window.prompt(quiz[randomIdx].question);
window.alert('You answered ' + userQuestion + '. The answer is ' + quiz[randomIdx].answer + '.');
