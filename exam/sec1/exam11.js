// 대문자 찾기
function solution(str) {
  return str.split("").filter((v) => v === v.toUpperCase()).length;
}

let str = "KoreaTimeGood";
console.log(solution(str));
