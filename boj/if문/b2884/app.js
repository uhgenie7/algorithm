const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0].split(" ").map((item) => +item);

solution(input[0], input[1]);

function solution(H, M) {
  //   if (M - 45 < 0) {
  //     if (H === 0) {
  //       H = 23;
  //     } else {
  //       H = H - 1;
  //     }
  //     M = M - 45 + 60;
  //   } else {
  //     H = H - 45;
  //   }

  H -= 45;
  if (M < 0) {
    M += 60;
    H -= 1;
  }

  if (H < 0) {
    H = 23;
  }

  console.log(H, M);
}
