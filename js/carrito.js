let carritoDeCompra = [];

function agregarAlCarrito(producto) {
  carritoDeCompra.push(producto);
  actualizarBotonCarrito();
}

function actualizarBotonCarrito() {
  let nav = document.querySelector(".navbar-nav");
  let btnExistente = document.getElementById("verCarritoBtn");

  if (!btnExistente) {
    let li = document.createElement("li");
    li.className = "nav-item";
    li.innerHTML = `
      <button class="btn btn-outline-purple ms-2" id="verCarritoBtn" data-bs-toggle="modal" data-bs-target="#modalCarrito">
        <i class="bi bi-cart-fill"></i> Ver carrito (<span id="cantidadCarrito">${carritoDeCompra.length}</span>)
      </button>
    `;
    nav.appendChild(li);
  } else {
    document.getElementById("cantidadCarrito").textContent = carritoDeCompra.length;
  }

  actualizarModalCarrito();
}

function actualizarModalCarrito() {
  const contenedor = document.getElementById("carritoContenido");

  if (!contenedor) return;

  contenedor.innerHTML = "";

  if (carritoDeCompra.length === 0) {
    contenedor.innerHTML = `<p class="text-muted">Tu carrito está vacío.</p>`;
    return;
  }

  // Agrupar productos por título (podés cambiar a ID si lo usás)
  const productosAgrupados = {};
  carritoDeCompra.forEach(producto => {
    if (productosAgrupados[producto.titulo]) {
      productosAgrupados[producto.titulo].cantidad += 1;
    } else {
      productosAgrupados[producto.titulo] = {
        ...producto,
        cantidad: 1
      };
    }
  });

  // Mostrar productos agrupados
Object.values(productosAgrupados).forEach((producto) => {
  const item = document.createElement("div");
  item.className = "d-flex flex-column flex-md-row align-items-start gap-3 border-bottom py-3";

  item.innerHTML = `
    <img src="${producto.img}" alt="${producto.titulo}" class="rounded" style="width: 80px; height: auto; object-fit: cover;">

    <div class="flex-grow-1">
      <h6 class="fw-semibold mb-1 text-dark">${producto.titulo}</h6>
      <div class="d-flex align-items-center gap-2 mb-2">
  <button class="btn btn-sm btn-outline-secondary" onclick="modificarCantidad('${producto.titulo}', -1)">–</button>
  <span class="fw-semibold">cant: ${producto.cantidad}</span>
  <button class="btn btn-sm btn-outline-secondary" onclick="modificarCantidad('${producto.titulo}', 1)">+</button>
</div>

      <div class="d-flex align-items-center gap-2">
        ${producto.precio ? `
          <span class="text-muted text-decoration-line-through small">$${producto.precio}</span>
          <span class="badge bg-danger small">-${producto.descuento}%</span>
        ` : ""}
        <span class="fw-bold text-dark">${+producto.precio * (1 - producto.descuento / 100) * producto.cantidad }</span>
      </div>
      
    </div>
    <button class="btn btn-outline-danger btn-sm ms-auto" onclick="eliminarProducto('${producto.titulo}')">
      <i class="bi bi-trash"></i>
    </button>
  `;

  contenedor.appendChild(item);
});
}


function modificarCantidad(titulo, cambio) {
  // Recorremos desde el final para evitar errores al eliminar
  for (let i = carritoDeCompra.length - 1; i >= 0; i--) {
    if (carritoDeCompra[i].titulo === titulo) {
      if (cambio > 0) {
        // Verificar stock actual
        const cantidadActual = carritoDeCompra.filter(p => p.titulo === titulo).length;
        if (cantidadActual < carritoDeCompra[i].stock) {
          carritoDeCompra.push({ ...carritoDeCompra[i] });
        }
      } else if (cambio < 0) {
        // Evitar que quede menos de uno
        const cantidadActual = carritoDeCompra.filter(p => p.titulo === titulo).length;
        if (cantidadActual > 1) {
          carritoDeCompra.splice(i, 1);
        }
      }
      break;
    }
  }

  actualizarBotonCarrito();
}


function eliminarProducto(titulo) {
  carritoDeCompra = carritoDeCompra.filter(p => p.titulo !== titulo);
  actualizarBotonCarrito();
}


function eliminarDelCarrito(index) {
  carritoDeCompra.splice(index, 1);
  actualizarBotonCarrito();
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("vaciarCarrito").addEventListener("click", () => {
    carritoDeCompra = [];
    actualizarBotonCarrito();
    actualizarModalCarrito();
  });

document.getElementById("comprarBtn").addEventListener("click", () => {
  if (carritoDeCompra.length === 0) {
    alert("Tu carrito está vacío.");
    return;
  }

  // Agrupar productos para obtener cantidades
  const productosAgrupados = {};
  carritoDeCompra.forEach(producto => {
    if (productosAgrupados[producto.titulo]) {
      productosAgrupados[producto.titulo].cantidad += 1;
    } else {
      productosAgrupados[producto.titulo] = {
        ...producto,
        cantidad: 1
      };
    }
  });

  // Crear mensaje para WhatsApp
  let mensaje = "¡Hola! Quiero hacer una compra 🛒:%0A%0A";
  Object.values(productosAgrupados).forEach(prod => {
    mensaje += `• ${prod.titulo} x${prod.cantidad} - ${prod.precio} - subtotal: ${prod.precio * prod.cantidad}%0A`;
  });
  // Calcular total
    const total = carritoDeCompra.reduce((acc, prod) => acc + prod.precio, 0);
    mensaje += `Total: ${total}%0A%0A`;
  mensaje += "%0A¿Me podrías confirmar disponibilidad y forma de pago? 🙏";

  // Número de teléfono (con código de país sin +)
  const telefono = "+5493408433314"; // Cambiá este número



  // Redirección a WhatsApp
  const url = `https://wa.me/${telefono}?text=${mensaje}`;
  window.open(url, "_blank");

  // si no existe un telefono, mostrar un mensaje de error


  // Limpiar carrito
  carritoDeCompra = [];
  actualizarBotonCarrito();
  actualizarModalCarrito();
});

});
