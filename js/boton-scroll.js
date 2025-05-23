
  const scrollBtn = document.getElementById("scrollTopBtn");

  // Mostrar/ocultar el botón según el scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.remove("d-none");
    } else {
      scrollBtn.classList.add("d-none");
    }
  });

  // Volver al inicio suave
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
