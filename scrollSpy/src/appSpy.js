const encabezados = document.querySelectorAll(`.contenedor .encabexado`);
console.log(encabezados);
const enlaces = document.querySelectorAll(`#enlaces a`);
console.log(enlaces);

const observer = new IntersectionObserver((entradas, observador) => {
  entradas.forEach(
    (entrada) => {
      if (entrada.isIntersecting) {
        const id = `#` + entrada.target.id;
        history.pushState({}, entrada.target.innerText, id);

        enlaces.forEach((enlace) => {
          enlace.classList.remove(`activo`);

          const href = enlace.attributes.href.nodeValue;
          if (href === id) {
            enlace.classList.add(`activo`);
          }
        });
      }
    },
    {
      threshold: 1,
      rootMargin: `0px 0px -50% 0px`,
    }
  );

  encabezados.forEach((encabezado) => {
    observer.observe(encabezado);
  });
});
