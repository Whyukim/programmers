// 가운데 문자 출력
function solution(str) {
  return str.length % 2 === 0
    ? str.substr(str.length / 2 - 1, 2)
    : str.substr(str.length / 2, 1);
}

console.log(solution("stloroldy"));
