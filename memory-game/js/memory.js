
const requestURL = 'https://dh5harris.github.io/wdd330/memory-game/data/data.json';
const game = document.getElementById('memory-game');

let moves = 0


function fetchObject(url) {
  fetch(url)
  .then(response => response.json())
  .then(data => {
    displayCard(game, getImages(data));
    addCardListener();
  })
}

// Add the cards to the empty game div
function displayCard(parent, items) {
  items.forEach(item => {
    parent.appendChild(makeCard(item));
  });
}

// Build the cards for the game
function makeCard(objItem) {
  const item = document.createElement('div');
  item.classList.add('card');
  item.innerHTML = `<img class='front' src='${objItem.imageurl}' name='${objItem.name}'><img class='back' src='images/dinosaur.svg'>`;
  return item;
}

// Get the images from JSON file, add them tiwce to have matching pairs, and then randomly sort them
function getImages(objItem) {
  const images = [...objItem['images'],...objItem['images']];
  images.sort(() => Math.random() - 0.5);
  return images
}

// Check cards if they match, if not flip the cards back over, and display corresponding messages, 
function checkMatch() {
  const turnedOverCards = document.querySelectorAll('.turned-over');
  if (turnedOverCards.length === 2) {
    displayTurns(moves);
    if (turnedOverCards[0].children[0].name === turnedOverCards[1].children[0].name) {
      
      displayMessage('That is a match!')
      turnedOverCards.forEach(card => {
        card.classList.remove('turned-over');
        card.style.pointerEvents = 'none';
      });
    } else {
      displayMessage('Try again!');
      turnedOverCards.forEach(card => {
        card.classList.remove('turned-over');
        setTimeout( () => card.classList.remove('flip'), 1000);
      });
    }
  }
}

// Add event listener to each card so that they will flip over.
function addCardListener() {
  const items = document.querySelectorAll('.card');
  items.forEach(item => item.addEventListener('click', flipCard));
}

// Add the 'flip' and 'turned-over' classes, add to moves, and call CheckMatch function.
function flipCard(e) {
  const flipCards = e.target;
  flipCards.classList.toggle('flip');
  flipCards.classList.add('turned-over')
  moves++;
  checkMatch();
  setTimeout(checkWin, 500);
}

// Check if all the cards have been matched and display message
function checkWin() {
  const flippedCards = document.querySelectorAll('.flip');
  if (flippedCards.length === 16) {
    checkScore();
    displayMessage('You found all the matches!');
  }
}

// Display meesages and then remove message
function displayMessage(text) {
  document.getElementById('message').textContent = text
  setTimeout(removeMessage, 2000);
}

// Remove messages
function removeMessage() {
  document.getElementById('message').textContent = '';
}

// Display the number to turns or moves the player has made to the page
function displayTurns(number) {
  let turns = document.getElementById('turns')
  turns.textContent = number / 2;
}

fetchObject(requestURL);