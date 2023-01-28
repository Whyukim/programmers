// 두 배열 합치기
function solution(num, n) {
  let result = 0;
  let sum = 0;
  let l = (r = 0);
  const length = n.length;

  while (l < length) {
    sum += n[r];

    if (sum < num) {
      r++;
      continue;
    }

    if (sum === num) result++;
    sum = 0;
    r = ++l;
  }

  return result;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
