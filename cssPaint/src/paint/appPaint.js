import { SVG } from "https://cdn.skypack.dev/@svgdotjs/svg.js";
import { random } from "https://cdn.skypack.dev/@georgedoescode/generative-utils";

const width = 200;
const height = 200;

const svg = SVG().viewbox(0, 0, width, height).addTo("body");

const cols = 10;
const rows = 10;

const colSize = width / cols;
const rowSize = height / rows;

for (let x = 0; x < width; x += colSize) {
  for (let y = 0; y < height; y += rowSize) {
    const choice = random(1, 6, true);

    switch (choice) {
      case 1:
        svg.rect(colSize, rowSize).x(x).y(y).fill("#F25C54").scale(0.75);
        break;
      case 2:
        svg
          .line(x, y, x + colSize, y + rowSize)
          .stroke("#1D1934")
          .scale(0.75);
        break;
      case 3:
        svg.circle(colSize, rowSize).x(x).y(y).fill("#FFD53D").scale(0.75);
        break;
    }
  }
}
