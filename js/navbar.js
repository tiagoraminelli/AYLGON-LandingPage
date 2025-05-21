document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("navbar-container");

  container.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top mt-2">
      <div class="container">
        <a class="navbar-brand fw-bold text-purple" href="#">AYLGON COSMETICS</a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navMenu">
          <ul class="navbar-nav ms-auto align-items-center">
            <li class="nav-item"><a class="nav-link" href="#productos">Productos</a></li>
            <li class="nav-item"><a class="nav-link" href="#footer">Contacto</a></li>

            <li class="nav-item position-relative me-3">
              <a class="nav-link" href="#" id="carrito-icon">
                🛒
                <span class="badge rounded-pill bg-purple position-absolute top-0 start-100 translate-middle" id="cart-count">0</span>
              </a>
              <div id="carrito-dropdown" class="bg-white p-2 border rounded shadow" style="position: absolute; top: 40px; right: 0; z-index: 1000; display: none; min-width: 200px;">
                <select id="carrito-select" class="form-select mb-2">
                  <option disabled selected>Productos en el carrito</option>
                </select>
                <button id="vaciar-carrito" class="btn btn-sm btn-danger w-100">Vaciar carrito</button>
                <button id="comprar-carrito" class="btn btn-sm btn-success w-100 mt-2">comprar</button>
              </div>
            </li>

            

            <li class="nav-item position-relative">
              <a class="nav-link" href="#favoritos" id="favoritos-icon">
                ❤️
                <span class="badge rounded-pill bg-purple position-absolute top-0 start-100 translate-middle" id="fav-count">0</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;

  // Mostrar productos en el dropdown del carrito
  const carritoIcon = document.getElementById('carrito-icon');
  const dropdown = document.getElementById('carrito-dropdown');
  const select = document.getElementById('carrito-select');
  const vaciarBtn = document.getElementById('vaciar-carrito');

  function actualizarDropdownCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    select.innerHTML = '<option disabled selected>Productos en el carrito</option>';
carrito.forEach((producto, i) => {
  if (producto && typeof producto === 'object') {
    const option = document.createElement('option');
    option.textContent = producto.titulo || `Producto ${i + 1}`;
    select.appendChild(option);
  }

  //  id="comprar-carrito" boton para confirmar compra y enviar por gmail
});

    document.getElementById('cart-count').textContent = carrito.length;
  }

  

const comprarBtn = document.getElementById('comprar-carrito');

comprarBtn.addEventListener('click', () => {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  if (carrito.length === 0) return;

  const numero = '5493408402912'; // Reemplazá por tu número real

  // Agrupar productos por título
  const conteo = {};
  carrito.forEach(producto => {
    const titulo = producto.titulo || 'Producto sin título';
    conteo[titulo] = (conteo[titulo] || 0) + 1;
  });

  // Crear el texto con cantidades
  const titulos = Object.entries(conteo)
    .map(([titulo, cantidad], i) => `${i + 1}. ${titulo} x${cantidad}`)
    .join('\n');

  const mensaje = encodeURIComponent(
    `Hola Aylen 👋,\nEstoy interesad@ en los siguientes productos:\n\n${titulos}\n\n¿Podés confirmarme disponibilidad y forma de pago? ¡Gracias!`
  );

  const url = `https://wa.me/${numero}?text=${mensaje}`;
  window.open(url, '_blank');

  // Limpiar el carrito después de la compra
  localStorage.removeItem('carrito');
  actualizarDropdownCarrito();
  dropdown.style.display = 'none';
});




  carritoIcon.addEventListener('click', (e) => {
    e.preventDefault();
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
    actualizarDropdownCarrito();
  });

  vaciarBtn.addEventListener('click', () => {
    localStorage.removeItem('carrito');
    actualizarDropdownCarrito();
    dropdown.style.display = 'none';
  });

  // Cerrar el dropdown si se hace click afuera
  document.addEventListener('click', (e) => {
    if (!carritoIcon.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.style.display = 'none';
    }
  });

  actualizarDropdownCarrito(); // Inicializa el contador
});


