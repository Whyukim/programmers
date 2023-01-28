// 두 배열 합치기
function solution(a, b) {
  let result = [];
  let l = (r = 0);
  const lLength = a.length;
  const rLength = b.length;

  a.sort((a, b) => a - b);
  b.sort((a, b) => a - b);

  while (l < lLength && r < rLength) {
    if (a[l] === b[r]) {
      result.push(a[l]);
      l++;
      r++;
    } else if (a[l] < b[r]) l++;
    else r++;
  }

  return result;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
