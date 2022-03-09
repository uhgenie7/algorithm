1. true가 차있는 Array 생성
`const arr = new Array(n + 1).fill(true);`

2. 
```for (let i = 0; i < n + 1; i++) {
  const numList = String(i).split("");
  //String으로 형변환. split("")으로 각 자리수를 배열로 만든다.
  
  if (numList.length >= 3) { // 한수는 세 자리부터 유의미하다
    const d = numList[1] - numList[0]; // 일의 자리와 십의 자리의 차이를 뺀 값을 d에 할당한다
    for (let j = 1; j < numList.length - 1; j++) { // 각 자리수가 담긴 배열의 갯수만큼 반복문을 돌린다 
      if (d !== numList[j + 1] - numList[j]) { // 백의 자리(혹은 그 이상)과 십의 자리(혹은 그 이상)의 차이가 d와 다르다면
        arr[i] = false; // 해당 배열은 false로 바꿔쳐준다.
      }
    }
  }
}

//filter를 돌려 true만 추출, 갯수를 세되, index 0 번째는 차감해준다
console.log(arr.filter((result) => result).length - 1);```
