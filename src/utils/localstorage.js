export function saveLocalStorage(key, value) {
    window.localStorage.setItem(key, value);
    console.log('key: ' + key + ', value: ' + value);
  }
  
export function loadLocalStorage(key) {
  return window.localStorage.getItem(key);
}

export function printLocalStorage(key) {
  console.log(window.localStorage.getItem(key));
}
