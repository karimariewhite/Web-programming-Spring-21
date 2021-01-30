const quiz = [
    { question: 'Which Friends character has a twin?', answer: 'Phoebe' },
    { question: 'Who was Monica\'s first kiss?', answer: 'Ross. She called him her Midnight Mystery Kisser' },
    { question: 'How many times was Ross married?', answer: 'Three (Carol, Emily, & Rachel' },
    { question: 'Who does Gunther have a crush on?', answer: 'Rachel' },
    { question: 'Who hates Thanksgiving?', answer: 'Chandler' },
    { question: 'What book does Joey keep in the Freezer?', answer: 'THE SHINING. Bonus points if you included LITTLE WOMEN' }
];

const randomIdx = Math.round(Math.random() * quiz.length - 1);
const userQuestion = window.prompt(quiz[randomIdx].question);
window.alert('You answered ' + userQuestion + '. The answer is ' + quiz[randomIdx].answer + '.');
