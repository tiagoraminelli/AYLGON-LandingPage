function agregarAlCarrito(producto) {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  carrito.push(producto);
  localStorage.setItem('carrito', JSON.stringify(carrito));

  // Mostrar por consola el arreglo actualizado
  console.log('Carrito actualizado:', carrito);
}


function actualizarContadorCarrito() {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const badge = document.getElementById('cart-count');
  if (badge) badge.textContent = carrito.length;
}