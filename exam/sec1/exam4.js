// 1부터 N까지 합 출력하기
function solution(num) {
  if (num === 1) return 1;
  return num + solution(num - 1);
}

console.log(solution(6));
console.log(solution(10));
