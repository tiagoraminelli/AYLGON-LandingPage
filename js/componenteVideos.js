// Lista de rutas de los videos
const videos = [
  "videos/Viví-la-Biobelleza.mp4",
  "videos/Nuevo-Super-Sérum-Reductor-de-Arrugas.mp4",
  "videos/Con Natura Lumina Reconstrucción-de-Daños-Extremos.mp4",
  "videos/Humor-quimica.mp4",
];

// Crear wrapper principal
const section = document.createElement("section");
section.className = "py-5 bg-white";
section.innerHTML = `
  <div class="container">
    <h2 class="fw-bold text-center">¡Nuestros productos en acción!</h2>
    <p class="text-center text-purple mb-5">
      Momentos reales: Así disfruta nuestra comunidad. Compartí tu experiencia usando <strong>#onlinecosmeticos</strong> en Instagram.
    </p>
    <div class="row g-3" id="video-grid"></div>
  </div>
  <style>
    .video-wrapper {
      position: relative;
      width: 100%;
      aspect-ratio: 9 / 16;
      overflow: hidden;
      border-radius: 0.5rem;
    }
    .video-item {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 0.5rem;
    }
  </style>
`;

// Inyectar sección al DOM
document.getElementById("productos-en-accion").appendChild(section);

// Agregar los videos
const grid = section.querySelector("#video-grid");

videos.forEach((src) => {
  const col = document.createElement("div");
  col.className = "col-6 col-md-4 col-lg-3";

  col.innerHTML = `
    <div class="video-wrapper">
      <video class="video-item" autoplay muted loop playsinline>
        <source src="${src}" type="video/mp4" />
        Tu navegador no soporta este video.
      </video>
    </div>
  `;

  grid.appendChild(col);
});
