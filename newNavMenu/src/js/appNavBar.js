/* const burgerNav = document.getElementById(`nav`); */
/* const navMenu = document.getElementById(`navMenu`); */
/*  */
/* burgerNav.addEventListener(`click`, () => { */
/*   burgerNav.classList.toggle(`active`); */
/*   navMenu.classList.toggle(`active`); */
/* }); */
/*  */
/* document.querySelectorAll(`.nav-link`).forEach((n) => */
/*   n.addEventListener(`click`, () => { */
/*     burgerNav.classList.remove(`active`); */
/*     navMenu.classList.remove(`active`); */
/*   }) */
/* ); */
/*  */
// Segunda Parte ===>
const navMenu = document.getElementById(`navMenu`);
const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
    navMenu.classList.toggle(`active`);
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
    navMenu.classList.remove(`active`);
  }
});
