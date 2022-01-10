/* console.group("Button"); */
/*  */
/* const actionBtn = document.getElementById(`actionBtn`); */
/* console.log(actionBtn); */
/*  */
/* actionBtn.addEventListener("click", actionToogle); */
/*  */
/* function actionToogle() { */
/*   actionBtn.classList.toggle(`active`); */
/* } */
/* console.groupEnd; */

function actionToggle() {
  const action = document.querySelector(".action-btn");
  action.classList.toggle("active");
}

function actionToggles() {
  const actions = document.getElementById("actionBtn");
  actions.classList.toggle("active");
}
