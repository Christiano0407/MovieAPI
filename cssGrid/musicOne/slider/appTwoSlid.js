// Slider Two
const swiper = new Swiper(`.swiper`, {
  // Optional parameters
  direction: `horizontal`,
  loop: true,
  speed: 400,

  slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // If we need pagination
  /* pagination: { */
  /*   el: `.swiper-pagination`, */
  /* }, */
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // And if we need scrollbar
  /*  scrollbar: { */
  /*    el: `.swiper-scrollbar`, */
  /*  }, */
});
