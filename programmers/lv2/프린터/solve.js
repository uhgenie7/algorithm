function solution(priorities, location) {
  let target_index = location;
  let answer = 1;

  while (priorities.length > 0) {
    let first = priorities.shift();
    if (priorities.some((value) => value > first)) {
      priorities.push(first);
    } else {
      if (target_index === 0) {
        break;
      } else {
        answer++;
      }
    }

    if (target_index === 0) {
      target_index = priorities.length - 1;
    } else {
      target_index--;
    }
  }
  return answer;
}
