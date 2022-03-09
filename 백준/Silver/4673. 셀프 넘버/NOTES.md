1. nSum: d(N), 즉, 자신과 자신의 각 자리수를 더하는 합계 함수 


```
function nSum(N) {
  let sum = N;

  while (true) {
    if (N === 0) break;
    sum += N % 10;
    N = parseInt(N / 10);
  }

  return sum;
}
```

2. selfnumber: 셀프넘버를 추출하는 함수
```
function selfnumber(N) {
  let notSelfNumer = [];
  let result = [];

  for (let i = 1; i <= N; i++) {
    let index = nSum(i);
    // nSum의 result 값, 즉 sum이 index가 된다.
    // nSum(1) = index = 2
    if (index <= N) {
      notSelfNumer[index] = true;
      // [empty, empty, true]
    }
  }

  //notSelfNumber index가 empty이면 해당하는 숫자를 result에 push한다.
  for (let i = 1; i <= N; i++) {
    if (!notSelfNumer[i]) result.push(i);
  }
  
  
  console.log(result.join("\n"));
}

```

selfnumber(10000);

