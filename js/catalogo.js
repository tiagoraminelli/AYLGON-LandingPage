const contenedor = document.getElementById("productosContainer");
const categoriaSelect = document.getElementById("categoriaSelect");
const precioMax = document.getElementById("precioMax");
const precioMaxValor = document.getElementById("precioMaxValor");
const botonMostrarMas = document.getElementById("mostrarMasBtn");

// 🛒 Arreglo para guardar productos comprados
const carrito = [];

let productosFiltrados = []; // Lista tras aplicar filtros
let productosMostrados = 0;
const cantidadPorPagina = 10;

function renderProductos(lista, desde = 0, hasta = cantidadPorPagina) {
  const fragment = document.createDocumentFragment();

  lista.slice(desde, hasta).forEach(producto => {
    const card = document.createElement("div");
    card.className = "producto-card";
    card.innerHTML = `
      <img href="#" src="${producto.img}" alt="${(producto.titulo)}" />
      <h3>${producto.titulo.toUpperCase()}</h3>
      <p class="descripcion">${producto.descripcion}</p>
      <p class="categoria">${producto.categoria}</p>
      <p class="precio">$${producto.precio.toLocaleString()}</p>
        <p class="stock">Stock: ${producto.stock || "Sin stock"}</p> 
      <button class="btn-comprar" onclick='agregarAlCarrito(${JSON.stringify(producto)})' data-id="${producto.id}">🛒 Agregar al Carrito</button>
    `;

    // // ✅ Evento para agregar producto al carrito
    // const btnComprar = card.querySelector(".btn-comprar");
    // btnComprar.addEventListener("click", () => {
    //   carrito.push({
    //     id: producto.id,
    //     titulo: producto.titulo
    //   });
    //   //console.log("🛒 Carrito actual:", carrito);
    //         // Mostrar mensaje de éxito
    // //alert(`Producto ${producto.titulo} agregado al carrito.`);

    //   // Actualizar el carrito en el localStorage
    //     // localStorage.setItem("carrito", JSON.stringify(carrito));



    // });

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


const filtrosCategorias = document.getElementById("filtrosCategorias");

function generarFiltrosCategorias() {
  const conteo = {};

  productos.forEach(p => {
    conteo[p.categoria] = (conteo[p.categoria] || 0) + 1;
  });

  // "Todos" como opción por defecto
  let html = `
    <div class="form-check">
      <input class="form-check-input filtro-categoria" type="radio" name="categoria" id="catTodos" value="todos" checked>
      <label class="form-check-label" for="catTodos">Todos (${productos.length})</label>
    </div>
  `;

  for (const [categoria, cantidad] of Object.entries(conteo)) {
    const id = "cat" + categoria.replace(/\s/g, '');
    html += `
      <div class="form-check">
        <input class="form-check-input filtro-categoria" type="radio" name="categoria" id="${id}" value="${categoria}">
        <label class="form-check-label" for="${id}">${categoria} (${cantidad})</label>
      </div>
    `;
  }

  filtrosCategorias.innerHTML = html;

  // Listeners para nuevas categorías
  document.querySelectorAll(".filtro-categoria").forEach(el => el.addEventListener("change", filtrar));
}

function filtrar() {
  const categoriaSeleccionada = document.querySelector(".filtro-categoria:checked").value;
  const precio = parseInt(precioMax.value);
  const soloStock = document.getElementById("switchStock").checked;

  productosFiltrados = productos.filter(p =>
    (categoriaSeleccionada === "todos" || p.categoria === categoriaSeleccionada) &&
    p.precio <= precio &&
    (!soloStock || p.stock > 0)
  );

  contenedor.innerHTML = '';

  if (productosFiltrados.length === 0) {
    contenedor.innerHTML = '<p class="no-result">No se encontraron productos que coincidan con los filtros.</p>';
    botonMostrarMas.style.display = 'none';
    return;
  }

  productosMostrados = 0;
  renderProductos(productosFiltrados, 0, cantidadPorPagina);
}

// Eventos iniciales
precioMax.addEventListener("input", () => {
  precioMaxValor.textContent = `$${precioMax.value.toLocaleString()}`;
  filtrar();
});
document.getElementById("switchStock").addEventListener("change", filtrar);


// Inicial
productosFiltrados = productos;
generarFiltrosCategorias();
renderProductos(productosFiltrados, 0, cantidadPorPagina);
botonMostrarMas.addEventListener("click", () => {
  renderProductos(
    productosFiltrados,
    productosMostrados,
    productosMostrados + cantidadPorPagina
  );
});


