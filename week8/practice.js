let mice = document.querySelectorAll('#mouseContainer img');

let mouse = null;
for (let i=0; i < mice.length; i++) {
  mouse = mice[i];
  mouse.addEventListener('dragstart', function (event) {
    event.dataTransfer.setData('text/plain', this.id);
  });
}

let cat = document.getElementById('cat');
addEventListener('dragover', function(event) {
  event.preventDefault();
});

addEventListener('drop', function(event) {
  let mouseHash = {
    mouse1: 'MOMNOMNOM',
    mouse2: 'Meow',
    mouse3: 'Purrrr...'
  };

  let catHeading = document.getElementById('catHeading');
  let mouseID = event.dataTransfer.getData('text/plain');
  catHeading.innerHTML = mouseHash[mouseID];

  console.log(mouseID)
  let mousey = document.getElementById(mouseID);
  mousey.parentNode.removeChild(mousey);
  event.preventDefault();
});

