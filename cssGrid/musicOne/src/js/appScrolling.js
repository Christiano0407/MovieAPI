// Scrolling Javascript Animation
const sliderWrapper = document.getElementById(`sliderWrapper`);
const slider = document.getElementById(`slider`);
let clonesWidth;
let sliderWidth;
let clones = [];
let disableScroll = false;
let scrollPos;
let items = [...document.querySelectorAll(`.slider-item`)];
console.log(items);
let images = [...document.querySelectorAll(`.img-div`)];
// = Events =
images.forEach((image, idx) => {
  image.style.backgroundImage = `url(/src/img/${idx + 1}.jpg)`;
});
items.forEach((item) => {
  let clone = item.cloneNode(true);
  clone.classList.add(`clone`);
  slider.appendChild(clone);
  clones.push(clone);
});

function getClonesWidth() {
  let width = 0;
  clones.forEach((clone) => {
    width += clone.offsetWidth;
  });
  return width;
}

function getScrollPos() {
  return window.scrollY;
}

/* function setScrollPos(pos) { */
/*   window.scrollY({ top: pos }); */
/* } */
function scrollUpdate() {
  scrollPos = getScrollPos();
  if (clonesWidth + scrollPos >= sliderWidth) {
    window.scrollTo({ top: 1 });
  } else if (scrollPos <= 0) {
    window.scrollTo({ top: sliderWidth - clonesWidth - 1 });
  }
  slider.style.transform = `translateX(${-window.scrollY}px)`;
  requestAnimationFrame(scrollUpdate);
}

function onLoad() {
  calculateDimension();
  document.body.style.height = `${sliderWidth}px`;
  window.scrollTo({ top: 1 });
  scrollUpdate();
}

function calculateDimension() {
  sliderWidth = slider.getBoundingClientRect().width;
  clonesWidth = getClonesWidth();
}
onLoad();
