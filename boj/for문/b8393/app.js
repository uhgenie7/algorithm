const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = +input[0];

let n = 0;

for (let i = 1; i <= input; i++) {
  n += i;
}

console.log(n);
