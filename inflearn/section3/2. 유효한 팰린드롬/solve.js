function solution(s) {
  let answer = 'YES';
  let word = s.toLowerCase().replace(/[^a-z]/g, '');
  if (word.split('').reverse().join('') !== word) return 'NO';
  return answer;
}
let str = 'found7, time: study; Yduts; emit, 7Dnuof';
console.log(solution(str));
