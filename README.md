# 알고리즘 연습

## 추천 사이트

- [Programmers]
- [GoormLevel]
- [LeetCode]
- [HackerRank]

---

## 메서드 정리

## 문자 자르기

### 1. slice([beginIndex[, endIndex]])

- beginIndex부터 **endIndex를 제외**하고 추출
- beginIndex 가 음수이면 배열의 끝부터 추출

```js
let arr = ['1', '2', '3', '4'];
arr.slice(1);
// index 1부터 끝까지 잘라 추출한다.
//  ['2', '3', '4']

arr.slice(0, 1);
// ['1']

arr.slice(1, 4);
//  ['2', '3', '4']

arr.slice(-1);
// ['4']
```

### 2. splice(beginIndex[, deleteCount[, item1[, item2[, ...]]]])

- 배열에서 특정 위치에서 시작하여 count 만큼의 문자들을 삭제, 교체, 추가
- 기존 배열이 변화한다.

```js
var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
// ['angel', 'clown', 'drum', 'sturgeon']
var removed = myFish.splice(3, 1);
// ['mandarin']
var plus = myFish.splice(1, 1, 'drum');
// ['angel', 'drum', 'drum', 'sturgeon']
```

### 3. split(구분자)

- string 객체를 지정한 구분자를 이용하여 배열로 만들어 배열로 반환.
- 새로운 배열이 반환된다.

```js
let ab = 'abcw';
ab.split('b');
// (2) ['a', 'cw']
```

### 4. substring([beginIndex[, endIndex]])

- beginIndex부터 **endIndex를 제외**하고 추출

```js
let ab = '0123456';
ab.substring(2, 4);
// '23'
```

- slice와 비슷하다

```js
let ab = '0123456';
ab.slice(2, 4);
// '23'
```

### 5. substr(start[, length])

- 문자열에서 특정 위치에서 시작하여 length 만큼의 문자들을 반환

```js
let ab = '0123456';
ab.substr(2, 4);
// '2345'
```

---

## 배열 초기화

### 1. new Array()

#### 1. 특정 길이로 배열의 생성

```js
/* new Array() */
const arr = new Array(5);
console.log(arr); // => Array(5) []
console.log(arr[0]); // => undefined
console.log(arr.length); // => 5
```

```js
/* 직접 초기화 */
const arr2 = [0, 0, 0, 0, 0]; // => Array(5) [0, 0, 0, 0, 0]
console.log(arr2[0]); // => 0
console.log(arr2.length); // => 5
```

#### 2. 원하는 초기값으로 배열의 생성

```js
/* new Array()로 초기값 설정 */
const arr = new Array(0, 0, 0, 0, 0);
console.log(arr); // => Array(5) [0, 0, 0, 0, 0]
console.log(arr[0]); // => 0
console.log(arr.length); // => 5
```

### 2. Array.from( {length: 원하는 길이}, callback)

```js
/* Array.from()으로 길이가 5, 값이 0인 배열 생성하기 */
const arr = Array.from({ length: 5 }, () => 0);
console.log(arr); // => Array(5) [0, 0, 0, 0, 0]
console.log(arr[0]); // => 0
console.log(arr.length); // => 5
```

```js
/* Array.from()으로 길이가 5, 값이 (0~5)인 배열 생성 */
const arr = Array.from({ length: 5 }, (v, i) => i); // i(index) 1씩 증가
console.log(arr); // => Array(5) [0, 1, 2, 3, 4]
console.log(arr[0]); // => 0
console.log(arr.length); // => 5
```

## 배열 검색

### 1. find(callback)

인자로 받은 판별 함수를 만족하는 첫 번째 요소를 반환
return: 찾은 요소, 없다면 undefinded

### 2. findIndex(callback)

인자로 받은 판별 함수를 만족하는 첫 번째 index를 반환
return: number, 없다면 -1

### 3. indexOf

인자로 받은 요소를 만족하는 첫 번째 index를 반환
return: number, 없다면 -1

```js
const hello = ['a', 'b', 'c'];

hello.find((e) => e === 'b');
// 'b'

hello.findIndex((e) => e === 'b');
// 0

hello.indexOf('b');
// 1
```

## 반복문

### for(let x of s)

for...of 명령문은 반복가능한 객체 (Array, Map (en-US), Set, String, TypedArray, arguments 객체 등을 포함)에 대해서 반복하고 각 개별 속성값에 대해 실행되는 문이 있는 사용자 정의 반복 후크를 호출하는 루프를 생성합니다.

## 유니코드

### 1. charCodeAt()

- 대문자: 65 ~ 90
- 소문자: 97 ~ 122

- 97 - 65 = 32
- 소문자를 대문자로 변환 시 `-32` 해준다.

### 2. String.fromCharCode(number)

유니코드값을 문자열로 변환

## 기타

1. `Number.MAX_SAFE_INTEGER`
   최대 안전 정수

---

## 접근법

## 2차원 배열

### 1. 행열

```
..  0열1열2열3열4열
0행 10 13 10 12 15
1행 12 39 30 23 11
2행 11 25 50 53 15
3행 19 27 29 37 27
4행 19 13 30 13 19

arr[행][열]
arr[2][1] = 25
```

### 2. / 대각선 이차원 배열

`arr[i][length - i - 1]`

## 정규식

### 1. 소문자만 거르기

```js
// a-z 가 아닌 것을 빈 문자열 ''로 바꾼다.
// 소문자만 표출됨
String.replace(/[^a-z]/g, '');
```

<!-- 온라인 저지 사이트 -->

[programmers]: https://programmers.co.kr/learn/challenges
[boj]: https://www.acmicpc.net/step
[goormlevel]: https://level.goorm.io/
[leetcode]: https://leetcode.com/problemset/all/
[hackerrank]: https://www.hackerrank.com/dashboard
