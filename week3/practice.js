const superman = {
  name: 'Superman',
  realName: 'Clark Kent',
  height: 75,
  weight: 235,
  hero: true,
  villain: false,
  allies: ['Batman', 'Supergirl', 'Superboy'],
  fly() {
    return 'Up, up and away!';
  }
};

const spiderman = {};

// const name = 'Iron Man';
// const realName = 'Tony Stark';

// const ironMan = { name, realName};

const hulk = {
  name: 'Hulk',
  catchPhrase: 'Hulk Smash!'
};

const bewitched = true;
const captainBritain = {
  name: 'Captain Britain',
  hero: bewitched ? false : true
};

const name = Symbol('name');
const superGirl = { [name]: 'Supergirl'};
const realName = Symbol('real name');

const dareDevil = { [name]: 'Daredevil', [realName]:'Matt Murdoch'};

for(const key in superman) {
  console.log(`${key}: ${superman[key]}`);
}

for(const key in superman) {
  if(superman.hasOwnProperty(key)) {
    console.log(`${key}: ${superman[key]}`)
  }
}

for(const key of Object.keys(superman)) {
  console.log(key);
}

for(const key of Object.values(superman)) {
  console.log(key);
}

superman['realName'] = 'Kal-El';
superman.city = 'Metropolis';
for(const key of Object.values(superman)) {
  console.log(key);
}

delete superman.fly;
for(const key of Object.keys(superman)) {
  console.log(key);
}

const jla = {
  superman: {realName: 'Clark Kent'},
  batman: {realName: 'Bruce Wanye'},
  wonderWoman: {realName: 'Diana Prince'},
  flash: {realName: 'Barry Allen'},
  aquaman: {realName: 'Arthur Curry'}
}

const thor = {name: 'Thor'};
const cloneThor = thor;
cloneThor.name = 'Clor';

console.log(thor, cloneThor)

// this keyword practice.
const dice = {
  sides: 6,
  roll() {
    return Math.floor(this.sides * Math.random()) + 1;
  }
}

// JSON (JavaScript Object Notation) Format
const batman = {
 "name":"Batman",
 "realName": "Bruce Wayne",
 "height": 74,
 "weight": 210,
 "hero": true,
 "villain": false,
 "allies": ["Robin", "Batgirl", "Superman"]
}