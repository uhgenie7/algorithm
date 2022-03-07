const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString();
let add = 0;
let count = 0;
let N = +input;
while (true) {
  add = parseInt(N / 10) + (N % 10);
  N = (N % 10) * 10 + (add % 10);
  count++;
  if (N == input) {
    console.log(count);
    break;
  }
}
