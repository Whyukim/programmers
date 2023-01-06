// 삼각형 판별하기
function solution(a, b, c) {
  return [a, b, c].sort((a, b) => b - a).reduce((a, b) => a - b) <= 0
    ? "yes"
    : "no";
}

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));
