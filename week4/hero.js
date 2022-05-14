const form = document.forms['hero'];
const formName = document.getElementById('heroName');
console.log(form);
console.log(formName);
const label = form.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! Your name is not allowed to start with an X.';
label.append(error);

formName.addEventListener('keyup', validateInLine, false);
// form.addEventListener('keyup', validate);

function validateInLine() {
  const formName = this.value.toUpperCase();
  console.log(formName);

  if(formName.startsWith('X')) {
    error.style.display = 'block';
  } else {
    error.style.display = 'none';
  }
}

form.addEventListener('submit', validate);
form.addEventListener('submit', makeHero, false);

function validate(event) {
  const firstLetter = form.heroName.value[0];
  if (firstLetter.toUpperCase() === 'X') {
    event.preventDefault();
    alert('Your name is not allowed to start with X!')
  }
}

function makeHero(event) {
  event.preventDefault();
  const hero = {};
  hero.name = form.heroName.value;
  hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value);
  hero.category = form.category.value;
  hero.age = form.age.value;
  hero.city = form.city.value;
  hero.origin = form.origin.value;
  form.origin.value = 'Born as Kal-El on the planet Krypton';
  alert(JSON.stringify(hero));
  return hero;
  // hero.powers = [];
  // for (let i=0; i < form.powers.length; i++) {
  //   if (form.powers[i].checked) {
  //     hero.powers.push(form.powers[i].value);
  //   }
  // }
  
}


