export function saveToLocalStorage(key, value) {
    window.localStorage.setItem(key, value);
}
export function getFromLocalStorage(key) {
    return window.localStorage.getItem(key) ;
}
