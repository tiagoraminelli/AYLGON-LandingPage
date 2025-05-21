// cart.js
export function agregarAlCarrito(producto) {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
}
