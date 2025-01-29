const juegos3DS = [
  {
    titulo: "Super Mario 3D Land",
    año: 2011,
    imagen: "mario3dland.jpg",
    descripcion:
      "Un juego de plataformas en 3D que combina mecánicas clásicas de Mario con la exploración en un mundo tridimensional.",
  },
  {
    titulo: "Mario Kart 7",
    año: 2011,
    imagen: "mariokart7.jpg",
    descripcion:
      "Una entrega de la popular serie de carreras de Mario, introduciendo nuevas mecánicas como la personalización de karts y la posibilidad de volar y sumergirse en el agua.",
  },
  {
    titulo: "Super Smash Bros. for Nintendo 3DS",
    año: 2014,
    imagen: "smash.jpg",
    descripcion:
      "La primera entrega portátil de la serie de lucha, con un extenso elenco de personajes de Nintendo y otras franquicias.",
  },
  {
    titulo: "The Legend of Zelda: Majora's Mask 3D",
    año: 2015,
    imagen: "zeldamajora.jpg",
    descripcion:
      "Un remake del clásico de Nintendo 64, con gráficos mejorados y ajustes en la jugabilidad para la portátil de Nintendo.",
  },
  {
    titulo: "The Legend of Zelda: Ocarina of Time 3D",
    año: 2011,
    imagen: "zeldaocarina.jpg",
    descripcion:
      "Un remake del legendario juego de Nintendo 64, con gráficos mejorados, controles táctiles y una nueva versión Master Quest.",
  },
];
const contenedorCards = document.querySelector(".contenedor-cards");

juegos3DS.forEach((elemento) => {
  const juegoCard = document.createElement("div");
  juegoCard.classList.add("juego-card");

  const imagenDiv = document.createElement("div");
  imagenDiv.classList.add("imagen-card");

  const imagen = document.createElement("img");
  imagen.src = elemento.imagen;

  imagenDiv.appendChild(imagen);

  const informacionDiv = document.createElement("div");
  informacionDiv.classList.add("juego-informacion");

  const añoJuego = document.createElement("p");
  añoJuego.classList.add("año-juego");
  añoJuego.textContent = elemento.año;

  const tituloJuego = document.createElement("p");
  tituloJuego.classList.add("titulo-juego");
  tituloJuego.textContent = elemento.titulo;

  const descripcionJuego = document.createElement("p");
  descripcionJuego.classList.add("descripcion-juego");
  descripcionJuego.textContent = elemento.descripcion;

  informacionDiv.appendChild(añoJuego);
  informacionDiv.appendChild(tituloJuego);
  informacionDiv.appendChild(descripcionJuego);

  juegoCard.appendChild(imagenDiv);
  juegoCard.appendChild(informacionDiv);
  contenedorCards.appendChild(juegoCard);
});

/*
<p class="año-juego">2011</p>
            <p class="titulo-juego">SUPER MARIO 3D LAND</p>
            <p class="descripcion-juego">
              Una aventura nueva de mario para la consola Nintendo 3DS está
              aquí. Descubre el fantástico mundo de Mario por primera vez con 3D
            </p>
            */
