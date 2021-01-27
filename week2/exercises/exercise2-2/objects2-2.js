const myGames = [
    { title: 'Monopoly', type: 'board game', numberOfPlayers: '2-8', rating: '5 stars', description: 'property trading game where players buy, sell, and trade properties.' },
    { title: 'Uno', type: 'card game', numberOfPlayers: '2-10', rating: '5 stars', description: 'classic card matching game with color coded and numbered cards. Each player endeavors to get rid of their cards before their opponents.' },
    { title: 'Mario Kart', type: 'video game', numberOfPlayers: '1-12', rating: '5 stars', description: 'go kart racing game where players select their favorite Mario character to compete against one another (or the computer) for the win! Of course, hyjinx ensues.' }
]
const userPrompt = window.prompt('I have 3 games in my collection. Pick a number between 1 and 3 and I will tell you about the game.');
alert('You selected ' + myGames[userPrompt - 1].title + ' which is a ' + myGames[userPrompt - 1].type + '. I rate the game with ' + myGames[userPrompt - 1].rating + '. You can play with ' + myGames[userPrompt - 1].numberOfPlayers + ' people. ' + myGames[userPrompt - 1].title + ' is a ' + myGames[userPrompt - 1].description);
