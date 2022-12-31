function solution(s) {
  let answer = '';
  for (let x of s) {
    if (!answer.includes(x)) {
      answer += x;
    }
  }
  return answer;
}

// k의 수
function solution2(s) {
  let answer = 0;
  let pos = s.indexOf('k');

  while (pos !== -1) {
    answer++;
    pos = s.indexOf('k', pos + 1);
  }
  return answer;
}

console.log(solution('ksekkset'));
console.log(solution2('ksekkset'));
