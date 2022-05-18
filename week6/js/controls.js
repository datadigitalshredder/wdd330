export function querySelection(selectorName) {
    return document.querySelector(selectorName);
}
export function readFromLocalStorage (key) {
    return JSON.parse(localStorage.getItem(key));
}
export function writeToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}
export function bindTouch(selector, callback) {
    const element = querySelection(selector);
    element.addEventListener('click', callback);
}