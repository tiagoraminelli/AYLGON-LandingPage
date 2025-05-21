export function guardarEnLocalStorage(key, items) {
  localStorage.setItem(key, JSON.stringify(items));
}

export function obtenerDeLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}
