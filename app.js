const formulario = document.querySelector(".fila-botones");
const listaMetas = document.querySelector(".lista-metas");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault(); //no quiero que se recargue la pagina ni "Enviar" los datos
  //a ningun lado
  const metaIntroducida = document.querySelector(".fila-botones input");
  metaIntroducida.value = metaIntroducida.value.trim(); //asegurarnos de que no
  //haya espacios vacios al inicio o al final.
  if (metaIntroducida.value === "") {
    alert("No escribas metas vacias");
    formulario.reset();
  } else {
    const metaParrafo = document.createElement("p");
    metaParrafo.textContent = metaIntroducida.value;
    listaMetas.appendChild(metaParrafo);
    formulario.reset();
  }
});
