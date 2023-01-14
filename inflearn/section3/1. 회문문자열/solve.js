function solution(s) {
  let answer = 'YES';
  const word = s.toLowerCase();
  let a = parseInt(word.length / 2);
  const wordArray = [...word];
  for (let i = 0; i < a; i++) {
    if (wordArray[i] !== wordArray[wordArray.length - i - 1]) {
      answer = 'NO';
    }
  }
  return answer;
}

function solution2(s) {
  let answer = 'YES';
  const word = s.toLowerCase();
  if (word.split('').reverse().join('') !== word) return 'NO';
  return answer;
}

let str = 'googoaG';
console.log(solution(str));
console.log(solution2(str));
