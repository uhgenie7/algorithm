function solution(s) {
  let answer = 0;
  let origin = s;
  let upper = s.toUpperCase();
  for (let x of origin) {
    for (let y of upper) {
      x === y && answer++;
    }
  }
  return answer;
}

let str = 'KoreaTimeGood';
console.log(solution(str));
