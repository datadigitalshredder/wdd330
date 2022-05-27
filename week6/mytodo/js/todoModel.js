export function writeToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

export function bindTouch(selector, callback) {
    const element = querySelection(selector);
    element.addEventListener('click', callback);
}