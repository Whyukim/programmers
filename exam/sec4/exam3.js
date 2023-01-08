// 멘토링
function solution(arr) {
  let answer = {};

  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr[i].length; k++) {
      for (let j = k + 1; j < arr[i].length; j++) {
        answer[`${arr[i][k]}, ${arr[i][j]}`] =
          answer[`${arr[i][k]}, ${arr[i][j]}`] + 1 || 1;
      }
    }
  }

  return Object.keys(answer).filter((key) => answer[key] === 3).length;
}

const arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
