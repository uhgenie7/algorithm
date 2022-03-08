const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const countArr = [];

input.forEach((x) => {
  const num = x % 42;

  if (countArr.indexOf(num) === -1) {
    countArr.push(num);
  }
});

console.log(countArr.length);
