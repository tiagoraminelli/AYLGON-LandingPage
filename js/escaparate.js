function crearProductoHTML(producto) {
  return `
    <div class="card producto" style="max-width: 250px;">
    <!-- Botón para agregar a favoritos -->
      <img src="${producto.img}" class="card-img-top" alt="${producto.alt}">
      <div class="card-body">
        <small class="text-muted">${producto.etiqueta}</small>
        <h6 class="fw-bold mb-1">${producto.titulo}</h6>
        <span class="badge bg-success mb-1">CUPÓN: ${producto.cupon}</span>
        <p class="mb-1 text-danger fw-bold">${producto.precio}</p>
        <small class="text-muted">${producto.precioImpuestos}</small>
        <button value="${producto.id}" class="btn btn-sm btn-dark mt-2 w-100">Agregar al carrito</button>
      </div>
    </div>
  `;
}

function renderProductos() {
  const contenedor = document.getElementById('productSlider');
  contenedor.innerHTML = productos.map(crearProductoHTML).join('');
}

function agregarEventosScroll() {
  document.getElementById('scrollLeft').addEventListener('click', () => {
    document.getElementById('productSlider').scrollBy({ left: -300, behavior: 'smooth' });
  });

  document.getElementById('scrollRight').addEventListener('click', () => {
    document.getElementById('productSlider').scrollBy({ left: 300, behavior: 'smooth' });
  });
}

function agregarEventosBotonesCarrito() {
  const botones = document.querySelectorAll('.producto button');
botones.forEach(boton => {
  boton.addEventListener('click', () => {
    const id = parseInt(boton.value);
    const producto = productos.find(productos => productos.id === id);

    console.log("Producto agregado al carrito - ID:", id); // 👈 Agregado

    agregarAlCarrito(producto);
    actualizarContadorCarrito();

    boton.textContent = "Agregado ✔️";
    boton.disabled = true;
    setTimeout(() => {
      boton.textContent = "Agregar al carrito";
      boton.disabled = false;
    }, 1000);
  });
});
}








// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  
  renderProductos();
  agregarEventosScroll();
   setTimeout(() => {
    agregarEventosBotonesCarrito(); // <- agregá esto
    actualizarContadorCarrito();    // <- y esto
  }, 0);
});
