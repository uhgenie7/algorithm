const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let answer = "";

for (let i = 1; i <= input[0]; i++) {
  let number = input[i].split(" ");
  answer +=
    "Case #" + i + ": " + (Number(number[0]) + Number(number[1])) + "\n";
}

console.log(answer);
