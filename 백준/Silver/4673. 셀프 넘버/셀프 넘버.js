function nSum(N) {
  let sum = N;

  while (true) {
    if (N === 0) break;
    sum += N % 10;
    N = parseInt(N / 10);
  }

  return sum;
}

function selfnumber(N) {
  let notSelfNumer = [];
  let result = [];

  for (let i = 1; i <= N; i++) {
    let index = nSum(i);
    if (index <= N) {
      notSelfNumer[index] = true;
    }
  }

  for (let i = 1; i <= N; i++) {
    if (!notSelfNumer[i]) result.push(i);
  }
  console.log(result.join("\n"));
}

selfnumber(10000);
