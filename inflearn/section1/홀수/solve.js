function solution(arr) {
  let sum, min;

  arr = arr.filter((n) => {
    return n % 2 === 1;
  });

  sum = arr.reduce((a, b) => a + b);
  min = Math.min(...arr);

  console.log(sum);
  console.log(min);
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
