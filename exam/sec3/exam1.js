// 회문 문자열
function solution(arr) {
  let result = true;
  let length = arr.length;

  arr = arr.toUpperCase();

  for (let i = 0; i <= length / 2 - 1; i++) {
    if (arr[i] !== arr[length - 1 - i]) return (result = false);
  }

  return result ? "YES" : "NO";
}

let str = "gomlmoG";
console.log(solution(str));
