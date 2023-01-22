// 격자판 최대합
function solution(arr) {
  let width = arr.length;
  let height = arr[0].length;

  let max = [];
  let a = 0;
  let b = 0;

  for (let i = 0; i < width; i++) {
    let col = 0;
    let row = 0;
    for (let k = 0; k < height; k++) {
      col += arr[i][k];
      row += arr[k][i];

      if (i === k) a += arr[i][k];

      if (i + k === 4) b += arr[i][k];
    }

    max.push(col, row, a, b);
  }

  return Math.max(...max);
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
