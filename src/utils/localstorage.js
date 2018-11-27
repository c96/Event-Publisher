export function saveLocalStorage(key, value) {
    window.localStorage.setItem(key, value);
    console.log('key: ' + key + ', value: ' + value);
  }
  