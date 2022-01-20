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
tl.from(
  ".landing section .content .features .feature h1, .landing section .content .features .feature p",
  0.5,
  { y: "100" },
  2.5
);

tl.fromTo(
  ".landing .section .content .features .feature span",
  0.5,
  { height: "0" },
  { height: "10" },
  3
);

tl.fromTo(
  ".landing .section .content .features .feature:nth-child(2) span",
  0.5,
  { height: "0" },
  { height: "50" },
  3
);
// got
tl.fromTo(
  ".landing .section .content .theme h2 .wrap",
  1,
  { top: "300" },
  { top: "0" },
  1
);
// Miracle

console.groupEnd();
