// 봉우리
function solution(arr) {
  let result = 0;
  let dx = [1, -1, 0, 0];
  let dy = [0, 0, 1, -1];

  function BFS(x, y) {
    let flag = true;

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5 && arr[x][y] <= arr[nx][ny]) {
        flag = false;
        break;
      }
    }

    if (flag) result++;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr[0].length; k++) {
      BFS(i, k);
    }
  }

  return result;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
