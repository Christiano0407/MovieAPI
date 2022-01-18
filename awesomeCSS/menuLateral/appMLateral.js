console.group("Menú Lateral");
//Ejecutar función en el evento click>
document.getElementById(`btn_open`).addEventListener("click", open_close_menu);

//Declaramos variables>
const side_menu = document.getElementById(`menu__side`);
const btn_open = document.getElementById(`btn_open`);
const body = document.getElementById("body");

//Evento para mostrar y ocultar menú>
function open_close_menu() {
  body.classList.toggle("body__move");
  side_menu.classList.toggle(`menu__side__move`);
}

//Si el ancho de la página es menor a 760px, ocultará el menú al recargar la página>
if (window.innerWidth < 760) {
  body.classList.add("body__move");
  side_menu.classList.add("menu__side__move");
}

//Haciendo el menú responsive(adaptable)>

window.addEventListener("resize", function () {
  if (window.innerWidth > 760) {
    body.classList.remove("body__move");
    side_menu.classList.remove("menu__side__move");
  }

  if (window.innerWidth < 760) {
    body.classList.add("body__move");
    side_menu.classList.add("menu__side__move");
  }
});

console.groupEnd();
