// 중복문자제거
function solution(str) {
  return [...new Set(str.split(""))].join("");
}

console.log(solution("ksekkset"));
