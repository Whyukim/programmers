// 문자열 압축
function solution(str) {
  const length = str.length;
  let result = "";
  let k = 1;

  for (let i = 0; i < length; i++) {
    if (str[i] === str[i + 1]) {
      k++;
    } else {
      if (k === 1) result += str[i] + "";
      else result += str[i] + k + "";

      k = 1;
    }
  }

  return result;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
