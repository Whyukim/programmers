// 가장 긴 문자열
function solution(arr) {
  return arr.reduce((a, b) => (a.length > b.length ? a : b));
}

let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
