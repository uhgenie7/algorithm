const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let C = +input[0];

for (let i = 1; i <= C; i++) {
  let sum = 0;
  let numberArr = input[i].split(" ").map(Number);
  let aver;
  let count = 0;

  for (let j = 1; j <= numberArr[0]; j++) {
    sum += numberArr[j];
  }

  aver = sum / numberArr[0];

  for (let x = 1; x <= numberArr[0]; x++) {
    if (numberArr[x] > aver) {
      count++;
    }
  }

  let result = ((count / numberArr[0]) * 100).toFixed(3);
  console.log(result + "%");
}
