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
  Object.values(productosAgrupados).forEach((producto, index) => {
    const item = document.createElement("div");
    item.className = "d-flex justify-content-between align-items-center border-bottom py-2";
    item.innerHTML = `
      <div>
        <img src="${producto.img}" alt="${producto.titulo}" class="img-thumbnail me-2" style="width: 50px;">
        <strong>${producto.titulo}</strong> x${producto.cantidad}<br>
        <small class="text-muted">${producto.precio}</small>
      </div>
      <button class="btn btn-sm btn-danger" onclick="eliminarProducto('${producto.titulo}')">
        <i class="bi bi-trash"></i>
      </button>
    `;
    contenedor.appendChild(item);
  });
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
  const telefono = "+549"; // Cambiá este número

  if (!(telefono) || telefono.trim() === "") {
    // Si no hay número de teléfono, mostrar un mensaje de error
    alert("No se ha configurado un número de teléfono para WhatsApp.");
    return;
  }

  if (telefono.length < 10) {
    // Si el número de teléfono es demasiado corto, mostrar un mensaje de error
    alert("El número de teléfono es demasiado corto por lo tanto es invalido.");
    return;
  }

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
