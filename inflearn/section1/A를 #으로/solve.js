let str = 'BANANA';

function solution(s) {
  let answer = '';
  answer = s.replaceAll('A', '#');
  return answer;
}

function solution2(s) {
  let answer = '';
  for (let x of s) {
    x === 'A' ? (answer += '#') : (answer += x);
  }
  return answer;
}

console.log(solution(str));
console.log(solution2(str));
