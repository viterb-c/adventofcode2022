const fs = require("fs");

const fileContent = fs.readFileSync("./input.txt", "utf-8");
const regex = /(\d+)-(\d+),(\d+)-(\d+)/;

let pairsPart1 = 0;
let pairsPart2 = 0;

fileContent.split("\n").forEach((line) => {
  const sections = line.match(regex);
  if (!sections || sections.length !== 5) {
    return;
  }
  const oneLeft = Number(sections[1]);
  const oneRight = Number(sections[2]);
  const twoLeft = Number(sections[3]);
  const twoRight = Number(sections[4]);
  if (
    (oneLeft <= twoLeft && twoRight <= oneRight) ||
    (twoLeft <= oneLeft && oneRight <= twoRight)
  ) {
    pairsPart1++;
  } else if (
    (oneLeft <= twoRight && twoLeft <= oneLeft) ||
    (oneRight <= twoRight && twoLeft <= oneRight) ||
    (twoLeft <= oneRight && oneLeft <= twoLeft) ||
    (twoRight <= oneRight && oneLeft <= twoRight)
  ) {
    pairsPart2++;
  }
});
console.log("Part 1", pairsPart1);
console.log("Part 2", pairsPart1 + pairsPart2);
