const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const current = input[0].split(" ").map(Number);
let firstDice = current[0];
let secondDice = current[1];
let thirdDice = current[2];

solution(firstDice, secondDice, thirdDice);

function solution(A, B, C) {
  let money;

  if (A === B && A === C && B === C) return console.log(10000 + A * 1000);

  if (A !== B || A !== C || B !== C) {
    if (A === B || A === C) return console.log(1000 + A * 100);
    if (B === C) return console.log(1000 + B * 100);
  }

  if (A !== B && A !== C && B !== C) {
    let max = Math.max(A, B, C);
    console.log(max * 100);
  }
}
