const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = fs.readFileSync(filePath).toString().trim();

let cro = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (let alphabet of cro) {
  input = input.split(alphabet).join("Q");
}

console.log(input.length);
