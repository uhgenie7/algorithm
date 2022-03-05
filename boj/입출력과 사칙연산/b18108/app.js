const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = Number(input[0]);
solution(input - 543);

function solution(input) {
  console.log(input);
}
