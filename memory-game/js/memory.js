// Images

const listOfCards = () => {
  let cardData = [
    {}
  ]
}

const requestURL = 'https://dh5harris.github.io/wdd330/memory-game/data/data.json';
const memoryGame = document.getElementById('memory-game');

fetch(requestURL)
  .then(function (response) {
    return response.json
  })
  .then(function (jsonObject) {
    const images = jsonObject['images'];
    images.forEach(displayCards);
  });

  function displayCards(image) {
    const card = document.createElement('div')
    card.classList = 'card';

    card.setAttribute('id', card[i+1]);
    card.setAttribute('name', card.name);

    memoryGame.appendChild(card);
    
  }