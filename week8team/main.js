
let list = document.getElementById("result");

function fetchObject(url = "https://swapi.dev/api/people/") {

    fetch(url)
    .then(response => response.json())
    .then(data => {
      renderOneItem(list, data);
      renderLinkNext(data);
      renderLinkPrevious(data);
      console.log(data);
    })
}

function renderOneItem(parent, items) {    
    items.results.forEach(item => {
      parent.appendChild(renderList(item));
    });
}

function renderList(objItem) {
    const item = document.createElement('li');
    item.innerHTML = ` <h2>${objItem.name}</h2>
    <div>
      <p>Eye color: ${objItem.eye_color}</p>
      <p>Hair: ${objItem.hair_color}</p>
    </div>`;
 
    return item;
  }

  function renderLinkNext(objItem) {
    const screenResult = document.getElementById("result");
    const next = document.getElementById("next");
    next.onclick = () => {
      screenResult.innerHTML = '';
      fetchObject(`${objItem.next}`)
    }
  }

  function renderLinkPrevious(objItem) {
    const screenResult = document.getElementById("result");
    const previous = document.getElementById("previous");
    previous.onclick = () => {
      screenResult.innerHTML = '';
      fetchObject(`${objItem.previous}`)
  }
}

fetchObject();
