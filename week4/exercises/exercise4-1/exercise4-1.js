// select empty div and assign it to a variable
const myEmptyDiv = document.querySelector('#myEmptyDiv');
// put an h1 inside of the variable (the empty div)
// create an h1 element and assign it to a variable
const heading = document.createElement('h1');
// assign new variable and then attach event listener to h1
heading.innerHTML = 'Llamas make excellent guards for herds of small animals. They are very social and will ‘adopt’ a group of sheep or goats as their own herd. Then they will protect the herd by chasing off coyotes and other predators.';
heading.addEventListener('click', handleHeadingClick);
// attach the heading to the DOM
myEmptyDiv.appendChild(heading);
// ceate a function to pass into the event listener
function handleHeadingClick () {
    document.body.style.backgroundColor = 'blue';
}
