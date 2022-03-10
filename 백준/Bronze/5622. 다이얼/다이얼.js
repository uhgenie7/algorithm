const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = fs.readFileSync(filePath).toString().trim();

let time = 0;
for (let i = 0; i < input.length; i++) {
  switch (input[i]) {
    case "A":
    case "B":
    case "C":
      time += 3;
      break;
    case "D":
    case "E":
    case "F":
      time += 4;
      break;
    case "G":
    case "H":
    case "I":
      time += 5;
      break;
    case "J":
    case "K":
    case "L":
      time += 6;
      break;
    case "M":
    case "N":
    case "O":
      time += 7;
      break;
    case "P":
    case "Q":
    case "R":
    case "S":
      time += 8;
      break;
    case "T":
    case "U":
    case "V":
      time += 9;
      break;
    case "W":
    case "X":
    case "Y":
    case "Z":
      time += 10;
      break;
  }
}

console.log(time);


    // ============================ 풀이 2 ===============================

    // 모든 숫자는 걸기 위해서 1초씩 더 걸린다.
    let minTime = alphabets.length;

    for (let i = 0; i < alphabets.length; i++) {
        const ascii = alphabets[i].charCodeAt();

        if (ascii <= 'C'.charCodeAt()) {
            minTime += 2;
        } else if (ascii <= 'F'.charCodeAt()) {
            minTime += 3;
        } else if (ascii <= 'I'.charCodeAt()) {
            minTime += 4;
        } else if (ascii <= 'L'.charCodeAt()) {
            minTime += 5;
        } else if (ascii <= 'O'.charCodeAt()) {
            minTime += 6;
        } else if (ascii <= 'S'.charCodeAt()) {
            minTime += 7;
        } else if (ascii <= 'V'.charCodeAt()) {
            minTime += 8;
        } else if (ascii <= 'Z'.charCodeAt()) {
            minTime += 9;
        }
    }

