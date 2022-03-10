const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");
const testcase = +input[0];

for (let i = 1; i <= testcase; i++) {
  let result = "";
  const [number, char] = input[i].split(" ");

  for (let j = 0; j < char.length; j++) {
    for (let c = 0; c < number; c++) {
      result += char[j];
    }
  }

  console.log(result);
}
