const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(Number);

solution(input[0], input[1], input[2]);

function solution(A, B, C) {
  let count = 0;
  let number = String(A * B * C);
  for (let i = 0; i < 10; i++) {
    count = 0;
    for (let j = 0; j < number.length; j++) {
      if (number[j] == i) {
        count++;
      }
    }
    console.log(count);
  }
}
