const fs = require("fs");

const fileContent = fs.readFileSync("./input.txt", "utf-8");
// Part 1

let sum = 0;
fileContent.split("\n").forEach((line) => {
  const firstR = line.substring(0, line.length / 2);
  const secondR = line.substring(line.length / 2);

  for (let i = 0; firstR.length; i++) {
    if (secondR.includes(firstR[i])) {
      sum +=
        firstR[i] < "a"
          ? firstR[i].charCodeAt(0) - 38
          : firstR[i].charCodeAt(0) - 96;
      return;
    }
  }
});
console.log("Part 1", sum);

// Part 2
let sumPart2 = 0;
const groups = fileContent.split("\n");
for (let i = 0; i < groups.length; i += 3) {
  for (let j = 0; groups[i].length; j++) {
    const letter = groups[i][j];

    if (groups[i + 1].includes(letter) && groups[i + 2].includes(letter)) {
      sumPart2 +=
        letter < "a" ? letter.charCodeAt(0) - 38 : letter.charCodeAt(0) - 96;
      break;
    }
  }
}
console.log("Part 2", sumPart2);
