const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let num = input[0].split(" ");
let num2 = input[1].split(" ");
let answer = "";
for (let i = 0; i < +num[0]; i++) {
  if (num2[i] < +num[1]) {
    answer += num2[i] + " ";
  }
}

console.log(answer);
