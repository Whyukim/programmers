// 크레인 인형뽑기(카카오 기출)
function solution(a, b) {
  let result = 0;
  let arr = [];

  for (let i = 0; i < b.length; i++) {
    const pickNum = b[i] - 1;
    for (let k = 0; k < a.length; k++) {
      const pick = a[k][pickNum];
      if (pick !== 0) {
        if (pick === arr[arr.length - 1]) {
          arr.pop();
          result += 2;
        } else arr.push(pick);

        a[k][pickNum] = 0;
        break;
      }
    }
  }

  return result;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
