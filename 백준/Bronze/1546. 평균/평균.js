const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let examLength = input[0];
let scores = input[1].split(" ").map(Number);
let M = Math.max(...scores);
let newScore = scores.map((x) => {
  return (x / M) * 100;
});

let sum = newScore.reduce((a, b) => {
  return a + b;
}, 0);

console.log(sum / +examLength);
