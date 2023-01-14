function solution(str) {
  let answer = str.replace(/[^0-9]/g, '');
  answer = parseInt(answer);
  return answer;
}

function solution2(str) {
  let answer = '';
  for (let x of str) {
    if (!isNaN(x)) answer += x;
  }
  return parseInt(answer);
}

function solution3(str) {
  let answer = 0;
  for (let x of str) {
    if (!isNaN(x)) answer = answer * 10 + Number(x);
  }
  return answer;
}

let str = 'g0en2T0s8eSoft';
console.log(solution(str));
console.log(solution2(str));
console.log(solution3(str));
