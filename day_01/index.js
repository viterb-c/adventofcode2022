const fs = require("fs");

const fileContent = fs.readFileSync("./input.txt", "utf-8");

const elvesCalories = [];
let currentCalories = 0;
fileContent.split("\n").forEach((line) => {
  const parsed = parseInt(line);
  if (!isNaN(parsed)) {
    currentCalories += Number(line);
  } else {
    elvesCalories.push(currentCalories);
    currentCalories = 0;
  }
});
const topThreeElves = elvesCalories.sort((a, b) => b - a).slice(0, 3);
// Part 1
console.log("Part 1", topThreeElves[0]);
// Part 2
console.log(
  "Part 2",
  topThreeElves.reduce((a, b) => a + b)
);
