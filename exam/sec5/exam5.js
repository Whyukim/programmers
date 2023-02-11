// 최대 매출
function solution(n, arr) {
  let sum = 0;

  for (let i = 0; i < n; i++) sum += arr[i];
  let max = sum;

  for (let i = n; i < arr.length; i++) {
    sum += arr[i] - arr[i - n];
    max = Math.max(max, sum);
  }

  return max;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
