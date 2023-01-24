// 자릿수의 합
function solution(a, arr) {
  let result = 0;
  let max = 0;

  for (let num of arr) {
    let sum = num
      .toString()
      .split("")
      .reduce((a, b) => a + Number(b), 0);

    if (max <= sum && result < num) {
      result = num;
      max = sum;
    }
  }

  return result;
}

let arr = [128, 460, 603, 40, 521, 137, 123, 235, 1234];
console.log(solution(7, arr));
