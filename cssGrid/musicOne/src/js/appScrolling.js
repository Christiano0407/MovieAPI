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
