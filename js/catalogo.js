const contenedor = document.getElementById("productosContainer");
const categoriaSelect = document.getElementById("categoriaSelect");
const precioMax = document.getElementById("precioMax");
const precioMaxValor = document.getElementById("precioMaxValor");
const botonMostrarMas = document.getElementById("mostrarMasBtn");

let productosFiltrados = []; // Lista tras aplicar filtros
let productosMostrados = 0;
const cantidadPorPagina = 10;

function renderProductos(lista, desde = 0, hasta = cantidadPorPagina) {
  const fragment = document.createDocumentFragment();

  lista.slice(desde, hasta).forEach(producto => {
    const card = document.createElement("div");
    card.className = "producto-card";
    card.innerHTML = `
      <img src="${producto.img}" alt="${producto.titulo}" />
      <h3>${producto.titulo}</h3>
      <p class="descripcion">${producto.descripcion}</p>
      <p class="categoria">${producto.categoria}</p>
      <p class="precio">$${producto.precio.toLocaleString()}</p>
      <button class="btn-comprar">Comprar</button>
    `;
    fragment.appendChild(card);
  });

  contenedor.appendChild(fragment);

  productosMostrados = hasta;

  // Mostrar u ocultar el botón según queden productos por mostrar
  if (productosMostrados >= lista.length) {
    botonMostrarMas.style.display = 'none';
  } else {
    botonMostrarMas.style.display = 'block';
  }
}

function filtrar() {
  const categoria = categoriaSelect.value;
  const precio = parseInt(precioMax.value);

  productosFiltrados = productos.filter(p =>
    (categoria === "todos" || p.categoria === categoria) &&
    p.precio <= precio
  );

  contenedor.innerHTML = '';
  productosMostrados = 0;
  renderProductos(productosFiltrados, 0, cantidadPorPagina);
}

categoriaSelect.addEventListener("change", filtrar);
precioMax.addEventListener("input", () => {
  precioMaxValor.textContent = `$${precioMax.value.toLocaleString()}`;
  filtrar();
});

botonMostrarMas.addEventListener("click", () => {
  renderProductos(productosFiltrados, productosMostrados, productosMostrados + cantidadPorPagina);
});

// Inicial
productosFiltrados = productos;
renderProductos(productosFiltrados, 0, cantidadPorPagina);
