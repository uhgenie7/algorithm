const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = fs.readFileSync(filePath).toString().trim().split(" ");

if (input[0] != "") {
  console.log(input.length);
} else {
  console.log(0);
}
