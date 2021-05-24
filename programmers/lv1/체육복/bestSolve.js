function solution(n, lost, reserve) {
  var realLost = lost.filter((a) => !reserve.includes(a));
  var realReserve = reserve.filter((a) => !lost.includes(a));

  return (
    n -
    realLost.filter((a) => {
      var b = realReserve.find((r) => Math.abs(r - a) <= 1);
      if (!b) return true;
      realReserve = realReserve.filter((r) => r !== b);
    }).length
  );
}

var realLost = lost.filter((a) => !reserve.includes(a)); // 진짜 체육복이 없는 학생들의 번호가 담긴 배열
var realReserve = reserve.filter((a) => !lost.includes(a)); // 진짜 체육복을 두개 가지고있는 학생들의 번호가 담긴 배열

return (
  n -
  realLost.filter((a) => {
    var b = realReserve.find((r) => Math.abs(r - a) <= 1); // 체육복이 두개인 학생들 중 체격차가 1인 학생 찾기
    if (!b) return true; // 체육복이 두개인 학생들 중 체격차가 1인 학생이 없을 시 체육복을 갖지 못해 lost에 그대로 남음
    realReserve = realReserve.filter((r) => r !== b); // 체육복이 두개인 학생들 중 체격차가 1인 학생이 존재하여 해당 학생은 체육복을 받았으니 lost에서 제외 및 reserve에서도 빌려준 학생 제외
  }).length
); // 전체 학생 수에서 체육복이 없고 빌리지도 못한 학생 수 빼기

//  https://jsikim1.tistory.com/52
