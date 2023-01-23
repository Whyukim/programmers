// 유효한 팰린드롬
function solution(arr) {
  let result = true;

  let reg = /[^A-Z]/g;
  arr = arr.toUpperCase().replace(reg, "");

  let length = arr.length;
  console.log(arr);

  for (let i = 0; i < length / 2 - 1; i++) {
    if (arr[i] !== arr[length - 1 - i]) return (result = false);
  }

  return result ? "YES" : "NO";
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
