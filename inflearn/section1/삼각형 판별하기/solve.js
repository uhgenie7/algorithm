function solution(a, b, c) {
  let answer = 'YES',
    max;

  let total = a + b + c;
  a > b ? (max = a) : (max = b);
  max > c ? max : (max = c);
  total - max <= max ? (answer = 'NO') : answer;

  return answer;
}

console.log(solution(13, 33, 17));
