function solution(clothes) {
  const count = clothes.reduce((acc, cur) => {
    acc[cur[1]] = acc[cur[1]] ? acc[cur[1]] + 1 : 1;
    return acc;
  }, {});
  return Object.values(count).reduce((acc, cur) => acc * (cur + 1), 1) - 1;
}
