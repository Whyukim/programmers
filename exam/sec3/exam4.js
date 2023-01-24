// 가장 짧은 문자거리
function solution(str, val) {
  let result = [];
  let k = 0;

  for (let i of str) {
    if (i === val) {
      k = 0;
      result.push(k);
    } else {
      result.push(++k);
    }
  }

  k = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === val) k = 0;
    else result[i] = Math.min(result[i], ++k);
  }

  return result.join(" ");
}

let str = "teachermode";
console.log(solution(str, "e"));
