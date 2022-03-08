const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input[1]
  .split(" ")
  .map((n) => Number(n))
  .sort((a, b) => a - b);

console.log(input[0], input[input.length - 1]);
