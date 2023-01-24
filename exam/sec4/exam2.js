// 뒤집은 소수
function solution(arr) {
  let result = [];

  for (let i of arr) {
    let num = Number(i.toString().split("").reverse().join(""));

    if (so(num)) result.push(num);
  }

  return result;
}

function so(num) {
  if (num === 1) return false;

  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) false;
  }

  return num;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
