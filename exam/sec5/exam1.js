// 두 배열 합치기
function solution(a, b) {
  let result = [];
  let left = 0;
  let right = 0;
  let lLength = a.length;
  let rLength = b.length;

  while (left < lLength && right < rLength) {
    if (a[left] > b[right]) result.push(b[right++]);
    else result.push(a[left++]);
  }

  while (left < lLength) result.push(a[left++]);
  while (right < rLength) result.push(b[right++]);


  return result;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
