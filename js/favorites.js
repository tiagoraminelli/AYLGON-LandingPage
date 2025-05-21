import { guardarEnLocalStorage, obtenerDeLocalStorage } from './storageUtils.js';

const FAV_KEY = 'favoritos';

export function agregarAFavoritos(producto) {
  const favoritos = obtenerDeLocalStorage(FAV_KEY);
  if (!favoritos.some(p => p.id === producto.id)) {
    favoritos.push(producto);
    guardarEnLocalStorage(FAV_KEY, favoritos);
  }
}

export function quitarDeFavoritos(idProducto) {
  const favoritos = obtenerDeLocalStorage(FAV_KEY).filter(p => p.id !== idProducto);
  guardarEnLocalStorage(FAV_KEY, favoritos);
}

export function obtenerFavoritos() {
  return obtenerDeLocalStorage(FAV_KEY);
}
