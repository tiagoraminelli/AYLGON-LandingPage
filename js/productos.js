const productos = [
  {
    id: 1,
    titulo: "Labial Mate Intenso",
    descripcion: "Color vibrante y duradero, ideal para todo el día.",
    precio: 2500,
    descuento: 20,                // opcional
    categoria: "Maquillaje",
    img: "../img/placeholder.jpg",
    stock: 10
  },
  {
    id: 2,
    titulo: "Crema Hidratante Facial",
    descripcion: "Con ácido hialurónico para una piel más suave.",
    precio: 4800,
    descuento: 15,                // opcional
    categoria: "Cuidado facial",
    img: "../img/placeholder.jpg",
    stock: 2

  },
  {
    id: 3,
    titulo: "Perfume Floral Sensation",
    descripcion: "Aromas suaves con notas florales y frescas.",
    precio: 7200,
    descuento: 15, 
    categoria: "Fragancias",
    img: "../img/placeholder.jpg",
    stock: 10
  },
  {
    id: 4,
    titulo: "Esmalte Ultra Shine",
    descripcion: "Brillo duradero y secado rápido.",
    precio: 1800,
    categoria: "Uñas",
    img: "../img/placeholder.jpg",
    stock: 10,
    descuento: 10
  },
  {
    id: 5,
    titulo: "Shampoo Natural Detox",
    descripcion: "Limpieza profunda sin sulfatos.",
    precio: 3500,
    categoria: "Cabello",
    img: "../img/placeholder.jpg",
    stock: 10,
    descuento: 10
  },
    {
        id: 6,
        titulo: "Sombra de Ojos Mate",
        descripcion: "Colores intensos y larga duración.",
        precio: 2200,
        categoria: "Maquillaje",
        img: "../img/placeholder.jpg",
        stock: 12,
        descuento: 0
    },
    {
        id: 7,
        titulo: "Crema Corporal Nutritiva",
        descripcion: "Hidratación profunda para todo tipo de piel.",
        precio: 3000,
        categoria: "Cuidado corporal",
        img: "../img/placeholder.jpg",
        stock: 2,
        descuento: 0
    },
    {
        id: 8,
        titulo: "Gel Limpiador Facial",
        descripcion: "Limpieza suave y efectiva para el rostro.",
        precio: 2800,
        categoria: "Cuidado facial",
        img: "../img/placeholder.jpg",
        stock: 7,
        descuento: 25
    },
    {
        id: 9,
        titulo: "Aceite Esencial de Lavanda",
        descripcion: "Relajante y calmante, ideal para aromaterapia.",
        precio: 1500,
        categoria: "Fragancias",
        img: "../img/placeholder.jpg",
        stock: 5,
        descuento: 5
    },
    {
        id: 10,
        titulo: "Acondicionador Hidratante",
        descripcion: "Suavidad y brillo para el cabello.",
        precio: 3200,
        categoria: "Cabello",
        img: "../img/placeholder.jpg",
        stock: 2,
        descuento: 0
    },
    {
        id: 11,
        titulo: "Base Líquida Mate",
        descripcion: "Cobertura perfecta y acabado mate.",
        precio: 4000,
        categoria: "Maquillaje",
        img: "../img/placeholder.jpg",
        stock: 1,
        descuento: 0
    },
    {
        id: 12,
        titulo: "Exfoliante Corporal de Azúcar",
        descripcion: "Piel suave y renovada con cada uso.",
        precio: 3500,
        categoria: "Cuidado corporal",
        img: "../img/placeholder.jpg",
        stock: 6,
        descuento: 0
    },
    {
        id: 13,
        titulo: "Desodorante Natural",
        descripcion: "Protección efectiva sin químicos agresivos.",
        precio: 2000,
        categoria: "Cuidado corporal",
        img: "../img/placeholder.jpg",
        stock: 5,
        descuento: 0
    },
    {
        id: 14,
        titulo: "Máscara de Pestañas Voluminizadora",
        descripcion: "Pestañas largas y voluminosas todo el día.",
        precio: 3500,
        categoria: "Maquillaje",
        img: "../img/placeholder.jpg",
        stock: 2,
        descuento: 70
    },
    {
        id: 15,
        titulo: "Tónico Facial Revitalizante",
        descripcion: "Refresca y tonifica la piel al instante.",
        precio: 2700,
        categoria: "Cuidado facial",
        img: "../img/placeholder.jpg",
        stock: 5,
        descuento: 60
    },
    {
        id: 16,
        titulo: "Perfume Floral Sensation",
        descripcion: "Aromas suaves con notas florales y frescas.",
        precio: 7200,
        categoria: "Fragancias",
        img: "../img/placeholder.jpg",
        stock: 10,
        descuento: 0
    },
    {
        id: 17,
        titulo: "Esmalte Ultra Shine",
        descripcion: "Brillo duradero y secado rápido.",
        precio: 1800,
        categoria: "Uñas",
        img: "../img/placeholder.jpg",
        stock: 10,
        descuento: 0
    },
    {
        id: 18,
        titulo: "Shampoo Natural Detox",
        descripcion: "Limpieza profunda sin sulfatos.",
        precio: 3500,
        categoria: "Cabello",
        img: "../img/placeholder.jpg",
        stock: 10,
        descuento: 0
    },
    {
        id: 19,
        titulo: "Sombra de Ojos Mate",
        descripcion: "Colores intensos y larga duración.",
        precio: 2200,
        categoria: "Maquillaje",
        img: "../img/placeholder.jpg",
        stock: 12,
        descuento: 0
    },
    {
        id: 20,
        titulo: "Crema Corporal Nutritiva",
        descripcion: "Hidratación profunda para todo tipo de piel.",
        precio: 3000,
        categoria: "Cuidado corporal",
        img: "../img/placeholder.jpg",
        stock: 2,
        descuento: 0
    },
    {
        id: 21,
        titulo: "Gel Limpiador Facial",
        descripcion: "Limpieza suave y efectiva para el rostro.",
        precio: 2800,
        categoria: "Cuidado facial",
        img: "../img/placeholder.jpg",
        stock: 10,
        descuento: 0
    },
    {
        id: 22,
        titulo: "Aceite Esencial de Lavanda",
        descripcion: "Relajante y calmante, ideal para aromaterapia.",
        precio: 1500,
        categoria: "Fragancias",
        img: "../img/placeholder.jpg",
        stock: 5,
        descuento: 0
    },
    {
        id: 23,
        titulo: "Acondicionador Hidratante",
        descripcion: "Suavidad y brillo para el cabello.",
        precio: 3200,
        categoria: "Cabello",
        img: "../img/placeholder.jpg",
        stock: 2,
        descuento: 0
    },
    {
        id: 24,
        titulo: "Sombra de Ojos Mate",
        descripcion: "Colores intensos y larga duración.",
        precio: 2200,
        categoria: "Ojometria",
        img: "../img/placeholder.jpg",
        stock: 12,
        descuento: 85
    },

];
