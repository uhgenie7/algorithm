const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input[1].split(" ").map((n) => Number(n));

let max;
let min;

max = Math.max(...input);
min = Math.min(...input);

console.log(min, max);
