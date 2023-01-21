// 점수 계산
function solution(arr) {
  let k = 0;
  let result = 0;

  for (let i of arr) {
    if (i === 0) k = 0;
    else result += ++k;
  }

  return result;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
