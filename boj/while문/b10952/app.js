const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

while (input[0][0] != 0) {
  const number = input.shift().split(" ");
  console.log(+number[0] + +number[1]);
}
