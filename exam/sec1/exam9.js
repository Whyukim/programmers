// A를 #으로
function solution(str) {
  return str.replace(/A/g, "#");
}

let str = "BANANA";
console.log(solution(str));
