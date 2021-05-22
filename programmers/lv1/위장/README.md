1. clothes.reduce(function,{}) 최초값을 빈 객체로 생성하여 clothes를 순차적으로 키값(t[1]) 검색
2. undefined는 논리연산에서 false이므로 해당 키의 값이 undefined이면 해당 키값에 1을 넣어줌.
3. 키의 값이 존재한다면 해당 값에 +1을 해줌.
4. 이렇게 생성된 Key와 Value를 Object.values를 통해 값만 불러오도록 함.
5. reduce(function,1) 최초 값을 1로 설정하고 배열을 순차적돌며 이전 값에 (해당 옷종류의 갯수)+1(옷을 입지않은 경우)를 곱함.
6. 모든 옷을 입지 않은 경우 제외 -1 후 return.

tip: 옷을 입을 수 있는 가지수는, 그 옷의 종류가 만약 2개라고 한다면
그 옷을 입지 않을 경우, 첫 번째옷을 입을 경우, 두 번째 입을 경우 총 3가지이다. (2 + 1)
이렇게 해서 전체 경우의 수는 옷의 종류 수만큼 곱해준다.
하지만 전부 옷을 입지않을 경우의 수 1가지가 있기 때문에 전체 경우의 수에서 1을 빼준다.

알아야 할 개념:
`Object.values()` : Object.values() 메소드는 전달된 파라미터 객체가 가지는 (열거 가능한) 속성의 값들로 이루어진 배열을 리턴합니다. 이 배열은 for...in 구문과 동일한 순서를 가집니다. (for in 반복문은 프로토타입 체인 또한 열거한다는 점에서 차이가 있습니다.)

<pre><code>
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.values(object1));
// expected output: Array ["somestring", 42, false]
</code></pre>
