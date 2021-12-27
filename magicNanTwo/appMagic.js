const list = document.querySelectorAll(`.list`);
// 1 =>
function activeLink() {
  list.forEach((item) => item.classList.remove(`active`));
  this.classList.add(`active`);
}
// 2 =>
list.forEach((item) => {
  item.addEventListener(`click`, activeLink);
});
