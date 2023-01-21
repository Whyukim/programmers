// 가위 바위 보
function solution(a, b) {
  const arr = [];

  for (let i = 0; i < a.length; i++) {
    const sum = a[i] - b[i];
    if (sum === 0) arr.push("D");
    else if (sum === 1 || sum === -2) arr.push("A");
    else arr.push("B");
  }

  return arr;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
