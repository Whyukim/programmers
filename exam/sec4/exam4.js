// 졸업 선물
function test(max, arr) {
  let answer = 0;

  const value = arr.sort((a, b) => a[0] / 2 + a[1] - (b[0] / 2 + b[1]));
  value.reduce((prev, curr) => {
    if (prev >= max) return;

    answer++;
    if (prev + curr[0] + curr[1] < max) return prev + curr[0] + curr[1];
    else {
      if (prev + curr[0] / 2 + curr[1] <= max) {
        return prev + curr[0] / 2 + curr[1];
      } else return;
    }
  }, 0);

  return answer;
}

const arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
