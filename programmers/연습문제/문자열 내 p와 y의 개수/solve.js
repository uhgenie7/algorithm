function solution(s) {
  let stringLowerCase = s.toLowerCase();
  let pResult = stringLowerCase.match(/p/g) || [];
  let yResult = stringLowerCase.match(/y/g) || [];
  let pCount = pResult.length;
  let yCount = yResult.length;

  if (pCount == yCount || pCount == null || yCount == null) {
    return true;
  } else {
    return false;
  }
}
