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

대문자: 65~90
소문자: 97~122

- 97 - 65 = 32
- 소문자를 대문자로 변환 시 `-32` 해준다.

### 2. String.fromCharCode(number)

유니코드값을 문자열로 변환

## 기타

1. `Number.MAX_SAFE_INTEGER`
   최대 안전 정수
