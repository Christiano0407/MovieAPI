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
let image = [...document.querySelectorAll(`.img-div`)];
// = Events =
