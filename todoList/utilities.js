export function qs(selectorName) {
  return document.querySelector(selectorName);
}

export function bindTouch(selector, callback) {
  const element = qs(selector);
  element.addEventListener('touched', e => {
    e.preventDefalut();
    callback;
  });
  element.addEventListener('click', callback);
}

export function readFromLS(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function writeToLS(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}