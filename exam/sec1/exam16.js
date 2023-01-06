// 중복단어제거
function solution(arr) {
  return [...new Set(arr)];
}

let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
