console.group("Btn Click Nav");
function actionToggle() {
  const dropList = document.querySelector(".drop__list--media");
  dropList.classList.toggle("active");
}
const drop = document.querySelector(".drop");
drop.addEventListener("click", () => {
  drop.classList.toggle("active");
});

console.groupEnd();
