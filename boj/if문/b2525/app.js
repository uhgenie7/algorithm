const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const current = input[0].split(" ").map(Number);
let curHour = current[0];
let curMin = current[1];
let cookTime = Number(input[1]);

solution(curHour, curMin, cookTime);

function solution(A, B, C) {
  let cookEndTimeHour = parseInt((A * 60 + B + C) / 60);
  let cookEndTimeMin = parseInt((A * 60 + B + C) % 60);

  console.log(
    cookEndTimeHour >= 24 ? cookEndTimeHour - 24 : cookEndTimeHour,
    cookEndTimeMin
  );
}
