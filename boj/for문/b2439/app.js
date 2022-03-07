const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = +input[0];
let star = new Array(input).fill(" ");
for (let i = input - 1; i >= 0; i--) {
  star[i] = "*";
  console.log(star.join(""));
}
