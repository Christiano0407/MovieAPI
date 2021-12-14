const encabezados = document.querySelectorAll(".contenedor .encabezado");
const enlaces = document.querySelectorAll("#enlaces a");

console.log(encabezados);
console.log(enlaces);

// = Para observar =
const observer = new IntersectionObserver(
  (entradas, observador) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        const id = "#" + entrada.target.id; // => Para ubicar por ID / "#" es para unirlo en la web.
        history.pushState({}, entrada.target.innetText, id);

        // = Para marcar la sección de enlaces => color =
        // > Por cada enlace.
        enlaces.forEach((enlace) => {
          enlace.classList.remove("activo");

          const href = enlace.attributes.href.nodeValue;
          if (href === id) {
            enlace.classList.add("activo");
          }
        });
      }
    });
  },
  {
    threshold: 1,
    rootMargin: "0px 0px -50% 0px",
  }
);

// = Por cada Encabezado => Ser Observado =
encabezados.forEach((encabezado) => {
  observer.observe(encabezado);
});

// history => Barra de direcciones => Api de Javascript.
//  pushstate => estado / texto / dirección.
