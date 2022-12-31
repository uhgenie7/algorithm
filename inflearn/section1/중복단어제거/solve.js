function solution(s) {
  let answer = [];
  for (let x of s) {
    if (!answer.includes(x)) {
      answer.push(x);
    }
  }
  return answer;
}

function solution2(s) {
  let answer;
  answer = s.filter((x, i) => s.indexOf(x) === i);
  return answer;
}

let str = ['good', 'time', 'good', 'time', 'student'];
console.log(solution(str));
console.log(solution2(str));
