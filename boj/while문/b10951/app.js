const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let i = 0;

while (i < input.length - 1) {
  let number = input[i].split(" ").map((x) => Number(x));
  a = number[0];
  b = number[1];

  console.log(a + b);
  i++;
}
