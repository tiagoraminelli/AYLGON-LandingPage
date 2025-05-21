document.addEventListener("DOMContentLoaded", function () {
  const footer = document.getElementById("footer");

  // Bloquear clic derecho en el footer
  footer.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });

  // Bloquear selección de texto
  footer.addEventListener("selectstart", (e) => {
    e.preventDefault();
  });

  // Bloquear copia con Ctrl+C o clic derecho
  footer.addEventListener("copy", (e) => {
    e.preventDefault();
  });
});
