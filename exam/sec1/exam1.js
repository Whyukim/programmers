// 세 수 중 최솟값
function solution(a, b, c) {
  return [a, b, c].sort((a, b) => a - b)[0];
}

console.log(solution(2, 5, 1));
