// 일곱 난쟁이
function solution(arr) {
  const sum = arr.reduce((a, b) => a + b);

  for (let i = 0; i < arr.length - 1; i++) {
    for (let k = i + 1; k < arr.length; k++) {
      if (sum - arr[i] - arr[k] === 100) {
        arr.splice(k, 1);
        arr.splice(i, 1);
      }
    }
  }
  return arr;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
