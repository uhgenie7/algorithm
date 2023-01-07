function solution(arr) {
  let answer = 0;
  let length = arr.length;
  // 12, 3, 6, 9
  let aroundArray1 = [-1, 0, 1, 0];
  let aroundArray2 = [0, 1, 0, -1];
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      let flag = 1;
      for (let a = 0; a < 4; a++) {
        let aroundx = i + aroundArray1[a];
        let aroundy = j + aroundArray2[a];
        if (
          aroundx >= 0 &&
          aroundx < length &&
          aroundy >= 0 &&
          aroundy < length &&
          arr[aroundx][aroundy] >= arr[i][j]
        ) {
          flag = 0;
          break;
        }
      }
      if (flag) answer++;
    }
  }
  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
