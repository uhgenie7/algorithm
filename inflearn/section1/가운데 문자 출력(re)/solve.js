function solution(s) {
  let answer = '';
  let mid = parseInt(s.length / 2);

  if (s.length % 2 === 1) {
    // answer = s[mid];
    answer = s.substring(mid, mid + 1);
  } else {
    mid = s.length / 2;
    // answer = s[mid - 1] + s[mid];
    answer = s.substring(mid - 1, mid + 1);
  }

  return answer;
}
console.log(solution('study'));
console.log(solution('stdy'));
console.log(solution('1234567'));
