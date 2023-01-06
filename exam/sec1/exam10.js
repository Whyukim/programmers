// 문자 찾기
function solution(str, s) {
  return str.split(s).length - 1;
}
let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));
