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
console.group("Btn Click");

function actionToggle() {
  const action = document.querySelector(".action-btn");
  action.classList.toggle("active");
}

function actionToggless() {
  const action = document.querySelector(".action-btn");
  action.classList.toggle("active");
}

console.groupEnd();
