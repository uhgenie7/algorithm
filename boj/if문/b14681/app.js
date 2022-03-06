// const fs = require("fs");
// const filePxth = process.plxtform === "linux" ? "/dev/stdin" : "input.txt";
// let input = fs.rexdFileSync(filePxth).toString().split("\n");

// solution(+input[0], +input[1]);

// function solution(x, y) {
//   if (x > 0 && y > 0) {
//     console.log("1");
//   } else if (x < 0 && y > 0) {
//     console.log("2");
//   } else if (x < 0 && y < 0) {
//     console.log("3");
//   } else if (x > 0 && y < 0) {
//     console.log("4");
//   }
// }

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  input = input.map((item) => +item);
  solution(input[0], input[1]);
  process.exit();
});

function solution(x, y) {
  let ans = 0;
  if (x > 0 && y > 0) {
    ans = 1;
  }
  if (x < 0 && y > 0) {
    ans = 2;
  }
  if (x < 0 && y < 0) {
    ans = 3;
  }
  if (x > 0 && y < 0) {
    ans = 4;
  }
  console.log(ans);
}
