
    const contenedor = document.getElementById("productosContainer");
    const categoriaSelect = document.getElementById("categoriaSelect");
    const precioMax = document.getElementById("precioMax");
    const precioMaxValor = document.getElementById("precioMaxValor");

    function renderProductos(lista) {
      contenedor.innerHTML = '';
      lista.forEach(producto => {
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
        contenedor.appendChild(card);
      });
    }

    function filtrar() {
      const categoria = categoriaSelect.value;
      const precio = parseInt(precioMax.value);

      const filtrados = productos.filter(p =>
        (categoria === "todos" || p.categoria === categoria) &&
        p.precio <= precio
      );

      renderProductos(filtrados);
    }

    categoriaSelect.addEventListener("change", filtrar);
    precioMax.addEventListener("input", () => {
      precioMaxValor.textContent = `$${precioMax.value.toLocaleString()}`;
      filtrar();
    });

    // Inicial
    renderProductos(productos);
