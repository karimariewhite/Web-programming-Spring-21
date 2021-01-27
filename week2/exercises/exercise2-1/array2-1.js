const movieFavs = ['Superman', 'Princess Bride', 'Tombstone', 'Love Actually', 'Avengers'];
const userMovie = window.prompt('What is your favorite movie?');
const newList = movieFavs.concat(userMovie);
console.log(newList.toString());
