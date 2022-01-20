console.group("Animation GSAP");

// GSAP Animation ==>
const tl = new TimelineMax();

// Circle Outer >
tl.fromTo(".circle__outer", 1, { opacity: "0" }, { opacity: "1" }, 1.5);
//  Circle Inner
tl.fromTo(".circle__inner", 1, { opacity: "0" }, { opacity: "1" }, 2.5);
// Aside
tl.from(".landing aside", 0.5, { x: "-150" }, 0.5);
// header
tl.from(".landing .section .header", 0.8, { y: "-150" }, 1);
//Features

console.groupEnd();
