`Array.prototype.some()`
some() 메서드는 배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트합니다.
(불리언 값으로 리턴됨)

<pre><code>
const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true
</code></pre>

이를 이용하여 조건문 안엥 넣어 판별할 수 있습니다.
