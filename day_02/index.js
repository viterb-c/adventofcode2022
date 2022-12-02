const fs = require("fs");

const fileContent = fs.readFileSync("./input.txt", "utf-8");

// PART 1
const shapesScoresPart1 = {
  A: { X: 4, Y: 8, Z: 3 },
  B: { X: 1, Y: 5, Z: 9 },
  C: { X: 7, Y: 2, Z: 6 },
};
let scorePart1 = 0;

// PART 2
const shapesScoresPart2 = {
  A: { X: 3, Y: 4, Z: 8 },
  B: { X: 1, Y: 5, Z: 9 },
  C: { X: 2, Y: 6, Z: 7 },
};
let scorePart2 = 0;
fileContent.split("\n").forEach((line) => {
  const cmd = line.split(" ");
  if (cmd.length == 2) {
    scorePart1 += shapesScoresPart1[cmd[0]][cmd[1]];
    scorePart2 += shapesScoresPart2[cmd[0]][cmd[1]];
  }
});
console.log("Part 1", scorePart1);
console.log("Part 2", scorePart2);
