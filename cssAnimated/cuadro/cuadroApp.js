// Animation cuadro>
const toggle = document.querySelector(`#reducemotion`);
let motionQuery = matchMedia("(prefers-reduced-motion)");

// our GSAP animation
let tween = gsap.to(".js", {
  rotate: 360,
  duration: 4,
  repeat: -1,
  ease: "none",
  paused: true,
});

const handleReduceMotion = () => {
  if (motionQuery.matches || toggle.checked) {
    tween.progress(1).pause();
    document.body.classList.add(`reduceMotion`);
  } else {
    tween.play();
    document.body.classList.remove("reduceMotion");
  }
};

motionQuery.addListener(handleReduceMotion);

toggle.addEventListener(`click`, () => {
  handleReduceMotion();
});

handleReduceMotion();
