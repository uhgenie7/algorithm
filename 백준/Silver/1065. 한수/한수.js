const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = +require("fs").readFileSync(filePath).toString().trim();

const n = +input;

const arr = new Array(n + 1).fill(true);

for (let i = 0; i < n + 1; i++) {
  const numList = String(i).split("");

  if (numList.length >= 3) {
    const d = numList[1] - numList[0];
    for (let j = 1; j < numList.length - 1; j++) {
      if (d !== numList[j + 1] - numList[j]) {
        arr[i] = false;
      }
    }
  }
}
console.log(arr.filter((result) => result).length - 1);
