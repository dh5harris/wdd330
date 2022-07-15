
const requestURL = 'https://dh5harris.github.io/wdd330/memory-game/data/data.json';
const game = document.getElementById('memory-game');
// let best = document.getElementById('best');
let moves = 0
// let bestScore = localStorage.getItem('score');
// console.log(bestScore);

// function getScore(key) {
//   bestScore = localStorage.getItem(key);
// }

// function addScore(key, value) {
//   localStorage.setItem(key, value)
// }


function fetchObject(url) {
  fetch(url)
  .then(response => response.json())
  .then(data => {
    // displayCard(game, images)
    displayCard(game, getImages(data));
    addCardListener();
  })
  // getScore('score');
  
}

function displayCard(parent, items) {
  items.forEach(item => {
    parent.appendChild(makeCard(item));
  });
}

function makeCard(objItem) {
  const item = document.createElement('div');
  item.classList.add('card');
  item.innerHTML = `<img class='front' src='${objItem.imageurl}' name='${objItem.name}'><img class='back' src='images/dinosaur.svg'>`;
  return item;
}

function getImages(objItem) {
  const images = [...objItem['images'],...objItem['images']];
  images.sort(() => Math.random() - 0.5);
  return images
}

function checkMatch() {
  const turnedOverCards = document.querySelectorAll('.turned-over');
  // moves++;
  console.log(turnedOverCards);
  if (turnedOverCards.length === 2) {
    // displayBest();
    displayTurns(moves);
    // getTurns(turnedOverCards.length % 2);
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

function addCardListener() {
  const items = document.querySelectorAll('.card');
  items.forEach(item => item.addEventListener('click', flipCard));
}

function flipCard(e) {
  const flipCards = e.target;
  flipCards.classList.toggle('flip');
  flipCards.classList.add('turned-over')
  moves++;
  checkMatch();
  setTimeout(checkWin, 500);
}

function checkWin() {
  const flippedCards = document.querySelectorAll('.flip');
  if (flippedCards.length === 16) {
    checkScore();
    displayMessage('You found all the matches!');

  }
}

function displayMessage(text) {
  document.getElementById('message').textContent = text
  setTimeout(removeMessage, 2000);
}

function removeMessage() {
  document.getElementById('message').textContent = '';
}


function displayTurns(number) {
  let turns = document.getElementById('turns')
  turns.textContent = number / 2;
}

// function displayBest() {
//   let best = document.getElementById('best');
//   if (bestScore === null) {
//     best.textContent = 0;
//   } else {
//     best.textContent = bestScore;
//   }
// }



// function checkScore()  {
  // if (bestScore <= localStorage.getItem('score') || bestScore === null) {
  //   addScore('score', moves);
  // };
//   addScore('score', moves);
// }


fetchObject(requestURL);